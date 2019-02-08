import React from 'react';
import { StyledSpan } from "./styles";

export const getTextsByColors = (texts, colors) => {
  const filteresTexts = texts.filter(({color}) => colors.includes(color));

  return filteresTexts.map(({color, text}) => (
    <StyledSpan color={color}>{text}</StyledSpan>
  ))
}