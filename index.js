// ============= for loop =========================
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + ' plays ' + instruments[i]);
}
  return array;
}

//=============== while loop ==========================


  var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(facts) {
  var message = [ ];
  var count = 0;
  while (count < facts.length) {
    message.push(facts[count] + "!!!");
    count++;
  }
  return message;
}

// ================= do-while loop ================

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}
