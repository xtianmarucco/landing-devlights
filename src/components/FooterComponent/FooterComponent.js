import React from "react";
import "./Footer.css";

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div class="footer-title">
          <h2>Contact us</h2>
        </div>
        <section id="contact">
          <div class="container">
            <div class="row">
              <div class="col-xs-8 col-sm-6 col-md-4 col-lg-4 col-xl-4 wow fadeInUp">
                <div class="datos">
                  {/* <!-- <img
              class="footer-logo-devlights"
              src="/img/portfolio-section/logo-white.png"
              alt="Devlights"
            /> --> */}
                  <ul class="footer-list-ul">
                    <li>
                      <p class="footer-first-col-p">
                        <i class="fas fa-map-marker-alt icons_colors"></i> 1355
                        Bear Mountain Drive Boulder
                        <br />
                        CO 80305
                        <br />
                        United States of America
                      </p>
                      <p></p>
                      <p class="footer-first-col-p">
                        <i class="fa fa-envelope icons_colors"></i>
                        robert.hughes@devlights.com
                      </p>
                      <p class="footer-first-col-p">
                        <i class="fa fa-phone icons_colors"></i> +1 (303)
                        325-3085
                      </p>
                      <p class="footer-first-col-p">
                        <i class="fa fa-envelope icons_colors"></i>
                        contact@devlights.com
                      </p>
                    </li>
                  </ul>
                  <ul class="footer-list-ul">
                    <li>
                      <p class="footer-first-col-p">
                        <i class="fas fa-map-marker-alt icons_colors"></i> 1250
                        Junin st, 2nd Floor Corrientes 3400 Argentina
                      </p>
                      <p class="footer-first-col-p">
                        <i class="fa fa-phone icons_colors"></i> +54 (0379)
                        4230003
                      </p>
                      <p class="footer-first-col-p">
                        <i class="fa fa-envelope icons_colors"></i>
                        contact@devlights.com
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <div
            class="clutch-widget logo_clutch"
            style="margin: 15px 0 25px 0;"
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="50"
            data-darkbg="1"
            data-clutchcompany-id="414104"
          >
            <iframe
              id="iframe-0.2769822841755012"
              frameborder="0"
              width="100%"
              height="50px"
              scrolling="no"
              src="https://widget.clutch.co/widgets/get/2/darkbg?ref_domain=devlights.com&amp;uid=414104"
              style="display: block;"
            ></iframe> 
          </div> --> */}
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 wow fadeInUp footer_link_last">
                <div class="footer-menu-links-title">
                  <h4>LINKS</h4>
                </div>
                <div class="footer-menu-links-items">
                  <ul class="footer_list_ul_links">
                    <li class="links-menu-li-menu">
                      <a href="/#about">About us</a>
                    </li>
                    <li class="links-menu-li-menu">
                      <a href="/#careers">Join the team</a>
                    </li>
                    <li class="links-menu-li-menu">
                      <a href="/#services">Services</a>
                    </li>
                    <li class="links-menu-li-menu">
                      <a href="/#clients">Clients</a>
                    </li>
                    <li class="links-menu-li-menu">
                      <a href="/#intro">Home</a>
                    </li>
                    <li class="links-menu-li-menu">
                      <a href="http://devlights.com#portfolio">Portfolio</a>
                    </li>
                  </ul>
                </div>
                <div class="br"></div>
                <div class="social_icons">
                  <a href="https://www.facebook.com/devlightsok/">
                    <i class="fab fa-facebook fa-3x icons_colors"></i>
                  </a>
                  <a href="https://twitter.com/devlightsok">
                    <i class="fab fa-twitter-square fa-3x icons_colors"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/devlights/">
                    <i class="fab fa-linkedin fa-3x icons_colors"></i>
                  </a>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 wow fadeInUp form_email">
                <h4>Connect with us</h4>
                <div class="br"></div>
                <form id="contact-form" method="post" to="./sendmail.php">
                  <div class="form-group name">
                    <label for="form_name"></label>
                    <input
                      class="form-control name"
                      type="text"
                      id="name"
                      name="name"
                      aria-describedby="name"
                      placeholder="Name"
                      data-error="Valid name is required."
                      required=""
                    />
                  </div>
                  <div class="form-group phone">
                    <label for="form_mail"></label>
                    <input
                      class="form-control email"
                      type="mail"
                      id="email"
                      name="email"
                      aria-describedby="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div class="form-group message">
                    <label for="form_message"></label>
                    <textarea
                      class="form-control messagearea"
                      id="messagearea"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="text-center" id="send-message">
                    <button
                      class="btn_send_mail float-left"
                      type="button"
                      id="send-mail"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default FooterComponent;
