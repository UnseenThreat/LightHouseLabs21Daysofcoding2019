// Day 1

function powerOn(){
  ship.powerOn = true;
}

// Day 2

function countModules(){
  
  return availableModules.length;
  
}

//Day 3

function countEssential(){
  var num = 0;
  var count = 0;
  
  while ( num < countModules() ){
    
    if (availableModules[num].essential === true){
     
      count++;
      
    }
    num++;
  }
  
  return count;
  
}

//Day 4

function loadModule(index){
  var module = availableModules[index];
  
  module.enabled = true;
  
  ship.modules.push(module);
}
  
function findModule(string){
  var num = 0;
  
  
  while ( num < countModules() ){
    
    if (availableModules[num].name == string){
     
      return num;
      
    }
    num++;
  }
  
  return null;
  
}

loadModule(findModule("life-support"))

//Day 5

function findModuleIndex(string){
  var num = 0;
  
  
  while ( num < countModules() ){
    
    if (availableModules[num].name === string && availableModules[num].essential === true){
     
      return num;
      
    }
    num++;
  }
  
  return null;
  
}

loadModule(findModuleIndex("propulsion"));

//Day 6

loadModule(findModuleIndex("navigation"));

//Day 7

function resetLARRY(){
  
  for(i = 0; i < 10; i++){
    
    LARRY.quack();
    
  }
  
}

resetLARRY();

//Day 8

loadModule(findModule("communication"));

//Day 9

function setMessage(){
  
  radio.message = JSON.stringify(navigation);
  
}

setMessage();

//Day 10

function activateBeacon(){
  
  radio.beacon = true;
  
}

activateBeacon();

// Day 11

function setFrequency(){


  radio.frequency = ((radio.range.high + radio.range.low)/2);
  

}

// Day 12

function initialize(){
  
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
  
}

// Day 13

function calibrateX(){
  for(i = 1; i < 12; i++){
    var signal = checkSignal();
    if(typeof signal !== "undefined"){
      navigation.x = signal;
      break;
    }
    
  }
  
}

calibrateX();

// Day 14
function calibrateY(){
  for(i = 1; i < 60; i++){
    var signal = checkSignal();
    if(typeof signal !== "undefined"){
      navigation.y = signal;
      break;
    }
    
  }
  
}

function calibrateZ(){
  for(i = 1; i < 60; i++){
    var signal = checkSignal();
    if(typeof signal !== "undefined"){
      navigation.z = signal;
      break;
    }
    
  }
  
}

calibrateY();
calibrateZ();

// Day 15

function calibrate(){
  
  calibrateX();
  calibrateY();
  calibrateZ();

}

//Day 16

function setSpeed(speed){
  
  var speedInt = parseInt(speed);
  if(speedInt >= 0){
    navigation.speed = speedInt;
  }
  
}

//Day 17

function activateAntenna(){
  
  ship.antenna.active = true;
  
}

//activateAntenna();

//Day 18

function sendBroadcast(){
  
  for(i = 0; i <100; i++){
    
    broadcast()
      
  }
  
}

//sendBroadcast();

//Day 19 

function configureBroadcast(){
  
  setFrequency();
  activateAntenna();
  sendBroadcast();
  
  
}

configureBroadcast();

//Day 20

function decodeMessage(message){
  
  letters = message.split('');
  
  for(i = 0; i < letters.length; i++){
    
    if (letters[i] === '0'){
      letters[i] = 'o';
    }
    if (letters[i] === '1'){
      letters[i] = 'i';
    }
    if (letters[i] === '2'){
      letters[i] = 'u';
    }
    if (letters[i] === '3'){
      letters[i] = 'e';
    }
    if (letters[i] === '4'){
      letters[i] = 'a';
    }
    if (letters[i] === '5'){
      letters[i] = 'y';
    } 
  
    
  }
  return letters.join('');
}

//Day 21

function returnToEarth(){
  x = broadcast("x");
  y = broadcast("y");
  z = broadcast("z");
  
  x1 = decodeMessage(x);
  y1 = decodeMessage(y);
  z1 = decodeMessage(z);
  
  x2 = parseInt(x1, 16);
  y2 = parseInt(y1, 16);
  z2 = parseInt(z1, 16);
  
  navigation.x = x2;
  navigation.y = y2;
  navigation.z = z2;
  
}

returnToEarth();


// And thats it ... we've finished! Thanks for following me through this journey, and thank you Lighthouse Labs for providing this opportunity!