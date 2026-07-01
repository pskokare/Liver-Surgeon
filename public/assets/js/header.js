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
                                <a class="dropdown-item" href="/about">About Us</a>
                                <a class="dropdown-item" href="./dr-ashish-george-liver-transplant-surgeon-delhi">Dr. Ashish George</a>


                            </div>
                        </li>

                         <li class="nav-item dropdown" id="services-dropdown-navitem">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown5" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown5">

                                <!-- Desktop (5 main categories with submenus) -->
                                <div class="dropdown-submenu desktop-image d-none d-md-block">
                                    <a class="dropdown-item dropdown-toggle" href="/liver-transplant-delhi">Liver Transplant Services</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/pediatric-liver-transplant-delhi">Pediatric Liver Transplant</a>
                                        <a class="dropdown-item" href="/deceased-donor-liver-transplant-delhi">Deceased Donor Liver Transplant</a>
                                        <a class="dropdown-item" href="/living-donor-liver-transplant-delhi">Living Donor Liver Transplant</a>
                                        <a class="dropdown-item" href="/split-liver-transplant-delhi">Split Liver Transplantation</a>
                                        <a class="dropdown-item" href="/dual-lobe-liver-transplant-delhi">Dual Lobe Liver Transplantation</a>
                                        <a class="dropdown-item" href="/combined-liver-Kidney-transplant-delhi">Combined liver kidney transplantation</a>
                                        <a class="dropdown-item" href="/post-transplant-monitoring-delhi">Post-Transplant Surveillance</a>
                                        <a class="dropdown-item" href="/immunosuppressive-therapy-delhi">Immunosuppressive Therapy</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image d-none d-md-block">
                                    <a class="dropdown-item dropdown-toggle" href="/liver-hepatology-conditions-delhi">Liver & Hepatology Conditions</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/chronic-liver-diseases-delhi">Chronic Liver Disease (CLD)</a>
                                        <a class="dropdown-item" href="/acute-liver-failure-treatment-delhi">Acute Liver Failure (ALF)</a>
                                        <a class="dropdown-item" href="/hepatitis-treatment-delhi">Hepatitis A, B, C, D, E</a>
                                        <a class="dropdown-item" href="/hepatitis-b-c-treatment-delhi">Hepatitis B & C Treatment</a>                                        <a class="dropdown-item" href="/jaundice-treatment-delhi">Jaundice</a>
                                        <a class="dropdown-item" href="/fatty-liver-treatment-delhi">Fatty Liver (MASLD)</a>
                                        <a class="dropdown-item" href="/liver-cirrhosis-treatment-delhi">Liver Cirrhosis</a>
                                        <a class="dropdown-item" href="/autoimmune-hepatitis-treatment-delhi">Autoimmune Hepatitis</a>
                                        <a class="dropdown-item" href="/alcoholic-hepatitis-treatment-delhi">Alcoholic Hepatitis</a>
                                        <a class="dropdown-item" href="/genetic-liver-disorders-delhi">Genetic Liver Disorders</a>
                                        <a class="dropdown-item" href="/metabolic-liver-diseases-treatment-delhi">Metabolic liver diseases</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image d-none d-md-block">
                                    <a class="dropdown-item dropdown-toggle" href="/cancer-surgeries-delhi">Cancer Surgeries</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/liver-cancer-surgery-delhi">Liver Cancer Surgery</a>
                                        <a class="dropdown-item" href="/hepatectomy-liver-resection-delhi">Hepatectomy (Liver Resection)</a>
                                        <a class="dropdown-item" href="/gallbladder-cancer-surgery-delhi">Gallbladder Cancer Surgery</a>
                                        <a class="dropdown-item" href="/pancreatic-cancer-surgery-delhi">Pancreatic Cancer Surgery</a>
                                        <a class="dropdown-item" href="/stomach-cancer-surgery-delhi">Stomach Cancer Surgery</a>
                                        <a class="dropdown-item" href="/colon-colorectal-cancer-surgery-delhi">Colon & Colorectal Cancer Surgery</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image d-none d-md-block">
                                    <a class="dropdown-item dropdown-toggle" href="/advanced-hpb-procedures-delhi">Advanced HPB Procedures</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/ante-situm-ex-situ-liver-resection-delhi">Ante-situm & Ex-situ Liver Resection</a>
                                        <a class="dropdown-item" href="/portal-hypertension-surgery-delhi">Portal Hypertension Surgery</a>
                                        <a class="dropdown-item" href="/bile-duct-injury-reconstruction-delhi">Bile Duct Injury & Reconstruction</a>
                                        <a class="dropdown-item" href="/chronic-pancreatitis-surgery-delhi">Chronic Pancreatitis Surgery</a>
                                        <a class="dropdown-item" href="/minimal-access-liver-surgery-delhi">Minimal Access Liver Surgery</a>
                                        <a class="dropdown-item" href="/robotic-hpb-surgery-delhi">Robotic HPB Surgery</a>
                                        <a class="dropdown-item" href="/cholangiocarcinoma-bile-duct-cancer-surgery-delhi">Cholangiocarcinoma (Bile Duct Cancer) Surgery</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu desktop-image d-none d-md-block">
                                    <a class="dropdown-item dropdown-toggle" href="/diagnostics-supportive-care-delhi">Diagnostics & Supportive Care</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/liver-biopsy-delhi">Liver Biopsy</a>
                                        <a class="dropdown-item" href="/fibroscan-liver-elastography-delhi">FibroScan & Liver Elastography</a>
                                        <a class="dropdown-item" href="/tumor-ablation-delhi">Tumor Ablation (RFA / Microwave)</a>
                                        <a class="dropdown-item" href="/endoscopic-variceal-ligation-delhi">Endoscopic Variceal Ligation (EVL)</a>
                                        <a class="dropdown-item" href="/nutritional-lifestyle-counseling-delhi">Nutritional & Lifestyle Counseling</a>
                                    </div>
                                </div>
                                <!-- Mobile version -->
                                <div class="mobile-services-submenu d-md-none">
                                    <div class="services-main-category">
                                        <div class="services-header d-flex justify-content-between align-items-center" data-target="#mobileService1">
                                            <span>Liver Transplant Services</span>
                                            <span class="services-toggle">&#x25BC;</span>
                                        </div>
                                        <ul class="services-list" id="mobileService1">
                                            <li><a class="dropdown-item" href="/pediatric-liver-transplant-delhi">Pediatric Liver Transplant</a></li>
                                            <li><a class="dropdown-item" href="/deceased-donor-liver-transplant-delhi">Deceased Donor Liver Transplant</a></li>
                                            <li><a class="dropdown-item" href="/living-donor-liver-transplant-delhi">Living Donor Liver Transplant</a></li>
                                            <li><a class="dropdown-item" href="/split-liver-transplant-delhi">Split Liver Transplantation</a></li>
                                            <li><a class="dropdown-item" href="/dual-lobe-liver-transplant-delhi">Dual Lobe Liver Transplantation</a></li>
                                            <li><a class="dropdown-item" href="/combined-liver-Kidney-transplant-delhi">Combined liver kidney transplantation</a></li>
                                            <li><a class="dropdown-item" href="/post-transplant-monitoring-delhi">Post-Transplant Surveillance</a></li>
                                            <li><a class="dropdown-item" href="/immunosuppressive-therapy-delhi">Immunosuppressive Therapy</a></li>
                                        </ul>
                                    </div>
                                    <div class="services-main-category">
                                        <div class="services-header d-flex justify-content-between align-items-center" data-target="#mobileService2">
                                            <span>Liver & Hepatology Conditions</span>
                                            <span class="services-toggle">&#x25BC;</span>
                                        </div>
                                        <ul class="services-list" id="mobileService2">
                                            <li><a class="dropdown-item" href="/chronic-liver-diseases-delhi">Chronic Liver Disease (CLD)</a></li>
                                            <li><a class="dropdown-item" href="/acute-liver-failure-treatment-delhi">Acute Liver Failure (ALF)</a></li>
                                            <li><a class="dropdown-item" href="/hepatitis-treatment-delhi">Hepatitis A, B, C, D, E</a></li>
                                            <li><a class="dropdown-item" href="/hepatitis-treatment-delhi">Hepatitis B & C Treatment</a></li>
                                            <li><a class="dropdown-item" href="/jaundice-treatment-delhi">Jaundice</a></li>
                                            <li><a class="dropdown-item" href="/fatty-liver-treatment-delhi">Fatty Liver (MASLD)</a></li>
                                            <li><a class="dropdown-item" href="/liver-cirrhosis-treatment-delhi">Liver Cirrhosis</a></li>
                                            <li><a class="dropdown-item" href="/autoimmune-hepatitis-treatment-delhi">Autoimmune Hepatitis</a></li>
                                            <li><a class="dropdown-item" href="/alcoholic-hepatitis-treatment-delhi">Alcoholic Hepatitis</a></li>
                                            <li><a class="dropdown-item" href="/genetic-liver-disorders-delhi">Genetic Liver Disorders</a></li>
                                            <li><a class="dropdown-item" href="/metabolic-liver-diseases-treatment-delhi">Metabolic liver diseases</a></li>
                                        </ul>
                                    </div>
                                    <div class="services-main-category">
                                        <div class="services-header d-flex justify-content-between align-items-center" data-target="#mobileService3">
                                            <span>Cancer Surgeries</span>
                                            <span class="services-toggle">&#x25BC;</span>
                                        </div>
                                        <ul class="services-list" id="mobileService3">
                                            <li><a class="dropdown-item" href="/liver-cancer-surgery-delhi">Liver Cancer Surgery</a></li>
                                            <li><a class="dropdown-item" href="/hepatectomy-liver-resection-delhi">Hepatectomy (Liver Resection)</a></li>
                                            <li><a class="dropdown-item" href="/gallbladder-cancer-surgery-delhi">Gallbladder Cancer Surgery</a></li>
                                            <li><a class="dropdown-item" href="/pancreatic-cancer-surgery-delhi">Pancreatic Cancer Surgery</a></li>
                                            <li><a class="dropdown-item" href="/stomach-cancer-surgery-delhi">Stomach Cancer Surgery</a></li>
                                            <li><a class="dropdown-item" href="/colon-colorectal-cancer-surgery-delhi">Colon & Colorectal Cancer Surgery</a></li>
                                        </ul>
                                    </div>
                                    <div class="services-main-category">
                                        <div class="services-header d-flex justify-content-between align-items-center" data-target="#mobileService4">
                                            <span>Advanced HPB Procedures</span>
                                            <span class="services-toggle">&#x25BC;</span>
                                        </div>
                                        <ul class="services-list" id="mobileService4">
                                            <li><a class="dropdown-item" href="/ante-situm-ex-situ-liver-resection-delhi">Ante-situm & Ex-situ Liver Resection</a></li>
                                            <li><a class="dropdown-item" href="/portal-hypertension-surgery-delhi">Portal Hypertension Surgery</a></li>
                                            <li><a class="dropdown-item" href="/bile-duct-injury-reconstruction-delhi">Bile Duct Injury & Reconstruction</a></li>
                                            <li><a class="dropdown-item" href="/chronic-pancreatitis-surgery-delhi">Chronic Pancreatitis Surgery</a></li>
                                            <li><a class="dropdown-item" href="/minimal-access-liver-surgery-delhi">Minimal Access Liver Surgery</a></li>
                                            <li><a class="dropdown-item" href="/robotic-hpb-surgery-delhi">Robotic HPB Surgery</a></li>
                                            <li><a class="dropdown-item" href="/cholangiocarcinoma-bile-duct-cancer-surgery-delhi">Cholangiocarcinoma (Bile Duct Cancer) Surgery</a></li>
                                        </ul>
                                    </div>
                                    <div class="services-main-category">
                                        <div class="services-header d-flex justify-content-between align-items-center" data-target="#mobileService5">
                                            <span>Diagnostics & Supportive Care</span>
                                            <span class="services-toggle">&#x25BC;</span>
                                        </div>
                                        <ul class="services-list" id="mobileService5">
                                            <li><a class="dropdown-item" href="/liver-biopsy-delhi">Liver Biopsy</a></li>
                                            <li><a class="dropdown-item" href="/fibroscan-liver-elastography-delhi">FibroScan & Liver Elastography</a></li>
                                            <li><a class="dropdown-item" href="/tumor-ablation-delhi">Tumor Ablation (RFA / Microwave)</a></li>
                                            <li><a class="dropdown-item" href="/endoscopic-variceal-ligation-delhi">Endoscopic Variceal Ligation (EVL)</a></li>
                                            <li><a class="dropdown-item" href="/nutritional-lifestyle-counseling-delhi">Nutritional & Lifestyle Counseling</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- CUSTOM JS for multi-level mobile dropdown -->
                            <style>
    @media (max-width: 767.98px) {
        .mobile-services-submenu .services-list {
            display: none !important;
            padding-left: 1.5rem !important;
        }
        .mobile-services-submenu .services-list.show {
            display: block !important;
        }
        .services-header {
            cursor: pointer;
            border-bottom: 1px solid #eee;
            padding: .6rem 1rem;
            background: #fff;
            font-weight: 500;
        }
        .mobile-services-submenu .services-list li {
            border: 0;
        }
    }
