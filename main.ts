let position = 0
let ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
ring.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
ring.show()
basic.forever(function () {
    if (position < 11) {
        ring.rotate(1)
        position = position + 1
    } else {
        ring.clear()
        ring.setPixelColor(0, NeoPixelColors.Red)
        position = 0
    }
    ring.show()
    pause(100);
})
