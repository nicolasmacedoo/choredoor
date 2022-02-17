let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = './resources/images/robot.svg';
let beachDoorPath = './resources/images/beach.svg';
let spaceDoorPath = './resources/images/space.svg';
let closedDoorPath = './resources/images/closed_door.svg';
let numCloosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    }
    return false;
}

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    }
    return true;
}

const playDoor = (door) => {
    numCloosedDoors--;
    if (numCloosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numCloosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else  {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

door1.onclick = () => {
    if (currentlyPlaying && !isClicked(door1)) {
        door1.src = openDoor1;
        playDoor(door1);
        
    }
}

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(door2)) {
        door2.src = openDoor2;
        playDoor(door2);
    }
}

door3.onclick = () => {
    if (currentlyPlaying && !isClicked(door3)) {
        door3.src = openDoor3;
        playDoor(door3);
    }
}

startButton.onclick = () => {
    startRound();
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numCloosedDoors = 3;
    startButton.innerHTML = 'Good Luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
}

startRound();