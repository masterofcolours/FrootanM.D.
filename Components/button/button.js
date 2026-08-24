"use strict";

class Button extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})

        this.hide = true;

        this.shadowRoot.innerHTML =

            `   
                <link rel="stylesheet" href="./components/button/button-style.css">

                <div class="button">

                    <p class="text-button">
                        ${this.getAttribute("btn-text")}
                    </p>
                    
                </div>
                
                

            `
    }

    connectedCallback() {

        
    }


}



export { Button };