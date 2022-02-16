let lightState = 0
input.onPinPressed(TouchPin.P0, function () {
    if (lightState == 0) {
        lightState = 1
    } else {
        lightState = 0
    }
    basic.showNumber(lightState)
})
input.onButtonPressed(Button.A, function () {
    if (lightState == 0) {
        lightState = 1
    } else {
        lightState = 0
    }
    basic.showNumber(lightState)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    if (lightState == 1) {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
