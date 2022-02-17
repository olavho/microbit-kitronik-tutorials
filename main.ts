let blue = 0;
let green = 0;
let red = 0;
let increaseOnly = true;

input.onButtonPressed(Button.A, function() {
    blue = 0;
    green = 0;
    red = 0;
});

input.onButtonPressed(Button.B, function() {
    increaseOnly = !increaseOnly;
});

basic.forever(function () {
	pins.analogWritePin(AnalogPin.P0, red);
    pins.analogWritePin(AnalogPin.P1, green);
    pins.analogWritePin(AnalogPin.P2, blue);

    if (pins.digitalReadPin(DigitalPin.P8) == 1 && green < 1020) {
        green = green + 10;
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1 && green == 1020 && !increaseOnly) {
        green = 0;
    }

    if (pins.digitalReadPin(DigitalPin.P12) == 1 && red < 1020) {
        red = red + 10;
    } else if (pins.digitalReadPin(DigitalPin.P12) == 1 && red == 1020 && !increaseOnly) {
        red = 0;
    }

    if (pins.digitalReadPin(DigitalPin.P16) == 1 && blue < 1020) {
        blue = blue + 10;
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1 && blue == 1020 && !increaseOnly) {
        blue = 0;
    }
});
