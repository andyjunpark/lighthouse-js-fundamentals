function calculateRectangleArea(length, width) {
  if (length > -1 && width > -1) {
    return length * width;
  } else {
    return undefined;
  }
}

function calculateTriangleArea(base, height) {
  if (base > -1 && height > -1) {
    return (base * height) / 2;
  } else {
    return undefined;
  }
}

function calculateCircleArea(radius) {
  if (radius > -1) {
    return Math.PI * (radius * radius);
  } else {
    return undefined;
  }
}