import { generateColumns } from './data-utils';

test('should make an array of columns that capitalizes the key, replaces underscores with spaces, and makes that the name property', () => {
  const expected = [
    { key: 'name', name: 'Name' },
    { key: 'occupation', name: 'Occupation' },
    { key: 'knows_daredevils_identity', name: 'Knows Daredevils Identity' },
  ];

  const actual = generateColumns([
    { name: 'kingpin', occupation: 'crime', knows_daredevils_identity: true },
    { name: 'bullseye', occupation: 'fbi', knows_daredevils_identity: false },
    { name: 'foggy', occupation: 'attorney', knows_daredevils_identity: true },
  ]);

  expect(actual).toEqual(expected);
});
