export const statesApp = {
  timer: 'timer',
  settings: 'settings',
};

export const statesTimer = {
  launched: 'launched',
  stopped: 'stopped',
  paused: 'paused'
};

export const settings = {
  work: {
    min: 15,
    max: 60,
    value: 25,
    title: 'Work time'
  },
  short: {
    min: 1,
    max: 10,
    value: 5,
    title: 'Short break'
  },
  long: {
    min: 5,
    max: 25,
    value: 15,
    title: 'Long break'
  },
};
