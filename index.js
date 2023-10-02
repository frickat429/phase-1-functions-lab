
function distanceFromHqInBlocks(somevalue) {
    //returns the number of blocks given a value 
    if (somevalue<42){
        return(42-somevalue)
    } 
    else {
        return(somevalue-42)
    }
}

function distanceFromHqInFeet(somevalue) {
    return distanceFromHqInBlocks(somevalue) *264
}

function distanceTravelledInFeet(a,b) {
    if (b>a) {
    return ((b-a)*264) 
}
else 
return ((a-b)*264)
}


function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }