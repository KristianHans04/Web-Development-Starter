class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="navbar">
                <div class="logo">
                <a href="/1.Home/Home.html">
                    <img src="/Images/PEAKWAYS_LOGO.png" alt="PEAKWAYS_LOGO" class="Actual_logo">
                    <span style="vertical-align: middle;">Printers</span>
                </a>
                </div>
                    <ul class="links">
                        <li><a href="/1.Home/Home.html">Home</a></li>
                        <li><a href="/2.About/About.html">About</a></li>
                        <li><a href="/3.Shop/Shop.html">Shop</a></li>
                        <li><a href="/4.Contact/Contact.html">Contact</a><li>
                    </ul>
                    <a href="#" class="Action_button">Get started</a>
                    <div class="Toggle_button">
                    <i class="fa-solid fa-bars"></i>
                    </div>
            </div>
            <div class="Dropdown_menu open">
            <li><a href="/1.Home/Home.html">Home</a></li><hr>
            <li><a href="/2.About/About.html">About</a></li><hr>
            <li><a href="/3.Shop/Shop.html">Shop</a></li><hr>
            <li><a href="/4.Contact/Contact.html">Contact</a></li><hr>
            <li><a href="#" class="Action_button">Get started</a></li>
            </div>
            <hr>
        </header>
        `
    }
}

class SpecialHeaderJS extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <script>
        const ToggleButton = document.querySelector('.Toggle_button')
        const ToggleButtonIcon = document.querySelector('.Toggle_button i')
        const DropdownMenu = document.querySelector('.Dropdown_menu')

        ToggleButton.onclick = function () {
            DropdownMenu.classList.toggle('open')
            const isOpen = DropdownMenu.classList.contains('open')

            ToggleButtonIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }
        </script>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="row">
            <div class="col">
                <img src="/Images/PEAKWAYS_LOGO.png" alt="PEAKWAYS_LOGO" class="logo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores quaerat, fugit ea et possimus in dolore </p>
            </div>
            <div class="col">
                <h3>Office <div class="underline"><span></span></div></h3>
                <p>Kampala Business Centre</p>
                <p>River Rd</p>
                <p>Nairobi, Kenya</p>
                <a href="mailto:" class="email-id">peakwaysprinters@gmail.com</a>
                <p><a href="tel:+" class="tel">+254721673358</a></p>
            </div>
            <div class="col">
                <h3>Links <div class="underline"><span></span></div></h3>
                <ul>
                    <li><a href="/1.Home/Home.html" class="afooter">Home</a></li>
                    <li><a href="/2.About/About.html" class="afooter">About</a></li>
                    <li><a href="/3.Shop/Shop.html" class="afooter">Shop</a></li>
                    <li><a href="/4.Contact/Contact.html" class="afooter">Contact</a><li>
                </ul>
            </div>
            <div class="col">
                <h3>Newsletter <div class="underline"><span></span></div></h3>
                <form action="">
                    <i class="far fa-envelope"></i>
                    <input type="email" name="" id="" placeholder="Enter your email address" required>
                    <button type="submit"><i class="fas fa-arrow-right"></i></button>
                </form>
                <div class="social-icons">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-whatsapp"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
        </div>
        <hr>
        <p class="copyright">Peakways Printers © 2024 - All Rights Reserved</p>
        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-headerJS', SpecialHeaderJS)