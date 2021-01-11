input.onButtonPressed(Button.A, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
