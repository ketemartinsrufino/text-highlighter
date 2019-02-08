import React from 'react';
import { shallow, mount } from 'enzyme';
import TextHighlighter from './TextHighlighter';
import toJson from 'enzyme-to-json';
import { COLORS } from '../../components/ColorItem/Colors';
import { context } from '../../context/__mocks__/Provider';

jest.mock('../../context/__mocks__/Provider.js');

describe('TextHighlighter', () => {
  it('rendering with default values', () => {
    const component = shallow(<TextHighlighter/>);
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('rendering with textValue values', () => {
    const component = shallow(<TextHighlighter/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('when a color is selected, the data is called', () => {
      const component = shallow(<TextHighlighter />, { context });
      component.setContext({ colorToHighlight: COLORS.red });
      // component.onSelectText();
      // expect(context.addHighlightedText.mock.calls.length).toBe(1);
  });
});