import React, { Component } from 'react';
import ColorList from '../ColorList/ColorList';
import PropTypes from 'prop-types';

class ColorListSelectOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '',
        };
    }

    selectColor = (color) => {
        this.setState({selectedColor: color});
        this.props.onColorSelect(color);
    }
    
    render(){        
      return (
        <ColorList
          selectedColors={[this.state.selectedColor]}
          onClick={this.selectColor}
        />
      )
    }
}

ColorListSelectOne.propTypes = {
  onColorSelect: PropTypes.func.isRequired
};

export default ColorListSelectOne;