const buttons = [
    

];

const virtKeyboard = {
    elements: {
       main: null,
       textarea: null,
       keyboardKeys: null,
    },

    properties: {
        capsLock: false,
        value: '',
        ctrlShift: false
    },
    

    eventHandlers: {
        oninput = null,
        onclick = null,
        onkeypress = null
    },
    
    init() {
        this.elements.main =  document.createElement("div");
        this.elements.textarea = document.createElement("textarea");
        this.elements.keyboardKeys = document.createElement("div");

        this.elements.main.classList.add("wrapper");
        this.elements.textarea.classList.add("textarea");
        this.elements.keyboardKeys.classList.add("keyboard__keys");

        this.elements.main.appendChild(this.elements.textarea, this.elements.keyboardKeys);
        document.body.appendChild(this.elements.main);



    },

    _createKeys() {

    },

    _eventOn(handlerName) {
        console.log ("Event is on! Event Name:" + handlerName);

    },

    _capsLockOn() {
        console.log("CapsLock is On!");

    },

    _ctrlShiftOn() {
        console.log("Ctrl+Shift is on!");

    },

};
  
window.addEventListener("DOMContentLoaded", function() {
 virtKeyboard.init();

});
