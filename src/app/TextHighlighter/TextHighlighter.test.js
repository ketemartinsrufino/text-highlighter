import React from 'react';
import { shallow } from 'enzyme';
import TextHighlighter from './TextHighlighter';
import toJson from 'enzyme-to-json';

describe('TextHighlighter', () => {
  it('rendering with default values', () => {
    const component = shallow(<TextHighlighter/>);
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('rendering with textValue values', () => {
    const component = shallow(<TextHighlighter/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});