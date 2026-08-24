"use strict";

// دریافت آدرس مطلق فایل CSS نسبت به همین فایل JS
const stylePath = new URL('./button-style.css', import.meta.url).href;

class Button extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: "open"});

        this.hide = true;

        this.shadowRoot.innerHTML = `    
            <link rel="stylesheet" href="${stylePath}">

            <div class="button">
                <p class="text-button">
                    ${this.getAttribute("btn-text") || ''}
                </p>
            </div>
        `;
    }

    connectedCallback() {

    }
}

export { Button };