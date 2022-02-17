let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
const botDoorPath = './resources/images/robot.svg';
const beachDoorPath = './resources/images/beach.svg';
const spaceDoorPath = './resources/images/space.svg';
const closedDoorPath = './resources/images/closed_door.svg';
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
    return false;
}

