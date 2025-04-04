/* eslint-disable @typescript-eslint/no-explicit-any */
const MIN = 20;

export function add_waiting_time_steps(steps: any) {
  for (let i = 0; i < steps.length - 1; i++) {
    if (
      "dt" in steps[i] &&
      "dt" in steps[i + 1] &&
      steps[i + 1].dt - steps[i].dt >= MIN
    ) {
      steps.splice(i + 1, 0, {
        category: "wait",
        wait: steps[i + 1].dt - steps[i].dt,
      });
    }
  }
}
