var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  
  if (rover.direction === "N") {
    rover.direction = "W"
    console.log(rover.direction)
  } else if (rover.direction === "W") { 
    rover.direction = "S"
    console.log(rover.direction)
  } else if (rover.direction === "S") {
    rover.direction = "E"
    console.log(rover.direction);
  } else if (rover.direction === "E") {
    rover.direction = "N"  
    console.log(rover.direction)
  }
}

function turnRight(rover){
  console.log("turnRight was called!");

  if (rover.direction === "N") {
    rover.direction = "E"
    console.log(rover.direction);
  } else if (rover.direction === "W") {
    rover.direction = "N";
    console.log(rover.direction.direction);
  } else if (rover.direction === "S") {
    rover.direction = "W";
    console.log(rover.direction);
  } else if (rover.direction === "E") {
    rover.direction = "S";
    console.log(rover.direction);
  }
}

function moveForward(rover){
  console.log("moveForward was called")

  if (rover.direction === "N") { 
    if (rover.y - 1 > 0 && rover.y - 1 < 10){
      rover.y--
      rover.travelLog.push([rover.x, rover.y])
    } else {
      console.log("Crash!")
      rover.travelLog.push(["Crash!"])
    }
    console.log(rover.x,rover.y);
  } else if (rover.direction === "W") {
    if (rover.x - 1 > 0 && rover.x - 1 < 10) {
      rover.x--
      rover.travelLog.push([rover.x, rover.y])
    } else {
      console.log("Crash!")
      rover.travelLog.push(["Crash!"])
    }
    console.log(rover.x, rover.y);
  } else if (rover.direction === "S") {
    if (rover.y + 1 > 0 && rover.y + 1 < 10) {
      rover.y++
      rover.travelLog.push([rover.x, rover.y])
    } else {
      console.log("Crash!")
      rover.travelLog.push(["Crash!"])
    }
    console.log(rover.x, rover.y);
  } else if (rover.direction === "E") { 
    if (rover.x + 1 > 0 && rover.x + 1 < 10) {
      rover.x++
      rover.travelLog.push([rover.x, rover.y])
    } else {
      console.log("Crash!")
      rover.travelLog.push(["Crash!"])
    }
    console.log(rover.x, rover.y);
  } 
}

function command(action) {

  for (var i = 0; i < action.length; i++) {
    if (action[i] === "l") {
      turnLeft(rover)
    } else if (action[i] === "r") {
      turnRight(rover)
    } else if (action[i] === "f") {
      moveForward(rover)
    }
  }
  console.log(rover.travelLog)
}

command("rffffffffffrfflfrff")

