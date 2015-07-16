function counterCreator(num) {
  return function() {
    num = num + 1;
    return num;
  }
}

function countAnnouncer(string, counter) {
  return function() {
    return "Now serving " + string + " number " + counter() + "!"; 
  }
}