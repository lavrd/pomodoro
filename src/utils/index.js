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
  work: 'Work',
  short: 'Short rest',
  long: 'Long rest'
};

export const defaultSettings = () => ({
  timer: {
    work: {
      min: 15,
      max: 45,
      value: 1499,
      title: 'work'
    },
    short: {
      min: 1,
      max: 10,
      value: 299,
      title: 'short'
    },
    long: {
      min: 5,
      max: 25,
      value: 899,
      title: 'long'
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
