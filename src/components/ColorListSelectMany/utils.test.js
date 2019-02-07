import { handleSelectColor } from './utils';

describe('handleSelectColor', () => {
  it.each([
    ['', [], []], 
    ['red', [], ['red']], 
    ['red', ['red'], []], 
    ['yellow', ['red'], ['red', 'yellow']], 
    ['yellow', ['red', 'yellow'], ['red']], 
  ])(
    'handle selection of color %i if %i is selected',
    (color, colors, expected) => {
      expect(handleSelectColor(color, colors)).toEqual(expected);
    },
  );

});