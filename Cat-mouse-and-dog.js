/*
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. 
The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from its current position. 
The cat can jump at most (j) characters, and cannot jump over the dog.

if j = 5:
  ..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse
  .....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far enough

if j = 10:
  ...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog
  ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if not all three animals are present, return 'boring without all three'
*/


// Solution

function catMouse(x, j){
  let dLoc = x.indexOf('D');
  let cLoc = x.indexOf('C');
  let mLoc = x.indexOf('m');
 
  //Check if all them are there
  if (dLoc == -1 || cLoc == -1 || mLoc == -1) return 'boring without all three';

  //Check if cat can jump far enough
  if (Math.abs(cLoc - mLoc) <= j) {
    //Check if dog is in the way
    if (dLoc > cLoc && dLoc < mLoc && (cLoc+j) >= dLoc) {
      return 'Protected!'
    } else if (dLoc > mLoc && dLoc < cLoc && (cLoc-j) <= dLoc) {
      return 'Protected!'
    } else return 'Caught!'
  } else return 'Escaped!'
}

// or

const between = (x, a, b) => Math.min(a, b) < x && x < Math.max(a, b);

function catMouse(x, j) {
  let c = x.indexOf('C');
  let m = x.indexOf('m');
  let d = x.indexOf('D');
  if (![c, m, d].every(i => i >= 0)) {
    return 'boring without all three';
  }
  if (Math.abs(c - m) - 1 < j) {
    return between(d, c, m) ? 'Protected!' : 'Caught!';
  }
  return 'Escaped!'
}