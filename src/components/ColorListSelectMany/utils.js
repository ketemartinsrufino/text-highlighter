
const addColor = (color, colors=[]) => color ? [...colors, color] : colors;

const removeColor = (color, colors=[]) => {
  const newColors = [...colors];
  const index = newColors.indexOf(color);
  newColors.splice(index, 1);
  return newColors;
};

export const handleSelectColor = (color, colors=[]) => {
  if(!colors.length || !colors.includes(color)) {
   return addColor(color, colors)
  } else {
    return removeColor(color, colors);
  }
}

