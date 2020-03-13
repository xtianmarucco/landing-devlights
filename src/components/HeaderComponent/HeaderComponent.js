import React from "react";
import "./HeaderComponent.css";
import logo from "./logo-white.png";

class HeaderComponent extends React.Component {
  render() {
    return (
      <header id="header" className="row">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="container">
          <div className="col-xs-12 col-md-8  info-header">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis,
              corporis voluptas mollitia ipsam ducimus et saepe illo natus ab
              dignissimos iste nihil necessitatibus omnis qui quae architecto,
              dicta perspiciatis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis,
              corporis voluptas mollitia ipsam ducimus et saepe illo natus ab
              dignissimos iste nihil necessitatibus omnis qui quae architecto,
              dicta perspiciatis.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4  col-xs-12 form-container">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 form_email">
              <div className="br"></div>
              <form id="contact-form" method="post" to="./sendmail.php">
                <div className="form-group name">
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
                <div className="form-group phone">
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
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
