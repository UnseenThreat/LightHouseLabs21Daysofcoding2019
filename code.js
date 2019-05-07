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