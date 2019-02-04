import React, { Component } from 'react';
import ColorListFilter from '../colorList/ColorListFilter';

class TextHighlighterFilter extends Component {

    render(){
        return <div className="container">
            <ColorListFilter onColorSelect={this.onColorSelect}/>
            {this.props.children || "I am a filter" }
        </div>
    }
}

export default TextHighlighterFilter;