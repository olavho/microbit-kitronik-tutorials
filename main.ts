let goal = 0;
let difference = 0;
let img: Image = null;
let degrees = 0;

input.onButtonPressed(Button.A, function () {
    if (difference < 15) {
        basic.showString("Winner");
    } else {
        basic.showString("Try again");
    }
    goal = Math.randomRange(0, 360);
});

input.calibrateCompass();

img = images.createImage(`
    . # . # .
    . # . # .
    . . . . . 
    # . . . #
    . # # # .
`)
img.showImage(0);
goal = Math.randomRange(0, 360);
basic.forever(function () {
    degrees = input.compassHeading();
    difference = Math.abs(goal - degrees);
    if (difference > 180) {
        difference = Math.abs(360 - difference);
    }

    pins.digitalWritePin(DigitalPin.P0, 1);
    basic.pause(difference * 5);
    pins.digitalWritePin(DigitalPin.P0, 0);
    basic.pause(difference * 5);
});