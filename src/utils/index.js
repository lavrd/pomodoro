export const statesApp = {
  timer: 'timer',
  settings: 'settings',
};

export const statesTimer = {
  stopped: 'stopped',
  paused: 'paused',
  launched: 'launched'
};

export const statesParts = {
  work: 'work',
  short: 'short',
  long: 'long'
};

export const defaultSettings = () => ({
  timer: {
    work: {
      min: 15,
      max: 45,
      value: 1499,
      title: 'Work time'
    },
    short: {
      min: 1,
      max: 10,
      value: 299,
      title: 'Short break'
    },
    long: {
      min: 5,
      max: 25,
      value: 899,
      title: 'Long break'
    }
  },
  sound: true
});

export const getSettings = () => {
  return JSON.parse(localStorage.getItem('settings'))
};

export const setSettings = (settings) => {
  localStorage.setItem('settings', JSON.stringify(settings))
};
