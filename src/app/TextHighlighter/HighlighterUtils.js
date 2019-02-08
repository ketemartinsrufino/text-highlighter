const createNewNode = (color) => {
  var newNode = document.createElement("span");
  newNode.setAttribute(
      "style",
      `background-color: ${color}; display: inline;` 
  );
  return newNode;
}

const highlightRange = (range, text, color) => {
  range.surroundContents(createNewNode(color));
  return { text, color };
}

export const handleMouseUp = (color) => { 
  const userSelection = window.getSelection();
  const range = userSelection.getRangeAt(0);
  const text = userSelection.toString();

  return text ? highlightRange(range, text, color) : null;
}