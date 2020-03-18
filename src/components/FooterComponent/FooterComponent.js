import React from "react";
import "./Footer.css";
import logo from "./logo-white.png";
import marker from "./marker.png";
import envelope from "./envelope.png";
import facebook from "./facebook.png";
import phone from "./phone.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";

// import { facebookSquare } from "react-icons/fa";
// import { phone } from "react-icons/fa";
// import { linkedinSquare } from "react-icons/fa/";
// import { twitterSquare } from "react-icons/fa/";
// import { mapMarker } from "react-icons/fa/";
// import { envelopeO } from "react-icons/fa/";








class FooterComponent extends React.Component {
  render() {
    return (
      <section className="footer" id="footer">
        <div className="footer-title">
          <h2>Contact us </h2>
        </div>
        <section id="contact" >
          <div className="container">

            <div className="row">
              <div className="col-xs-8 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-info">
                <div className="datos">
                  <img className="footer-logo-devlights" src={logo} alt="logo" />

                  <br />
                  <br />


                  <ul className="footer-list-ul">
                    <li>
                      <div className="info-list"> <img src={marker} alt="logo" />  <p className="footer-first.col-p">
                        1355 Bear Mountain Drive
                        <br />

                        Boulder CO
                        80305
                        <br />

                        United States of America
                    </p></div>
                      <div className="info-list"> <img src={envelope} alt="logo" /> <p className="footer-first.col-p">
                        robert.hughes@devlights.com
                    </p></div>
                      <div className="info-list"> <img src={phone} alt="logo" />
                        <p className="footer-first.col-p">
                          +1 (303) 325-3085</p></div>

                      <div className="info-list"> <img src={envelope} alt="logo" /> <p className="footer-first.col-p">
                        contact@devlights.com
                    </p></div>



                    </li>
                  </ul>
                  <br />
                  <br />
                  <div> <ul className="footer-list-ul">
                    <li>

                      <div className="info-list"> <img src={marker} alt="logo" />  <p className="footer-first.col-p">
                        1250 Junin st, 2nd Floor <br />
                        Corrientes 3400 <br />
                        Argentina
                    </p></div>
                      <div className="info-list"> <img src={phone} alt="logo" />
                        <p className="footer-first.col-p">
                          +54 (0379) 4230003</p></div>

                      <div className="info-list"> <img src={envelope} alt="logo" /> <p className="footer-first.col-p">
                        contacto@devlights.com
                    </p></div>


                    </li>
                    <br />
                    <br />
                  </ul></div>



                  <div class="clutch-widget logo_clutch" data-url="https://widget.clutch.co" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="414104">
                    <iframe id="iframe-0.8300754355846867" src="https://widget.clutch.co/widgets/get/2/darkbg?ref_domain=devlights.com&amp;uid=414104"></iframe>
                  </div>
                </div>
              </div>
              <div className=" links-box col-xs-12 col-sm-12 col-md-3">
                <div class="footer-menu-links-title"><h4>LINKS</h4>
                </div>
                <div class="footer-menu-links-items">
                  <ul class="footer_list_ul_links">
                    <li class="links-menu-li-menu"><a href="http://devlights.com#about">About us</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#careers">Join the team</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#services">Services</a></li>
                    <li className="links-menu-li-menu"><a href="http://devlights.com#clients">Clients</a></li>
                    <li className="links-menu-li-menu"><a href="http://devlights.com#intro">Home</a></li>
                    <li className="links-menu-li-menu"><a href="http://devlights.com#portfolio">Portfolio</a></li></ul>
                </div>
                <div className="social_icons">
                  <a href="https://www.facebook.com/devlightsok/" alt="" > <img src={facebook} alt="logo" /> </a>
                  <a href="https://twitter.com/devlightsok"> <img src={twitter} alt="logo" /> </a>
                  <a href="https://www.linkedin.com/company/devlights/"><img src={linkedin} alt="logo" /></a>
                </div>



              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 form_email"  >
                <h4>Connect with us</h4>
                <form id="contact-form" method="post" to="./sendmail.php">
                  <div class="form-group name"><label for="form_name"></label>
                    <input class="form-control name" type="text" id="name" name="name" aria-describedby="name" placeholder="Name" data-error="Valid name is required." required="" />
                  </div>
                  <div class="form-group phone"><label for="form_mail"></label><input class="form-control email" type="mail" id="email" name="email" aria-describedby="email" placeholder="E-mail" />
                  </div>
                  <div class="form-group message"><label for="form_message"></label>
                    <textarea class="form-control messagearea" id="messagearea" name="message" placeholder="Message"></textarea>
                  </div>
                  <div class="text-center" id="send-message"><button class="btn_send_mail float-left" type="button" id="send-mail">Send message</button></div>
                </form>




              </div>








            </div>

          </div>


        </section>

      </section>
    );
  }
}

export default FooterComponent;
