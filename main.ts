basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.abs(input.acceleration(Dimension.Y)))
})
