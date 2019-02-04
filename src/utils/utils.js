export const createElement = (color) => {
  var newNode = document.createElement("span");
  newNode.setAttribute(
      "style",
      `background-color: ${color}; display: inline;` 
  );
}