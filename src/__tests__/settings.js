import Settings from '../settings';

test('Settings default test', () => {
  const settings = new Settings();
  expect(settings.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('Settings set test', () => {
  const settings = new Settings();
  settings.set('theme', 'light');
  settings.set('music', 'rock');
  settings.set('difficulty', 'easy');
  expect(settings.settings).toEqual(new Map([['theme', 'light'], ['music', 'rock'], ['difficulty', 'easy']]));
});

test('Settings wrong set test', () => {
  const settings = new Settings();
  settings.set('theme', 'wrong');
  settings.set('music', 'wrong');
  settings.set('difficulty', 'wrong');
  expect(settings.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('Settings param test', () => {
  const settings = new Settings();
  settings.set('language', 'russian');
  expect(settings.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});
