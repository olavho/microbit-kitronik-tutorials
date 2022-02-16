input.onButtonPressed(Button.A, function () {
    running = 1
})
input.onButtonPressed(Button.B, function () {
    running = 0
})
function plotDuty () {
    if (duty > 820) {
        led.plotBarGraph(
        4,
        5
        )
    } else if (duty > 614) {
        led.plotBarGraph(
        3,
        5
        )
    } else if (duty > 410) {
        led.plotBarGraph(
        2,
        5
        )
    } else if (duty > 204) {
        led.plotBarGraph(
        1,
        5
        )
    } else {
        led.plotBarGraph(
        0,
        5
        )
    }
}
let running = 0
let duty = 0
duty = 0
running = 1
basic.forever(function () {
    if (running == 1) {
        while (duty < 1023) {
            pins.analogWritePin(AnalogPin.P0, duty)
            duty = duty + 1
            basic.pause(10)
            plotDuty()
        }
    }
    if (running == 1) {
        while (duty > 0) {
            pins.analogWritePin(AnalogPin.P0, duty)
            duty = duty - 1
            basic.pause(10)
            plotDuty()
        }
    }
})
