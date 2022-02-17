let colors : Array<NeoPixelColors>;
colors = [NeoPixelColors.Red, NeoPixelColors.Orange, NeoPixelColors.Yellow, NeoPixelColors.Green, NeoPixelColors.Blue, NeoPixelColors.Indigo, NeoPixelColors.Violet, NeoPixelColors.Purple, NeoPixelColors.White];
let colorIdx = 0;

let pauseInterval = 1600;

let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
let position = 0
strip.show()

basic.forever(function () {
    if (position < 4) {
        strip.rotate(1)
        position = position + 1
    } else {
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(colors[colorIdx]));
        position = 0
    }
    strip.show()
    basic.pause(pauseInterval)
});

input.onButtonPressed(Button.A, function () {
    pauseInterval = pauseInterval / 2;
});

input.onButtonPressed(Button.B, function() {
    colorIdx++;
    if (colorIdx == colors.length) {
        colorIdx = 0;
    }
});

input.onButtonPressed(Button.AB, function () {
    colorIdx = 0;
    position = 0;
    pauseInterval = 1600;

    strip.setPixelColor(0, neopixel.colors(colors[colorIdx]));
});