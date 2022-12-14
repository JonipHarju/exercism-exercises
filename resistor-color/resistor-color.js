//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

// export function ColorNumericalValue(color) {
//   return COLORS.indexOf(color);
// }

// These colors are encoded as follows:

// - Black: 0
// - Brown: 1
// - Red: 2
// - Orange: 3
// - Yellow: 4xx
// - Green: 5
// - Blue: 6
// - Violet: 7
// - Grey: 8
// - White: 9

// The goal of this exercise is to create a way:

// - to look up the numerical value associated with a particular color band
// - to list the different band colors

// Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.
