/* ============================================================
   FOOTBALL MANAGER — js/storage.js
   localStorage persistence, JSON export/import, auto-save
   ============================================================ */

import { SAVE } from "./util/constants.js";
import { serializeState, hydrateState, state } from "./state.js";

/* ============================================================
   LOCALSTORAGE HELPERS
   ============================================================ */

export function isStorageAvailable() {
  try {
    const k = "__fm_test__";
    localStorage.setItem(k, "1");
    localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

export function saveExists() {
  if (!isStorageAvailable()) return false;
  try {
    return localStorage.getItem(SAVE.KEY) !== null;
  } catch {
    return false;
  }
}

/* ============================================================
   SAVE / LOAD
   ============================================================ */

export function saveGame() {
  if (!isStorageAvailable()) {
    console.warn("localStorage unavailable — save skipped");
    return false;
  }
  try {
    const payload = serializeState();
    payload.lastSaveAt = new Date().toISOString();
    payload.version = SAVE.VERSION;
    localStorage.setItem(SAVE.KEY, JSON.stringify(payload));
    state.lastSaveAt = payload.lastSaveAt;
    return true;
  } catch (e) {
    console.error("Save failed:", e);
    return false;
  }
}

export function loadGame() {
  if (!isStorageAvailable()) return false;
  try {
    const raw = localStorage.getItem(SAVE.KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return hydrateState(parsed);
  } catch (e) {
    console.error("Load failed:", e);
    return false;
  }
}

export function deleteSave() {
  if (!isStorageAvailable()) return false;
  try {
    localStorage.removeItem(SAVE.KEY);
    return true;
  } catch {
    return false;
  }
}

/* ============================================================
   META  (for showing save info on the title screen)
   ============================================================ */

export function getSaveMeta() {
  if (!isStorageAvailable()) return null;
  try {
    const raw = localStorage.getItem(SAVE.KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      version: parsed.version,
      season: parsed.season,
      userClubId: parsed.userClubId,
      currentDate: parsed.currentDate,
      matchday: parsed.matchday,
      lastSaveAt: parsed.lastSaveAt,
      createdAt: parsed.createdAt
    };
  } catch {
    return null;
  }
}

/* ============================================================
   AUTO-SAVE
   Simple: call autosave() at well-defined moments:
   - after a match result is committed
   - after a transfer completes
   - after resolving an inbox action
   - after any explicit "advance" action
   Debounced internally to avoid hammering localStorage.
   ============================================================ */

let autosaveTimer = null;
const AUTOSAVE_DEBOUNCE_MS = 500;

export function autosave() {
  if (autosaveTimer) clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    autosaveTimer = null;
    if (state.initialized) saveGame();
  }, AUTOSAVE_DEBOUNCE_MS);
}

export function cancelAutosave() {
  if (autosaveTimer) {
    clearTimeout(autosaveTimer);
    autosaveTimer = null;
  }
}

/* ============================================================
   EXPORT  (download a .json file)
   ============================================================ */

export function exportSaveAsJson(filename) {
  const payload = serializeState();
  payload.version = SAVE.VERSION;
  payload.exportedAt = new Date().toISOString();
  payload.lastSaveAt = state.lastSaveAt;

  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename || defaultExportName();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke after a short delay so the download completes
  setTimeout(() => URL.revokeObjectURL(url), 2000);

  return true;
}

function defaultExportName() {
  const club = state.userClubId || "career";
  const season = state.season || "season";
  const date = new Date().toISOString().slice(0, 10);
  return `fm-${club}-${season}-${date}.json`.replace(/\s+/g, "-");
}

/* ============================================================
   IMPORT  (upload a .json file)
   ============================================================ */

export function importSaveFromJson(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }
    if (!file.name.endsWith(".json") && file.type !== "application/json") {
      reject(new Error("File must be JSON"));
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      try {
        const parsed = JSON.parse(e.target.result);
        const ok = validateImportedSave(parsed);
        if (!ok.valid) {
          reject(new Error(ok.reason || "Invalid save file"));
          return;
        }
        const hydrated = hydrateState(parsed);
        if (!hydrated) {
          reject(new Error("Could not hydrate save (version mismatch?)"));
          return;
        }
        // Persist immediately
        saveGame();
        resolve(parsed);
      } catch (err) {
        reject(new Error("Malformed JSON: " + err.message));
      }
    };
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsText(file);
  });
}

/* ============================================================
   VALIDATION
   ============================================================ */

export function validateImportedSave(obj) {
  if (!obj || typeof obj !== "object") return { valid: false, reason: "Not an object" };
  if (typeof obj.version !== "number") return { valid: false, reason: "Missing version" };
  if (obj.version > SAVE.VERSION) {
    return { valid: false, reason: `Save is from a newer version (${obj.version} > ${SAVE.VERSION})` };
  }
  if (!obj.userClubId) return { valid: false, reason: "No user club" };
  if (!Array.isArray(obj.fixtures) || obj.fixtures.length === 0) {
    return { valid: false, reason: "No fixtures" };
  }
  if (!obj.playerStates || typeof obj.playerStates !== "object") {
    return { valid: false, reason: "No player states" };
  }
  return { valid: true };
}

/* ============================================================
   OPTIONAL: WIPE + FRESH
   ============================================================ */
export function wipeAndReload() {
  deleteSave();
  // Let the caller decide how to reinit; we just clear.
  return true;
}

/* ============================================================
   STORAGE SIZE  (debug helper)
   ============================================================ */
export function getSaveSizeBytes() {
  if (!isStorageAvailable()) return 0;
  try {
    const raw = localStorage.getItem(SAVE.KEY);
    if (!raw) return 0;
    return new Blob([raw]).size;
  } catch {
    return 0;
  }
}

export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
