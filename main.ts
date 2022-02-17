input.onButtonPressed(Button.A, function () {
    strip.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    colorIdx = 0
    position = 0
    pauseInterval = 1000
    strip.setPixelColor(0, neopixel.colors(colors[colorIdx]))
})
input.onButtonPressed(Button.B, function () {
    strip2.showRainbow(1, 350)
    basic.pause(2000)
    strip2.clear()
    strip2.show()
})
let position = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let pauseInterval = 0
let colorIdx = 0
pauseInterval = 1000
let colors: Array<NeoPixelColors>;
colors = [
NeoPixelColors.Red,
NeoPixelColors.Orange,
NeoPixelColors.Yellow,
NeoPixelColors.Green,
NeoPixelColors.Blue,
NeoPixelColors.Indigo,
NeoPixelColors.Violet,
NeoPixelColors.Purple,
NeoPixelColors.White
]
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
