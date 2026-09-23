/* ============================================================
   FOOTBALL MANAGER — js/engine/matchReveal.js
   Progressive event reveal, pause/resume, manage panel
   ============================================================ */

import { MATCH } from "../util/constants.js";

export function createRevealController({ match, onEvent, onMinute, onHalfTime, onFullTime }) {
  let revealIndex = 0;
  let currentMinute = 0;
  let timer = null;
  let paused = false;
  let finished = false;
  let halfTimeFired = false;

  const events = match.events.slice().sort((a, b) => a.minute - b.minute);

  function start() {
    tick();
  }

  function tick() {
    if (finished || paused) return;

    // Advance the clock to the next event (or end of match)
    const nextEvent = events[revealIndex];

    if (nextEvent && nextEvent.minute <= currentMinute) {
      // Fire the event
      onEvent(nextEvent, revealIndex);
      revealIndex++;
      scheduleTick();
      return;
    }

    // If we've revealed all events, fast-forward to 90
    if (!nextEvent) {
      currentMinute = 90;
      onMinute(currentMinute);
      finish();
      return;
    }

    // Advance minute by minute toward next event
    currentMinute = Math.min(currentMinute + 1, nextEvent.minute);
    onMinute(currentMinute);

    // Half-time forced pause
    if (!halfTimeFired && currentMinute >= MATCH.HALF_TIME_MINUTE) {
      halfTimeFired = true;
      pause();
      onHalfTime();
      return;
    }

    scheduleTick();
  }

  function scheduleTick() {
    timer = setTimeout(tick, MATCH.REVEAL_DELAY_MS / 3);
  }

  function pause() {
    paused = true;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function resume() {
    if (finished) return;
    paused = false;
    tick();
  }

  function finish() {
    finished = true;
    paused = false;
    if (timer) clearTimeout(timer);
    onMinute(90);
    onFullTime();
  }

  function skipToEnd() {
    if (finished) return;
    // Reveal all remaining events immediately
    while (revealIndex < events.length) {
      onEvent(events[revealIndex], revealIndex);
      revealIndex++;
    }
    currentMinute = 90;
    onMinute(90);
    finish();
  }

  return {
    start,
    pause,
    resume,
    skipToEnd,
    isPaused: () => paused,
    isFinished: () => finished,
    getMinute: () => currentMinute,
    getRevealIndex: () => revealIndex
  };
}