</style>
                        
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown4" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Patient Information
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <a class="dropdown-item" href="/pre-transplant-evaluation">Pre-Transplant Evaluation</a>
                                <a class="dropdown-item" href="/post-transplant-instructions">Post-Transplant Instructions</a>
                                <a class="dropdown-item" href="/diet-and-nutrition-guide">Diet & Nutrition Guide</a>
                                <a class="dropdown-item" href="/liver-transplant-recovery-timeline">Recovery Timeline</a>
                                <a class="dropdown-item" href="/liver-transplant-cost-delhi">Liver Transplant Cost India 2026</a>
                                <a class="dropdown-item" href="/faq">FAQs</a>

                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/news">Publications & Research</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div class="header-contact d-flex align-items-center">
                        <div class="phone d-flex align-items-center">
                            <figure class="mb-0">
                                <a a href="tel:+91 93101 39800"><img  loading="lazy" src="/assets/images/phone.png" alt="phone"></a>
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
                
                    <a href="/contact" id="submit" class="sign-up-btn">Contact Now</a>
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
                                        href="https://www.facebook.com/login"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="d-flex justify-content-center align-items-center"><a
                                        href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i
                                            class="fab fa-twitter"></i></a></li>
                                <li class="d-flex justify-content-center align-items-center"><a
                                        href="https://www.instagram.com/liversurgeonsdelhi"><i
                                            class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-text-boxes">
                    <h4>About Us</h4>
                    <ul class="mb-0 list-unstyled">
                        <li class="position-relative"><a href="/about"><i
                                    class="fas fa-angle-right"></i>About</a></li>
                                                <li class="position-relative"><a href="./dr-ashish-george-liver-transplant-surgeon-delhi"><i class="fas fa-angle-right"></i>Dr. Ashish George</a></li>
                        <li class="position-relative"><a href="#"><i
                                    class="fas fa-angle-right"></i>Publication</a></li>
                        <li class="position-relative"><a href="#"><i
                                    class="fas fa-angle-right"></i>Blog</a></li>
                        <li class="position-relative mb-0"><a href="/contact"><i
                                    class="fas fa-angle-right"></i>Contact us</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-text-boxes">
                    <h4>Our Services</h4>
                    <ul class="mb-0 list-unstyled">

                       <li class="position-relative"><a href="/liver-transplant-delhi"><i class="fas fa-angle-right"></i>Liver Transplant Services</a>
                        </li>
                        <li class="position-relative"><a href="/liver-hepatology-conditions-delhi"><i class="fas fa-angle-right"></i>Liver & Hepatology Conditions</a></li>
                        <li class="position-relative"><a href="/cancer-surgeries-delhi"><i class="fas fa-angle-right"></i>Cancer Surgeries</a>
                        </li>
                        <li class="position-relative"><a href="/advanced-hpb-procedures-delhi"><i class="fas fa-angle-right"></i>Advance HPB Procedure</a>
                        </li>
                        <li class="position-relative mb-0"><a href="/diagnostics-supportive-care-delhi"><i
                                    class="fas fa-angle-right"></i>Diagnostic & Supportive Care</a></li>
                    </ul>
                </div>
                <div class="footer-text-boxes">
                    <h4>Contact Info</h4>
                    <ul class="mb-0 list-unstyled">
                        <li class="position-relative"><a href="tel:+91 93101 39800"><i class="fas fa-phone-alt"></i>
                            +91 93101 39800</a></li>
                        <li class="position-relative"><a href="mailto:info@liversurgeons.com"><i
                                    class="fas fa-envelope"></i>info@liversurgeons.com</a></li>
                        <li class="position-relative"><i class="fas fa-map-marker-alt"></i>Fortis Hospital, Shalimar Bagh, Delhi-110088</li>
                        <li class="position-relative mb-0"><a href="/sitemap.html"><i class="fas fa-sitemap"></i>Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <div class="copy-rihgt-sec w-100  text-center">
        <p class="mb-0">Dr Ashish Liver Surgeon copyright © 2026. All Rights Reserved.</p>
    </div>
    <a id="button"></a>

    <!-- Sticky WhatsApp Icon for Desktop Start -->
    <style>
        .whatsapp-float {
            position: fixed;
            right: 30px;
            bottom: 60px;
            z-index: 9999;
            display: none;
        }
        .whatsapp-float a {
            display: flex;
            align-items: center;
            background: #25d366;
            color: #fff;
            padding: 15px;
            border-radius: 30px;
            font-size: 24px;
            box-shadow: 0 2px 10px rgba(37,211,102,0.2);
            transition: background .2s;
            text-decoration: none;
            font-weight: 500;
        }
        .whatsapp-float a:hover {
            background: #128c7e;
            color: #fff;
            text-decoration: none;
        }
        .whatsapp-float .whatsapp-icon {
            font-size: 40px;
            
        }
        /* Show only on desktop */
        @media (min-width: 992px) {
            .whatsapp-float {
                display: block;
            }
        }
    </style>
    <div class="whatsapp-float">
        <a href="https://wa.me/919310139800" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
            <i class="fab fa-whatsapp whatsapp-icon"></i>
            
        </a>
    </div>
    <!-- Sticky WhatsApp Icon for Desktop End -->
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
                                    <li><a href="https://www.facebook.com/login"><i class="fab fa-facebook-f"></i></a>
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
                                    <li><a href="https://www.facebook.com/login"><i class="fab fa-facebook-f"></i></a>
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
                                    <li><a href="https://www.facebook.com/login"><i class="fab fa-facebook-f"></i></a>
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
                    <p data-aos="fade-up" data-aos-duration="700" style="text-align:justify">Get expertise opinion from Dr Ashish George
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


class LiverHepatologySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <div class="specialty-sidebar">
                        <div class="sidebar-header">
                            <h5>
                                <i class="fas fa-liver" style="margin-right: 10px;"></i>Liver & Hepatology Conditions
                            </h5>
                        </div>
                        <div class="sidebar-menu" style="padding: 15px;">
                            <ul class="nav flex-column specialty-list">
                                <li class="nav-item">
                                    <a class="nav-link" href="chronic-liver-disease">
                                        <i class="fas fa-heartbeat mr-2"></i>Chronic Liver Disease 
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="acute-liver-failure">
                                        <i class="fas fa-exclamation-triangle mr-2"></i>Acute Liver Failure 
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="hepatitis">
                                        <i class="fas fa-virus mr-2"></i>Hepatitis A, B, C, D, E
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="jaundice">
                                        <i class="fas fa-tint mr-2"></i>Jaundice
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="fatty-liver">
                                        <i class="fas fa-apple-alt mr-2"></i>Fatty Liver (MASLD)
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="liver-cirrhosis">
                                        <i class="fas fa-procedures mr-2"></i>Liver Cirrhosis
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="autoimmune-hepatitis">
                                        <i class="fas fa-shield-virus mr-2"></i>Autoimmune Hepatitis
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="alcoholic-hepatitis">
                                        <i class="fas fa-wine-glass-alt mr-2"></i>Alcoholic Hepatitis
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="genetic-liver-disorders">
                                        <i class="fas fa-dna mr-2"></i>Genetic Liver Disorders
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="metabolic-liver-diseases">
                                        <i class="fas fa-cogs mr-2"></i>Metabolic Liver Diseases
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
        `
        ;}}


        customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('main-team', Team);
customElements.define('main-contact', Contact);
customElements.define('liverhepatology-sidebar', LiverHepatologySidebar);

document.addEventListener('DOMContentLoaded', function(){
    function isMobile() {
        return window.matchMedia('(max-width: 767.98px)').matches;
    }
    // Hide all lists initially (mobile only)
    function hideAllMobileServiceLists(){
        if(isMobile()){
            document.querySelectorAll('.services-list').forEach(function(list){
                list.classList.remove('show');
            });
            document.querySelectorAll('.services-toggle').forEach(function(toggle){
                toggle.innerHTML = '&#x25BC;';
            });
        }
    }
    hideAllMobileServiceLists();

    // Toggle for main categories in mobile view
    document.querySelectorAll('.services-header').forEach(function(header){
        header.addEventListener('click', function(e){
            if(isMobile()){
                var targetId = header.getAttribute('data-target');
                var sublist = document.querySelector(targetId);

                // Hide all other
                document.querySelectorAll('.services-list').forEach(function(l){
                    if(l !== sublist){
                        l.classList.remove('show');
                    }
                });
                document.querySelectorAll('.services-toggle').forEach(function(t){
                    if(header.querySelector('.services-toggle') !== t){
                        t.innerHTML = '&#x25BC;';
                    }
                });

                if(sublist.classList.contains('show')){
                    sublist.classList.remove('show');
                    header.querySelector('.services-toggle').innerHTML = '&#x25BC;';
                }else{
                    sublist.classList.add('show');
                    header.querySelector('.services-toggle').innerHTML = '&#x25B2;';
                }
            }
        });
    });

    // Prevent mobile dropdown from closing when clicking or tapping inside the submenu
    var servicesDropdown = document.getElementById('services-dropdown-navitem');
    if(servicesDropdown){
        var dropdownMenu = servicesDropdown.querySelector('.dropdown-menu');
        dropdownMenu.addEventListener('click', function(e){
            if(isMobile()){
                e.stopPropagation();
            }
        });
    }

    // Also ensure toggling on mobile does not close menu
    // If bootstrap is handling closing on click (data-toggle dropdown), we prevent default only for mobile
    var servicesLink = document.getElementById('navbarDropdown5');
    if (servicesLink) {
        servicesLink.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                // Force show the menu
                var parentLi = servicesLink.closest('.dropdown');
                if (parentLi) {
                    var menu = parentLi.querySelector('.dropdown-menu');
                    if(menu && !menu.classList.contains('show')){
                        // Simulate bootstrap .show class if closed
                        menu.classList.add('show');
                        parentLi.classList.add('show');
                        servicesLink.setAttribute('aria-expanded', 'true');
                    }
                }
            }
        });
    }

    // On resize, reset
    window.addEventListener('resize', hideAllMobileServiceLists);
});

