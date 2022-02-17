let percentage = 0;
let capVoltage = 0;

basic.forever(function () {
    capVoltage = pins.analogReadPin(AnalogPin.P0);
    percentage = capVoltage / 10;
    basic.showNumber(percentage);

    if (percentage > 25 && percentage <= 50) {
        pins.digitalWritePin(DigitalPin.P1, 1);
    } else if (percentage > 50 && percentage <= 75) {
        pins.digitalWritePin(DigitalPin.P1, 1);
        pins.digitalWritePin(DigitalPin.P2, 1);
    } else if (percentage > 75 && percentage <= 90) {
        pins.digitalWritePin(DigitalPin.P1, 1);
        pins.digitalWritePin(DigitalPin.P2, 1);
        pins.digitalWritePin(DigitalPin.P8, 1);
    } else if (percentage > 90) {
        pins.digitalWritePin(DigitalPin.P1, 1);
        pins.digitalWritePin(DigitalPin.P2, 1);
        pins.digitalWritePin(DigitalPin.P8, 1);
        pins.digitalWritePin(DigitalPin.P12, 1);
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0);
        pins.digitalWritePin(DigitalPin.P2, 0);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 0);
    }

});