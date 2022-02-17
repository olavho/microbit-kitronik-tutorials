
let ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB);
ring.setBrightness(50);
ring.showRainbow(1, 360);

basic.forever(function () {
    ring.rotate(1);
    ring.show();
    pause(100);
});
