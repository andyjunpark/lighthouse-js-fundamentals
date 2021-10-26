const moves = [
  'north',
  'north',
  'west',
  'west',
  'north',
  'east',
  'north'
]

function finalPosition(moves) {
  let coordinate = []
  let x = 0
  let y = 0
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      y += 1
    } else if (moves[i] === 'south') {
      y -= 1
    } else if (moves[i] === 'east') {
      x += 1
    } else if (moves[i] === 'west') {
      x -= 1
    } 
  } 
  coordinate.push(x);
  coordinate.push(y);
  return coordinate;
}

console.log(finalPosition(moves));