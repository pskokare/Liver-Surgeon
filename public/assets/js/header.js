class Header extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <div class="header-main-con w-100 ">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="index.html">
                    <figure class="mb-0">
                        <img src="/assets/dr-shish-liver-surgeon-logo.webp" alt="logo2" style="max-width: 100px;">
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
                                <a class="dropdown-item" href="/about/">About Us</a>
                                <a class="dropdown-item" href="#">Team</a>


                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown5" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown5">


                                <!-- Nested Dropdown -->
                                <div class="dropdown-submenu desktop-image">
                                    <a class="dropdown-item dropdown-toggle" href="/liver-transplant-delhi/">Liver Transplant Services</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/pediatric-liver-transplant-delhi/"> Pediatric Liver Transplant</a>
                                        <a class="dropdown-item" href="/deceased-donor-liver-transplant-delhi/">Deceased Donor Liver
                                            Transplant</a>
                                        <a class="dropdown-item" href="/living-donor-liver-transplant-delhi/">Living Donor Liver Transplant</a>
                                        <a class="dropdown-item" href="/split-liver-transplant-delhi/">Split Liver Transplantation</a>
                                        <a class="dropdown-item" href="/dual-lobe-liver-transplant-delhi/">Dual Lobe Liver
                                            Transplantation</a>
                                        <a class="dropdown-item" href="/combined-liver-Kidney-transplant-delhi/">Combined liver kidney
                                            transplantation</a>
                                        <a class="dropdown-item" href="/post-transplant-monitoring-delhi/">Post-Transplant Surveillance</a>
                                        <a class="dropdown-item" href="/immunosuppressive-therapy-delhi.html">Immunosuppressive Therapy</a>

                                    </div>
                                </div>

                                <div class="dropdown-submenu desktop-image">
                                    <a class="dropdown-item dropdown-toggle" href="#">Liver & Hepatology Conditions</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Chronic Liver Disease (CLD)</a>
                                        <a class="dropdown-item" href="#"> Acute Liver Failure (ALF)</a>
                                        <a class="dropdown-item" href="#">Hepatitis A, B, C,D, E</a>
                                        <a class="dropdown-item" href="#">Jaundice</a>
                                        <a class="dropdown-item" href="#">Fatty Liver (MASLD)</a>
                                        <a class="dropdown-item" href="#">Liver Cirrhosis</a>
                                        <a class="dropdown-item" href="#">Autoimmune Hepatitis</a>
                                        <a class="dropdown-item" href="#">Alcoholic Hepatitis</a>
                                        <a class="dropdown-item" href="#">Genetic Liver Disorders</a>
                                        <a class="dropdown-item" href="#">Metabolic liver diseases</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image">
                                    <a class="dropdown-item dropdown-toggle" href="#">Cancer Surgeries</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Liver Cancer Surgery</a>
                                        <a class="dropdown-item" href="#">Hepatectomy (Liver Resection)</a>
                                        <a class="dropdown-item" href="#">Gallbladder Cancer Surgery</a>
                                        <a class="dropdown-item" href="#">Pancreatic Cancer Surgery</a>
                                        <a class="dropdown-item" href="#">Stomach Cancer Surgery</a>
                                        <a class="dropdown-item" href="#">Colon & Colorectal Cancer Surgery</a>

                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image">
                                    <a class="dropdown-item dropdown-toggle" href="#">Advanced HPB Procedures</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Ante-situm & Ex-situ Liver
                                            Resection</a>
                                        <a class="dropdown-item" href="#">Portal Hypertension Surgery</a>
                                        <a class="dropdown-item" href="#">Bile Duct Injury & Reconstruction</a>
                                        <a class="dropdown-item" href="#">Chronic Pancreatitis Surgery</a>
                                        <a class="dropdown-item" href="#">Minimal Access Liver Surgery</a>
                                        <a class="dropdown-item" href="#">Robotic HPB Surgery</a>
                                        <a class="dropdown-item" href="#">Cholangiocarcinoma (Bile Duct Cancer)
                                            Surgery</a>
                                        <a class="dropdown-item" href="#">Choledochal Cyst Surgery </a>


                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image">
                                    <a class="dropdown-item dropdown-toggle" href="#">Diagnostics & Supportive Care</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Diagnostics & Supportive Care</a>
                                        <a class="dropdown-item" href="#">FibroScan & Liver Elastography</a>
                                        <a class="dropdown-item" href="#">Tumor Ablation (RFA / Microwave)</a>
                                        <a class="dropdown-item" href="#">Endoscopic Variceal Ligation (EVL)</a>
                                        <a class="dropdown-item" href="#">Nutritional & Lifestyle Counseling</a>

                                    </div>
                                </div>


                                <div class="dropdown-submenu d-md-none">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <a class="dropdown-item" href="/liver-transplant-delhi/">Liver Transplant Services</a>
                                        <span class="submenu-toggle d-md-none">&#x25BC;</span>
                                    </div>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/pediatric-liver-transplant-delhi/">Pediatric Liver Transplant</a>
                                        <a class="dropdown-item" href="/deceased-donor-liver-transplant-delhi/">Deceased Donor Liver Transplant</a>
                                        <a class="dropdown-item" href="/living-donor-liver-transplant-delhi/">Living Donor Liver Transplant</a>
                                        <a class="dropdown-item" href="/split-liver-transplant-delhi/">Split Liver Transplantation</a>
                                        <a class="dropdown-item" href="/dual-lobe-liver-transplant-delhi/">Dual Lobe Liver Transplantation</a>
                                        <a class="dropdown-item" href="/combined-liver-Kidney-transplant-delhi/">Combined Liver Kidney Transplantation</a>
                                        <a class="dropdown-item" href="/post-transplant-monitoring-delhi/">Post-Transplant Surveillance</a>
                                        <a class="dropdown-item" href="/immunosuppressive-therapy-delhi/">Immunosuppressive Therapy</a>
                                    </div>
                                </div>


                                <div class="dropdown-submenu d-md-none">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <a class="dropdown-item" href="#">Liver & Hepatology Conditions</a>
                                      <span class="submenu-toggle ">&#x25BC;</span>
                                    </div>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">Chronic Liver Disease (CLD)</a>
                                      <a class="dropdown-item" href="#">Acute Liver Failure (ALF)</a>
                                      <a class="dropdown-item" href="#">Hepatitis A, B, C, D, E</a>
                                      <a class="dropdown-item" href="#">Jaundice</a>
                                      <a class="dropdown-item" href="#">Fatty Liver (MASLD)</a>
                                      <a class="dropdown-item" href="#">Liver Cirrhosis</a>
                                      <a class="dropdown-item" href="#">Autoimmune Hepatitis</a>
                                      <a class="dropdown-item" href="#">Alcoholic Hepatitis</a>
                                      <a class="dropdown-item" href="#">Genetic Liver Disorders</a>
                                      <a class="dropdown-item" href="#">Metabolic Liver Diseases</a>
                                    </div>
                                  </div>
                                  
                                  <div class="dropdown-submenu d-md-none">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <a class="dropdown-item" href="#">Cancer Surgeries</a>
                                      <span class="submenu-toggle d-md-none">&#x25BC;</span>
                                    </div>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">Liver Cancer Surgery</a>
                                      <a class="dropdown-item" href="#">Hepatectomy (Liver Resection)</a>
                                      <a class="dropdown-item" href="#">Gallbladder Cancer Surgery</a>
                                      <a class="dropdown-item" href="#">Pancreatic Cancer Surgery</a>
                                      <a class="dropdown-item" href="#">Stomach Cancer Surgery</a>
                                      <a class="dropdown-item" href="#">Colon & Colorectal Cancer Surgery</a>
                                    </div>
                                  </div>
                                  
                                  <div class="dropdown-submenu d-md-none">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <a class="dropdown-item" href="#">Advanced HPB Procedures</a>
                                      <span class="submenu-toggle d-md-none">&#x25BC;</span>
                                    </div>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">Ante-situm & Ex-situ Liver Resection</a>
                                      <a class="dropdown-item" href="#">Portal Hypertension Surgery</a>
                                      <a class="dropdown-item" href="#">Bile Duct Injury & Reconstruction</a>
                                      <a class="dropdown-item" href="#">Chronic Pancreatitis Surgery</a>
                                      <a class="dropdown-item" href="#">Minimal Access Liver Surgery</a>
                                      <a class="dropdown-item" href="#">Robotic HPB Surgery</a>
                                      <a class="dropdown-item" href="#">Cholangiocarcinoma Surgery</a>
                                      <a class="dropdown-item" href="#">Choledochal Cyst Surgery</a>
                                    </div>
                                  </div>
                                  
                                  <div class="dropdown-submenu d-md-none">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <a class="dropdown-item" href="#">Diagnostics & Supportive Care</a>
                                      <span class="submenu-toggle d-md-none">&#x25BC;</span>
                                    </div>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">Diagnostics & Supportive Care</a>
                                      <a class="dropdown-item" href="#">FibroScan & Liver Elastography</a>
                                      <a class="dropdown-item" href="#">Tumor Ablation (RFA / Microwave)</a>
                                      <a class="dropdown-item" href="#">Endoscopic Variceal Ligation (EVL)</a>
                                      <a class="dropdown-item" href="#">Nutritional & Lifestyle Counseling</a>
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
                                <a class="dropdown-item" href="#">Pre-Transplant Evaluation</a>
                                <a class="dropdown-item" href="#">Post-Transplant Instructions</a>
                                <a class="dropdown-item" href="#">Diet & Nutrition Guide</a>
                                <a class="dropdown-item" href="#">Recovery Timeline</a>
                                <a class="dropdown-item" href="#">FAQs</a>

                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="#">Publications & Research</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="#">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/contact/">Contact</a>
                        </li>
                    </ul>
                    <div class="header-contact d-flex align-items-center">
                        <div class="phone d-flex align-items-center">
                            <figure class="mb-0">
                                <img src="/assets/images/phone.png" alt="phone">
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
                <h4>Have Questions? Talk to Our Experts</h4>
                <div class="form-sec">
                
                    <button type="submit" id="submit" class="sign-up-btn">Contact Now</button>
                </div>
            </div>
            <div class="footer-inner-sec">
                <div class="footer-boxes">
                    <div class="footer-logo-con">
                        <a href="index.html">
                            <figure>
                                <img src="/assets/dr-ashish-white-logo.png" alt="logo" style="max-width: 350px;">
                            </figure>
                        </a>
                        <p>Led by Dr. Ashish George, with experience in 1000+ liver transplants including pediatric, acute liver failure, ABO-incompatible, and combined liver-kidney procedures.</p>
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
                        <li class="position-relative"><a href="/about/"><i
                                    class="fas fa-angle-right"></i>About</a></li>
                        <li class="position-relative"><a href="#"><i class="fas fa-angle-right"></i>Team</a></li>
                        <li class="position-relative"><a href="#"><i
                                    class="fas fa-angle-right"></i>Publication</a></li>
                        <li class="position-relative"><a href="#"><i
                                    class="fas fa-angle-right"></i>Blog</a></li>
                        <li class="position-relative mb-0"><a href="/contact/"><i
                                    class="fas fa-angle-right"></i>Contact us</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-text-boxes">
                    <h4>Our Services</h4>
                    <ul class="mb-0 list-unstyled">

                        <li class="position-relative"><a href="#"><i class="fas fa-angle-right"></i>Liver Transplant Services</a>
                        </li>
                        <li class="position-relative"><a href="#"><i class="fas fa-angle-right"></i>Liver & Hapatology Conditions</a></li>
                        <li class="position-relative"><a href="#"><i class="fas fa-angle-right"></i>Cancer Surgeries</a>
                        </li>
                        <li class="position-relative"><a href="#"><i class="fas fa-angle-right"></i>Advance HPB Procedure</a>
                        </li>
                        <li class="position-relative mb-0"><a href="#"><i
                                    class="fas fa-angle-right"></i>Diagnostic & Supportive Care</a></li>
                    </ul>
                </div>
                <div class="footer-text-boxes">
                    <h4>Contact Info</h4>
                    <ul class="mb-0 list-unstyled">
                        <li class="position-relative"><a href="tel:+91 97171 69299"><i class="fas fa-phone-alt"></i>
                            +91 97171 69299</a></li>
                        <li class="position-relative"><a href="mailto:info@liversurgeons.com"><i
                                    class="fas fa-envelope"></i>info@liversurgeons.com</a></li>
                        <li class="position-relative mb-0"><i class="fas fa-map-marker-alt"></i>AA-299, Shaheed Udham Singh Marg, Shalimar Bagh, Delhi-110088</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div class="copy-rihgt-sec w-100  text-center">
        <p class="mb-0">Dr Ashish Liver Surgeon copyright © 2025. All Rights Reserved.</p>
    </div>
    <a id="button"></a>
        `
        ;}}


class Team extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
     <section class="dentists-main-section w-100  padding-top padding-bottom light-bg">
        <div class="container">
            <div class="generic-title text-center">
                <span class="small-text" data-aos="fade-up" data-aos-duration="700">Team Members</span>
                <h2 class="mb-0" data-aos="fade-up" data-aos-duration="700">Meet Our Team</h2>
            </div>
            <div id="owl-carouseltwo" class="owl-carousel owl-theme" data-aos="fade-up" data-aos-duration="700">
                <div class="item">
                    <div class="dentist-box text-center">
                        <figure class="mb-0">
                            <img src="/assets/images/doc-1.png" alt="dentist-img1">
                        </figure>
                        <div class="dentist-details">
                            <h4>Alice Waters</h4>
                            <span class="d-block">Professional Dentist</span>
                            <div class="social-links">
                                <ul class="list-unstyled mb-0 d-flex justify-content-center">
                                    <li><a href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li><a
                                            href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i
                                                class="fab fa-twitter"></i></a></li>
                                    <li class="mb-0"><a href="https://www.linkedin.com/login"><i
                                                class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="dentist-box text-center">
                        <figure class="mb-0">
                            <img src="/assets/images/doc-2.png" alt="dentist-img2">
                        </figure>
                        <div class="dentist-details">
                            <h4>Jamie Oliver</h4>
                            <span class="d-block">Dentist Practitioner</span>
                            <div class="social-links">
                                <ul class="list-unstyled mb-0 d-flex justify-content-center">
                                    <li><a href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li><a
                                            href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i
                                                class="fab fa-twitter"></i></a></li>
                                    <li class="mb-0"><a href="https://www.linkedin.com/login"><i
                                                class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="dentist-box text-center">
                        <figure class="mb-0">
                            <img src="/assets/images/doc-3.png" alt="dentist-img3">
                        </figure>
                        <div class="dentist-details">
                            <h4>Clare Smyth</h4>
                            <span class="d-block">Assistant Doctor</span>
                            <div class="social-links">
                                <ul class="list-unstyled mb-0 d-flex justify-content-center">
                                    <li><a href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li><a
                                            href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i
                                                class="fab fa-twitter"></i></a></li>
                                    <li class="mb-0"><a href="https://www.linkedin.com/login"><i
                                                class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
        `
        ;}}


