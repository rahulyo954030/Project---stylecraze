// Header all data
let header = () =>{
    return `<div id="custom_container">
    <!-- Page Header [logo, Input Box , Login & Signup Pages] -->
    <div id="page_header">
        <!-- Logo div -->
        <div class = "navbar-brand">
        <a href="./innerHomepage.html"><img src="https://cdn2.stylecraze.com/static-content/products-reviews/images/logo.png" alt="investor"></a>
        </div>
        <!-- Input Box for Search -->
        <div id="input_group">
            <!-- Search Icon -->
            <span class="input_search" id="search_track"> </span>
            <!-- input innerText -->
            <input type="text" placeholder="Search for Products, Categories & Brands">
        </div>
        <!-- Login and Signup Pages Div -->
        <div class="account_option desktop_only">
            <a href="./login.html"><div>Log In</div></a>
            <a href="./signup.html"><div class="button_option space">Sign Up</div></a>
        </div>
    </div>
</div>
<!-- Navbar Main Pages Link HomePage etc -->
<div id="main_cont">
    <div id="main_pages">
        <div > <a  class = "pages_link" href="innerHomePage.html">Home</a></div>
        <div > <a  class = "pages_link" href="#">Categories</a></div>
        <div > <a  class = "pages_link" href="brands.html">Brands</a></div>
        <div > <a  class = "pages_link" href="productFinder.html">Products Finder</a></div>
        <div > <a  class = "pages_link" href="#">Compare Products</a></div>
        <div > <a  class = "pages_link" href="fabCampaigns.html">Fab Campaign</a></div>
        <div > <a  class = "pages_link" href="help.html">Help</a></div>
    </div>
</div>`
};

// footer all data
let footer = () => {
    return `<div id="container">
    <div id="footer">
        <div class = "links">
            <div>Quick Links</div>
            <div class="pages">
                <div><a class = "footer_links" href="innerHomepage.html">Home</a></div>
                <div><a class = "footer_links" href="#">All Categories</a></div>
                <div><a class = "footer_links" href="brands.html">All Brands</a></div>
                <div><a class = "footer_links" href="#">Compare Products</a></div>
                <div><a class = "footer_links" href="productFinder.html">Products Finder</a></div>
                <div><a class = "footer_links" href="fabCampaigns.html">Fab Campaigns</a></div>
                <div><a class = "footer_links" href="#">Products Review Sitemap</a></div>
            </div>
        </div>
        <div class="links">
            <div>Company</div>
            <div class="pages">
                <div><a class = "footer_links" href="..//about.html">About Us</a></div>
                <div><a class = "footer_links" href="#">Terms of Use</a></div>
            </div>
        </div>
        <div class="links">
            <div>Help & Support</div>
            <div class="pages">
                <div><a class = "footer_links" href="help.html">Help</a></div>
                <div><a class = "footer_links" href="#">FAQ's</a></div>
                <div><a class = "footer_links" href="#">Report an Issue</a></div>
                <div><a class = "footer_links" href="contactus.html">Contact Us</a></div>
            </div>
        </div>
        <div class="links">
            <div>What we believe in!</div>
            <div class="pages_pera">
                <p>StyleCraze Product Reviews is a community of reviewers who share a passion for beauty and self-care. We publish scientifically valid product reviews and real experiences of beauty and wellness enthusiasts from all over the country. Our goal is to help you find what is best for your beauty regime by comparing different products available to you.</p>
            </div>
        </div>
        <div class="links">
            <div>Social Connect</div>
            <div class="pages">
                <a class = "footer_links" href="https://www.facebook.com/StyleCraze/" target="_blank">
                    <img class="footer-icon" src="https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/footer-social.svg" alt="Like StyleCraze Reviews FaceBook Page">
                </a>
                <a class = "footer_links" href="https://www.instagram.com/style.craze/" target="_blank" >
                    <img class="footer-icon" src="https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/footer-insta.svg" alt="Follow StyleCraze Reviews Instagram Page">
                </a>
            </div>
        </div>
    </div>
    <div id="copyright">Copyright Stylecraze 2022. All Rights Reserved</div>
</div>`
};


// This is export header and footer to the homepage or index page
export {header,footer};