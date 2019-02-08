import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { getTextsByColors } from './FilterUtils';


describe('getTextsByColors', () => {
  const texts = [{"text": "gsdf","color": "#8eda8e"},
    {"text": "sdfgh","color": "#ffeb3b"},
    {"text": "daf","color": "#ef5350"},
    {"text": "vcgvr","color": "#ef5350"}
  ];

  it.each([
    [[], [], 0], 
    [[], ["#ef5350","#ffeb3b", "#8eda8e"], 0], 
    [texts, ["#8eda8e"], 1], 
    [texts, ["#ffeb3b"], 1], 
    [texts, ["#ef5350"], 2], 
    [texts, ["purple"], 0], 
  ])(
    `from %o with filter of %o, we must be %i items`,
    (texts, colors, expected) => {
      expect(getTextsByColors(texts, colors).length).toEqual(expected);
    },
  );

});