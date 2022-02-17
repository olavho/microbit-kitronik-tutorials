input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.AB, function () {
    colorIdx = 0
    position = 0
    pauseInterval = 1600
    strip.setPixelColor(0, neopixel.colors(colors[colorIdx]))
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 350)
})
let position = 0
let strip: neopixel.Strip = null
let pauseInterval = 0
let colorIdx = 0
let colors : Array<NeoPixelColors>;
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
pauseInterval = 1000
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(pauseInterval)
strip.clear()
strip.show()
