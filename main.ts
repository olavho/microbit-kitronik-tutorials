let highest = 0
let value = 0
let running = 1;

input.onButtonPressed(Button.A, function () {
    running = 1;
    basic.showNumber(highest)
});

input.onButtonPressed(Button.B, function () {
    running = 0;
    basic.showNumber(highest)
});

input.onButtonPressed(Button.AB, function () {
    highest = 0
    basic.showNumber(highest)
});


basic.forever(function () {
    if (running === 1) {
        value = pins.analogReadPin(AnalogPin.P0)
        if (value > highest) {
            highest = value;
            basic.showIcon(IconNames.Happy);
            basic.showNumber(value);
        }
    }
})
