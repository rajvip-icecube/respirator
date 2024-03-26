'use client'
export default function Footer(){
    return(
        <>
        <footer className="page-footer"><div className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="custom-block"><div className="footer-brands">
    <p><img 
    src="https://newdev.respiratorshop.co.uk/media/wysiwyg/3mlogo.png"
     alt="3M" /> <img  
     src="https://newdev.respiratorshop.co.uk/media/wysiwyg/moldexlogo.png" 
     alt="Moldex" /> 
    <img
     src="https://newdev.respiratorshop.co.uk/media/wysiwyg/portwestlogo.png" 
     alt="Portwest" />
      <img
       src="https://newdev.respiratorshop.co.uk/media/wysiwyg/draegerlogo.png" 
       alt="Drager" />
     <img 
     src="https://newdev.respiratorshop.co.uk/media/wysiwyg/jsp1logo.png" 
     alt="JSP" /> <img 
     src="https://newdev.respiratorshop.co.uk/media/wysiwyg/scottsafetylogo.png"
      alt="Scott Safety" /></p>
    </div></div>                </div>
                </div>
            </div>
        </div>
        <div className="footer-middle">
            <div className="container">
                        <div className="row">
                <div className="col-lg-3"><div className="block">
    <div className="block-title"><strong>Quick Links</strong></div>
    <div className="block-content">
    <ul className="links">
    <li><a title="Contact us"
     >Contact us</a></li>
    <li><a title="Shipping &amp; Terms" 
    >Shipping and Terms and Conditions</a></li>
    <li><a title="Sign Up" 
    >Sign Up</a></li>
    <li><a title="My Account"
     >My Account</a></li>
    <li><a title="Shopping Cart"
     >Shopping Cart</a></li>
    <li><a title="Blog" 
    >Blog</a></li>
    </ul>
    </div>
    </div></div><div className="col-lg-3"><div className="block">
    <div className="block-title"><strong>Contact Details</strong></div>
    <div className="block-content">
    <ul className="contact-info">
    <li>
    <p><strong>Address:</strong></p>
    <p style={{width: "217px"}}>Thatcher House,12 Mount Ephraim, Tunbridge Wells, Kent, TN4 8AS</p>
    </li>
    <li>
    <p><strong>Phone:</strong><br /> <a href="tel:01435 510749">01435 510749</a></p>
    </li>
    <li>
    <p><strong>Email:</strong><br /> <a href="mailto:sales@respiratorshop.co.uk">sales@respiratorshop.co.uk</a></p>
    </li>
    <li>
    <p><strong>Working Days/Hours:</strong><br />
    Monday - Friday / 9:00AM - 5:00PM</p>
    </li>
    </ul>
    </div>
    </div></div><div className="col-lg-3"><div className="block">
        <div className="block-title"><strong>Main Features</strong></div>
        <div className="block-content">
            <ul className="features">
                <li><em className="porto-icon-ok theme-color"></em><a href="#">Super Fast Magento Theme</a></li>
                <li><em className="porto-icon-ok theme-color"></em><a href="#">1st Fully working Ajax Theme</a></li>
                <li><em className="porto-icon-ok theme-color"></em><a href="#">20 Unique Homepage Layouts</a></li>
                <li><em className="porto-icon-ok theme-color"></em><a href="#">Powerful Admin Panel</a></li>
                <li><em className="porto-icon-ok theme-color"></em><a href="#">Mobile &amp; Retina Optimized</a></li>
            </ul>
        </div>
    </div></div><div className="col-lg-3"><div className="block newsletter">
        <div className="block-title"><strong>Newsletter Sign Up</strong></div>
        <div className="content">
            <p>Subscribe to the Respirator Shop newsletter and you will get monthly updates of our latest offers.</p>
            <label for="footer_newsletter">Enter your email address</label>
            <form className="form subscribe"
                novalidate
                action="https://newdev.respiratorshop.co.uk/newsletter/subscriber/new/"
                method="post"
                data-mage-init='{"validation": {"errorClass": "mage-error"}}'
                id="newsletter-validate-detail">
                <div className="field newsletter">
                    <label className="label" for="footer_newsletter"><span>Sign Up for Our Newsletter:</span></label>
                    <div className="control">
                        <input name="email" type="email" id="footer_newsletter" placeholder="Your Email"
                                    data-validate="{required:true, 'validate-email':true}"/>
                    </div>
                </div>
                <div className="actions">
                    <button className="action subscribe primary" title="Subscribe" type="submit">
                        <span>Subscribe</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                            <address>Respirator Shop © 2022</address>
                <div className="custom-block f-right"><p>
                    <img
                     src="https://newdev.respiratorshop.co.uk/media/wysiwyg/smartwave/porto/footer/payments.png" 
                     alt="payment-modes" /></p></div>                    </div>
        </div>
    </div>
    <a href="javascript:void(0)" id="totop"><em className="porto-icon-up-open"></em></a></footer></>

    )
}