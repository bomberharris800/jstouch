let touches = 0
basic.forever(function () {
	
})
input.onPinPressed(TouchPin.P0,  () => {
touches += 1
basic.showNumber(touches)
})