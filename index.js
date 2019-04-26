var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.splice(kittens.length-1, 1)
  return kittens
}