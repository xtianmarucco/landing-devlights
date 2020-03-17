import React from "react";
import "./Footer.css";
import logo from "./logo-white.png";



class FooterComponent extends React.Component {
  render() {
    return (
      <section className="footer" id="footer">
        <div className="footer-title">
          <h2>Contact us</h2>
        </div>

        <section id="contact" >

          <div className="container">
            <div className="row">
              <div className="col-xs-8 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="datos">
                  <div></div>
                  <img className="footer-logo-devlights" src={logo} alt="logo" />

                  <br />
                  <br />



                  <ul className="footer-list-ul">
                    <li>
                      <p className="footer-first.col-p">
                        1355 Bear Mountain Drive Boulder
                        CO 80305
                        United States of America
                    </p>
                      <p className="footer-first.col-p">
                        robert.hughes@devlights.com
                    </p>
                      <p className="footer-first.col-p">
                        +1 (303) 325-3085</p>
                      <p className="footer-first.col-p">
                        contact@devlights.com
                      </p>


                    </li>
                  </ul>
                  <br />
                  <br />

                  <ul className="footer-list-ul">
                    <li>
                      <p className="footer-first.col-p">
                        1250 Junin st, 2nd Floor Corrientes 3400 Argentina
                    </p>
                      <p className="footer-first.col-p">
                        robert.hughes@devlights.com
                    </p>

                      <p className="footer-first.col-p">
                        +54 (0379) 4230003</p>
                      <p className="footer-first.col-p">
                        contacto@devlights.com
                      </p>


                    </li>
                    <br />
                    <br />
                  </ul>


                  <div class="clutch-widget logo_clutch" data-url="https://widget.clutch.co" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="414104">
                    <iframe id="iframe-0.8300754355846867" src="https://widget.clutch.co/widgets/get/2/darkbg?ref_domain=devlights.com&amp;uid=414104"></iframe>
                  </div>
                </div>
              </div>
              <div className=" col-xs-12 col-sm-12 col-md-3">
                <div class="footer-menu-links-title"><h4>LINKS</h4>
                </div>
                <div class="footer-menu-links-items">
                  <ul class="footer_list_ul_links">
                    <li class="links-menu-li-menu"><a href="http://devlights.com#about">About us</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#careers">Join the team</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#services">Services</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#clients">Clients</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#intro">Home</a></li>
                    <li class="links-menu-li-menu"><a href="http://devlights.com#portfolio">Portfolio</a></li></ul>
                </div>



              </div>

              <div className=""  ></div>








            </div>

          </div>


        </section>

      </section>
    );
  }
}

export default FooterComponent;
