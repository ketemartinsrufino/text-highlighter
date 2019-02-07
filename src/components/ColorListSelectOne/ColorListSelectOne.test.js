import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ColorListSelectOne from './ColorListSelectOne';
import toJson from 'enzyme-to-json';
import { COLORS } from '../ColorItem/Colors';
import ColorItem from '../ColorItem/ColorItem';

describe('ColorListSelectOne', () => {
  it('is defined with a default value', () => {
    const component = shallow(
      <ColorListSelectOne onColorSelect={jest.fn()}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('receive a "selectedColor"', () => {
    const component = shallow(
      <ColorListSelectOne 
        selectedColor={COLORS.yellow} 
        onColorSelect={jest.fn()}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('receive a "selectedColor" and select another color', () => {
    const component = mount(
      <ColorListSelectOne 
        selectedColor={COLORS.yellow} 
        onColorSelect={jest.fn()}/>
    );

    component.find(ColorItem).first().simulate('click');
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('only one color can be selected at the same time', () => {
    const component = mount(
      <ColorListSelectOne 
        selectedColor={COLORS.yellow} 
        onColorSelect={jest.fn()}/>
    );
    
    component.find(`div.ColorItem[color="${COLORS.red}"]`).first().simulate('click');
    component.find(`div.ColorItem[color="${COLORS.yellow}"]`).first().simulate('click');

    const selected = component.find('div.ColorItem.selected');
    expect(selected.length).toEqual(1);
    expect(selected.prop('color')).toEqual(COLORS.yellow);
  });

});