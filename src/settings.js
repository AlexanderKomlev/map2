export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();

    Object.defineProperty(this, 'settings', {
      get: () => new Map([...this.defaultSettings, ...this.userSettings]),
    });
  }

  set(key, value) {
    switch (key) {
      case 'theme':
        if (['light', 'dark', 'gray'].includes(value)) {
          this.userSettings.set(key, value);
        }
        break;
      case 'music':
        if (['pop', 'rock', 'chillout', 'off', 'trance'].includes(value)) {
          this.userSettings.set(key, value);
        }
        break;
      case 'difficulty':
        if (['easy', 'normal', 'hard', 'nightmare'].includes(value)) {
          this.userSettings.set(key, value);
        }
        break;
      default:
        break;
    }
  }
}
