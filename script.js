const buttons = [
    

]

const virtKeyboard = {
    elements: {
        wrapper: null,
        textarea: null,
        keyboard: null,
        keys: []
    },

    properties: {
        isCapsLock = false,
        isShift = false,
        value = ''
        
    },

    eventHandlers: {
        oninput = null,
        onclick = null
    },

    init() {
        this.elements.wrapper =  document.createElement('div');
        this.elements.textarea = document.createElement('textarea');
        this.elements.keyboard = document.createElement('div');

        
    }
    
}