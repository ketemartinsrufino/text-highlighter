import React, { Component } from 'react';
import ColorList from './ColorList';
import PropTypes from 'prop-types';

class ColorListSelectMany extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedColors: []
    };
  }

  selectColor = (color) => {
      this.setState((state) => {
        const selectedColors = [...state.selectedColors, color];
        this.props.setSelectedColors(selectedColors);
        
        console.log('selectColor', {selectedColors: selectedColors})

        return {
          selectedColors
        }
      });
  }

  removeColor = (index) => {
    this.setState((state) => {
      const colors = [...state.selectedColors];
      colors.splice(index, 1);
      this.props.setSelectedColors(colors);

      return ({
        selectedColors: colors
      }
    )});
  };

  onClick = (color) => {
    const colors = this.state.selectedColors;
    const index = colors.indexOf(color);
    if(!colors.length || index === -1) {
      this.selectColor(color)
    } else {
      this.removeColor(index);
    }
  }
    
    render(){        
      return (
        <ColorList
          selectedColors={this.state.selectedColors}
          onClick={this.onClick}
        />
      )
    }
}

ColorListSelectMany.propTypes = {
  setSelectedColors: PropTypes.func.isRequired
};

export default ColorListSelectMany;