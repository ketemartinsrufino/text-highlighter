import React from 'react';

export const HighlighterContext = React.createContext({
  highlightedTexts: [],
  isEditionMode: true,
  updateContext: ()=>{},
});