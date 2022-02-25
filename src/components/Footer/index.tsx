import React from "react";

const Footer = () => {
  return (
    <div className="footer w-100">
      <div className="container">
        <div className="community_section w-100">
          <div className="row">
            <div className="signup_section col-12 col-lg-6">
              <h4>Stay in the loop</h4>
              <p>
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                OpenSea.
              </p>
              <div className="sign_form">
                <div className="input_container">
                  <input type="text" placeholder="Your email address" />
                </div>
                <button>Sign up</button>
              </div>
            </div>
            <div className="social_section col-12 col-lg-6">
              <h4>Join the community</h4>
              <div className="social_container">
                <div className="social_icon">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-discord"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-steam"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <div className="social_icon">
                  <i className="far fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
