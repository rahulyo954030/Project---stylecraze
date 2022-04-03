
const footer = ()=> {

    return `  <div id="footer_bar">
    <div>
        <a href="https://www.stylecraze.com/about-us/">About Us</a>
        <a href="https://www.stylecraze.com/image-usage-policy/">Image Usage Policy</a>
        <a href="https://www.stylecraze.com/contact-us/"> Contact us</a>
        <a href="https://www.stylecraze.com/editorial-guidelines/">Editorial Guideliness</a>
        <a href="https://www.stylecraze.com/doctors-join/">Join Our Medical Board</a>
        <a href="https://www.stylecraze.com/doctors-join/">Press Room</a>

    </div>
    <div>
        <a href="https://www.stylecraze.com/advertise-with-us/">Advertise With Us</a>
        <a href="https://www.stylecraze.com/privacy-policy/">Privacy Policy</a>
        <a href="https://www.stylecraze.com/terms-of-use/">Term Of Use</a>
        <a href="https://www.stylecraze.com/affiliate-disclosure/">Affiliate Discloure</a>
        <a href="https://www.stylecraze.com/cookie-policy/">Cookie Policy</a>
        <a href="https://www.stylecraze.com/manage-subscriptions/?ref=footer">Manage Sbscription</a>
    </div>
    <div>
        <div>
            <h3>Follow Us</h3>
        </div>

        <div>
            <a href="https://www.facebook.com/StyleCraze/" target="_blank"> <img
                    src="data:image/png;base64,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" />
            </a>
            <a href="https://in.pinterest.com/stylecraze/"   target="_blank">
               <img src="https://png.pngtree.com/element_our/md/20180626/md_5b321fcda2483.jpg" />

            </a>
            <a href="https://twitter.com/stylecrazeindia/" target="_blank">
                <img
                    src="data:image/png;base64,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" />

            </a>
            <a href="https://www.instagram.com/accounts/login/?next=/style.craze/" target="_blank">
                <img
                    src="https://toppng.com/uploads/preview/new-black-instagram-logo-2020-11609370162ayxbdxlffo.png" />

            </a>

            <a href="https://www.youtube.com/user/StylecrazeTV" target="_blank">

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zmKt_j4VUbGiSpQ7kQ658lLxIyaYL-4TpwxzV69t6zkXbDpXpEKhp4MPW0xi0Wl_2As&usqp=CAU" />
            </a>
        </div>

    </div>
    <div>
        <h3>Our Sister Sites</h3>
        <a href="https://www.momjunction.com/">Mom Junction</a>
        <a href="https://www.thebridalbox.com/">The Bridal Box</a>
        <a href="https://skinkraft.com/">SkinCraft</a>
        <a href="https://vedix.com/">Vedix</a>

    </div>
</div>
<div id="footer_child">
    <div id="footer_bottom_first">
        <P>
            Copyright © 2011 - 2022 <a href="https://www.incnut.com/">Incnut Digital.</a> All rights reserved.
        </P>
    </div>
    <div id="footer_bottom_second">
        StyleCraze provides content of general nature that is designed for informational purposes only. The content
        is not intended to be a substitute for professional medical advice, diagnosis, or treatment. <a
            href="https://www.stylecraze.com/disclaimer/">
            Click here for
        </a>
    </div>
</div>`

}


export default footer