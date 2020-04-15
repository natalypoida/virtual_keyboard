
const virtKeyboard = {
    elements: {
       main: null,
       textarea: null,
       keyboardKeys: null,
       keys: [],
    },

   properties: {
        capsLock: false,
        value:'',
        ctrlShift: false,
        lang : localStorage.getItem('lang') || 'en',
    },
    

    eventHandlers: {
        oninput: null,
        onclick:  null,
        onkeypress:  null,
    },
    
   

    init() {
        this.elements.main =  document.createElement("div");
        this.elements.textarea = document.createElement("textarea");
        this.elements.keyboardKeys = document.createElement("div");

        this.elements.main.classList.add("wrapper");
        this.elements.textarea.classList.add("input");
        this.elements.keyboardKeys.classList.add("keyboard");
        this.elements.keyboardKeys.appendChild(this._createKeys());

        this.elements.keys = this.elements.keyboardKeys.querySelectorAll(".keyboard__key");

        this.elements.main.appendChild(this.elements.textarea);
        this.elements.main.appendChild(this.elements.keyboardKeys);
        document.body.appendChild(this.elements.main);

        document.querySelectorAll(".input").forEach(element => {
            element.addEventListener("focus", () => {
                this.start(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },
 
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-","+", "◄--",
         "tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","|",
         "▲", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "enter",
          "shiftR","z", "x", "c", "v", "b", "n", "m", ",", ".", "?","shiftL",
         "ctrl","alt","space", "alt","ctrl"];

         

         keyLayout.forEach((key, index) =>{

             const keyElement = document.createElement ("button");
             const lineBreak = ["◄--", "|", "enter", "shiftL"].indexOf(key) !==-1;


             keyElement.setAttribute("type", "button");
             keyElement.classList.add("keyboard__key", "keyboard__key:hover"); 

                switch (key) {
                    case '◄--':
                    
                        keyElement.textContent = key.toLowerCase();
                        keyElement.classList.add("keyboard__key-wide");
                        keyElement.addEventListener('click', () =>{
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._eventOn("oninput");  
                    });

                    break;


                    case "tab":
                        
                        keyElement.textContent = key.toLowerCase();
                        keyElement.classList.add("keyboard__key-wide");
                        keyElement.addEventListener('click', () =>{
                            this.properties.value += "\t";  
                            this._eventOn("oninput"); 
                        });


                    break;


                    case "enter":
                        
                        keyElement.textContent = key.toLowerCase();
                        keyElement.classList.add("keyboard__key-extra-wide");
                        keyElement.addEventListener('click', () =>{
                            this.properties.value += "\n";  
                            this._eventOn("oninput"); 
                        });

                        

                    break;

                            
                    case "▲":
                        
                        keyElement.textContent = key.toLowerCase();
                        keyElement.classList.add("keyboard__key-extra-wide");
                        keyElement.addEventListener('click', () =>{
                            this._capsLockOn();  
                        keyElement.classList.toggle("keyboard__key-active", this.properties.capsLock);    
                        });
                    
                        
                    break;

                    case "shiftL":
                    case "shiftR":
                        keyElement.classList.add("keyboard__key-super-wide");
                        keyElement.textContent = key.toLowerCase();
                    break;


                    case "space":
                        keyElement.classList.add("keyboard__key-space");
                        keyElement.addEventListener('click', () =>{
                            this.properties.value += " ";  
                            this._eventOn("oninput");  
                        });
                    break;

                    default:
                        keyElement.textContent = key.toLowerCase();
                        keyElement.addEventListener("click", () => {
                            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                            this._eventOn("oninput");

                        });
                        
                        break;

                } 

                 fragment.appendChild(keyElement);

                 fragment.appendChild(keyElement);
                    if (lineBreak) {
                        fragment.appendChild(document.createElement("br"));

                };
            })
        

            return fragment;
            

    },

            _eventOn(handlerName) {
                console.log ("Event is on! Event Name:" + handlerName);
                if (this.eventHandlers[handlerName] == "function") {
                    this.eventHandlers[handlerName](this.properties.value);
                }


            },

            start(initialValue, oninput) {
                this.properties.value = initialValue || "";
                this.eventHandlers.oninput = oninput;
                
            },

            _capsLockOn() {
                console.log("CapsLock is On!");
                this.properties.capsLock = !this.properties.capsLock;

                for (const key of this.elements.keys) {
                    if (key.childElementCount === 0) {
                        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                    }
                }

            },

};

  
window.addEventListener("DOMContentLoaded", function() {
 virtKeyboard.init();
 

 
});