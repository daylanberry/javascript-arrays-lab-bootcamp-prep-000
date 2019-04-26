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

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var kittensArray = [...kittens]
  kittensArray.push(name);
  return kittensArray
}

function prependKitten(name){
  var kittensArray = [...kittens]
  kittensArray.unshift(name)
  return kittensArray;
}

function removeLastKitten(){
  var kittensArray = [...kittens]
  kittensArray.shift();
  return kittensArray
}
