import React from "react";
import "./HeaderComponent.css";
import logo from "./logo-white.png";

class HeaderComponent extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="logo-container container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="container">

          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 header-section">
              <div className="col-xs-12 col-md-7  info-header">
                <h1> Devlights' nearshore software development services</h1>

                <p>
                  <strong> We make things happen here at Devlights. </strong>
                  Our outsourcing solutions provide clients access to a vast pool of talent.
                  <br />
                  Staffing the talents to build a team is essential for the success of any business, but to be efficient it requires devoting significant resources to the process.
                  <br />
                  <br />

                  However, sometimes the budget or time frames are tight, or the company might simply need a full-time remote talent to do a specific job.
                  <br />
                  In this case, <strong>staffing-as-a-service </strong>  is the way to go in such a case and IT DEVLIGHTS is capable of providing highly-skilled specialists for both
                  <br />
                  short-term and long-term IT staffing projects <strong>built to your specification and for a fraction of the cost
                  </strong>
                </p>

              </div>
              <div className="col-xl-5 col-lg-5 col-md-5  col-xs-12 form-container">
                <h3> Need more information?
                <br />
                 Let's get in touch</h3>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 form_email">
                  <div className="br"></div>
                  <form id="contact-form" method="post" to="./sendmail.php">
                    <div className="form-group name">
                      <label for="form_name"></label>
                      <input
                        className="form-control name"
                        type="text"
                        id="name"
                        name="name"
                        aria-describedby="name"
                        placeholder="Name"
                        data-error="Valid name is required."
                        required=""
                      />
                    </div>
                    <div className="form-group phone">
                      <label for="form_mail"></label>
                      <input
                        class="form-control email"
                        type="phone"
                        id="phone"
                        name="email"
                        aria-describedby="email"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="form-group email">
                      <label for="form_mail"></label>
                      <input
                        className="form-control email"
                        type="mail"
                        id="email"
                        name="email"
                        aria-describedby="email"
                        placeholder="E-mail"
                      />
                    </div>

                    <div className="text-center" id="send-message">
                      <button
                        className="btn_send_mail float-left "
                        type="button"
                        id="send-mail"
                      >
                        Send information
                  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>



          </div>
        </div>


      </section>
    );
  }
}

export default HeaderComponent;
