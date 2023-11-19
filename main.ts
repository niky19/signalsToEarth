input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString(message)
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(message)
})
let message = ""
message = "Hello Earth!"
