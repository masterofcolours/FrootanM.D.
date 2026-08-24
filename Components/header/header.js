"use strict";

class Header extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})

        this.hide = true;

        this.shadowRoot.innerHTML =

            `   
                <link rel="stylesheet" href="./components/header/header-style.css">

                <div class="header-box">

                    <div class="left flex-center">
                        <h1>Frootan M.D.</h1>
                    </div>

                    <div class="center flex-center" >
                        <nav class="main-nav">
                            
                            <a href="#">About</a>
                            <a href="#">Qualifications</a>
                            <a href="#">Publications</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>

                    <div class="right flex-center" >
                        <button-item btn-text="Download CV"><</button-item>
                    </div>

                    <div class="mobile-nav">
                        
                            
                        <a href="#">About</a>
                        <a href="#">Qualifications</a>
                        <a href="#">Publications</a>
                        <a href="#contact">Contact</a>
                        
                    </div>

                </div>
                

            `
    }

    connectedCallback() {

        
    }


}



export { Header };