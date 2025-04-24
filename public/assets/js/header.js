class Header extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
          <div class="header-main-con w-100 ">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="index.html">
                    <figure class="mb-0">
                        <img src="assets/dr-shish-liver-surgeon-logo.webp" alt="logo2" style="max-width: 100px;">
                    </figure>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown4" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <a class="dropdown-item" href="load-more.html">About Us</a>
                                <a class="dropdown-item" href="single-blog.html">Team</a>


                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown5" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown5">


                                <!-- Nested Dropdown -->
                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Liver Transplant Services</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="shop.html"> Pediatric Liver Transplant</a>
                                        <a class="dropdown-item" href="product-detail.html">Deceased Donor Liver
                                            Transplant</a>
                                        <a class="dropdown-item" href="cart.html">Living Donor Liver Transplant</a>
                                        <a class="dropdown-item" href="checkout.html">Split Liver Transplantation</a>
                                        <a class="dropdown-item" href="checkout.html">Dual Lobe Liver
                                            Transplantation</a>
                                        <a class="dropdown-item" href="checkout.html">Combined liver kidney
                                            transplantation</a>
                                        <a class="dropdown-item" href="checkout.html">Post-Transplant Surveillance</a>
                                        <a class="dropdown-item" href="checkout.html">Immunosuppressive Therapy</a>

                                    </div>
                                </div>

                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Liver & Hepatology Conditions</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="shop.html">Chronic Liver Disease (CLD)</a>
                                        <a class="dropdown-item" href="shop.html"> Acute Liver Failure (ALF)</a>
                                        <a class="dropdown-item" href="shop.html">Hepatitis A, B, C,D, E</a>
                                        <a class="dropdown-item" href="shop.html">Jaundice</a>
                                        <a class="dropdown-item" href="shop.html">Fatty Liver (MASLD)</a>
                                        <a class="dropdown-item" href="shop.html">Liver Cirrhosis</a>
                                        <a class="dropdown-item" href="shop.html">Autoimmune Hepatitis</a>
                                        <a class="dropdown-item" href="shop.html">Alcoholic Hepatitis</a>
                                        <a class="dropdown-item" href="shop.html">Genetic Liver Disorders</a>
                                        <a class="dropdown-item" href="shop.html">Metabolic liver diseases</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Cancer Surgeries</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="shop.html">Liver Cancer Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Hepatectomy (Liver Resection)</a>
                                        <a class="dropdown-item" href="shop.html">Gallbladder Cancer Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Pancreatic Cancer Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Stomach Cancer Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Colon & Colorectal Cancer Surgery</a>

                                    </div>
                                </div>
                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Advanced HPB Procedures</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="shop.html">Ante-situm & Ex-situ Liver
                                            Resection</a>
                                        <a class="dropdown-item" href="shop.html">Portal Hypertension Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Bile Duct Injury & Reconstruction</a>
                                        <a class="dropdown-item" href="shop.html">Chronic Pancreatitis Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Minimal Access Liver Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Robotic HPB Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Cholangiocarcinoma (Bile Duct Cancer)
                                            Surgery</a>
                                        <a class="dropdown-item" href="shop.html">Choledochal Cyst Surgery </a>


                                    </div>
                                </div>
                                <div class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Diagnostics & Supportive Care</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="shop.html">Diagnostics & Supportive Care</a>
                                        <a class="dropdown-item" href="shop.html">FibroScan & Liver Elastography</a>
                                        <a class="dropdown-item" href="shop.html">Tumor Ablation (RFA / Microwave)</a>
                                        <a class="dropdown-item" href="shop.html">Endoscopic Variceal Ligation (EVL)</a>
                                        <a class="dropdown-item" href="shop.html">Nutritional & Lifestyle Counseling</a>

                                    </div>
                                </div>


                            </div>


                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown4" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Patient Information
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <a class="dropdown-item" href="load-more.html">Pre-Transplant Evaluation</a>
                                <a class="dropdown-item" href="single-blog.html">Post-Transplant Instructions</a>
                                <a class="dropdown-item" href="one-column.html">Diet & Nutrition Guide</a>
                                <a class="dropdown-item" href="two-column.html">Recovery Timeline</a>
                                <a class="dropdown-item" href="three-column.html">FAQs</a>

                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="pricing.html">Publications & Research</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="contact.html">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="contact.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <div class="header-contact d-flex align-items-center">
                        <div class="phone d-flex align-items-center">
                            <figure class="mb-0">
                                <img src="assets/images/phone.png" alt="phone">
                            </figure>

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    </div>
        `;
    }
}


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="footer-main-section w-100  position-relative">
        <div class="container">
            <div class="subscribe-con d-flex">
                <h4>Subscribe To Our <br>
                    Newsletter</h4>
                <div class="form-sec">
                    <input type="email" name="email" id="mail" placeholder="Your Email Address:">
                    <button type="submit" id="submit" class="sign-up-btn">Sign Up Now</button>
                </div>
            </div>
            <div class="footer-inner-sec">
                <div class="footer-boxes">
                    <div class="footer-logo-con">
                        <a href="index.html">
                            <figure>
                                <img src="assets/images/logo.png" alt="logo">
                            </figure>
                        </a>
                        <p>Deleniti aeue corrupti quos dolores quas
                            tias excepturi sint occaecati rupiditate non
                            similique sunt incidunt...</p>
                        <div class="social-links">
                            <ul class="list-unstyled mb-0 d-flex ">
                                <li class="d-flex justify-content-center align-items-center"><a
                                        href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="d-flex justify-content-center align-items-center"><a
                                        href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i
                                            class="fab fa-twitter"></i></a></li>
                                <li class="d-flex justify-content-center align-items-center"><a
                                        href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                            class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-text-boxes">
                    <h4>About Us</h4>
                    <ul class="mb-0 list-unstyled">
                        <li class="position-relative"><a href="services.html"><i
                                    class="fas fa-angle-right"></i>Services</a></li>
                        <li class="position-relative"><a href="about.html"><i class="fas fa-angle-right"></i>About
                                us</a></li>
                        <li class="position-relative"><a href="single-blog.html"><i
                                    class="fas fa-angle-right"></i>Blog</a></li>
                        <li class="position-relative"><a href="pricing.html"><i
                                    class="fas fa-angle-right"></i>Pricing</a></li>
                        <li class="position-relative mb-0"><a href="contact.html"><i
                                    class="fas fa-angle-right"></i>Contact us</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-text-boxes">
                    <h4>Our Services</h4>
                    <ul class="mb-0 list-unstyled">
                        <li class="position-relative"><a href="services.html"><i class="fas fa-angle-right"></i>Couple
                                Therapy</a>
                        </li>
                        <li class="position-relative"><a href="services.html"><i class="fas fa-angle-right"></i>Family
                                Counseling</a></li>
                        <li class="position-relative"><a href="services.html"><i class="fas fa-angle-right"></i>Anxiety
                                Disorder</a>
                        </li>
                        <li class="position-relative"><a href="services.html"><i class="fas fa-angle-right"></i>Personal
                                Meeting</a>
                        </li>
                        <li class="position-relative mb-0"><a href="services.html"><i
                                    class="fas fa-angle-right"></i>Dating &
                                Relationship</a></li>
                    </ul>
                </div>
                <div class="footer-text-boxes">
                    <h4>Contact Info</h4>
                    <ul class="mb-0 list-unstyled">
                        <li class="position-relative"><a href="tel:+61383766284"><i class="fas fa-phone-alt"></i>+613
                                8376 6284</a></li>
                        <li class="position-relative"><a href="mailto:Info@medunit.om"><i
                                    class="fas fa-envelope"></i>Info@medunit.om</a></li>
                        <li class="position-relative mb-0"><i class="fas fa-map-marker-alt"></i>21 King Street
                            Melbourne,<br> 3000, Australia</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div class="copy-rihgt-sec w-100  text-center">
        <p class="mb-0">Medunit copyright © 2023. All Rights Reserved.</p>
    </div>
    <a id="button"></a>
        `
        ;}}


        customElements.define('main-header', Header);
customElements.define('main-footer', Footer);