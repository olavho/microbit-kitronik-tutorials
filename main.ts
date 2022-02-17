let item = 0
let ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
ring.setBrightness(50)
ring.setPixelColor(6, NeoPixelColors.Blue)
ring.show()
basic.forever(function () {
    item = input.acceleration(Dimension.X) / 200
    ring.rotate(item)
    ring.show()
    pause(100);
})
