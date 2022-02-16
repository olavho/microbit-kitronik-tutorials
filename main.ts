let light2 = 0
basic.forever(function () {
    light2 = pins.analogReadPin(AnalogPin.P0)
    if (light2 > 200) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # .
            . # # # .
            # # # . .
            `)
    }
})
