input.onButtonPressed(Button.A, function () {
    Counter += 1
    basic.showNumber(Counter)
})
input.onButtonPressed(Button.B, function () {
    Counter += -1
    basic.showNumber(Counter)
})
let Counter = 0
Counter = 0
basic.showNumber(Counter)
basic.forever(function () {
    while (Counter == 9) {
        basic.showIcon(IconNames.Cow)
    }
})