class Contact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <section class="w-100  contact-con position-relative">
        <div class="padding-top padding-bottom contact-inner-con position-relative">
            <div class="container">
                <div class="contact-form">
                    <span class="sub-txt d-block" data-aos="fade-up" data-aos-duration="700">Book With Us Now</span>
                    <h2 data-aos="fade-up" data-aos-duration="700">Get an Appointment</h2>
                    <p data-aos="fade-up" data-aos-duration="700">Get expertise opinion from Dr Ashish George
                    </p>
                    <form class="form-box" method="post" id="contactpage">
                        <ul class="list-unstyled ">
                            <li data-aos="fade-up" data-aos-duration="700">
                                <input type="text" name="fname" id="fname" placeholder="Your Name:">
                                <i class="fas fa-user"></i>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="700">
                                <input type="email" placeholder="Email address:" name="email" id="email">
                                <i class="fas fa-envelope"></i>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="700">
                                <textarea type="email" placeholder="Enter your message" name="email" ></textarea>
                                <i class="fas fa-envelope"></i>
                            </li>
                         
                          
                        </ul>
                        <div class="submit-btn" data-aos="fade-up" data-aos-duration="700">
                            <button type="submit" id="submit">
                                Make an Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        `
        ;}}


        customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('main-team', Team);
customElements.define('main-contact', Contact);