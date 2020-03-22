import React from "react";
import "./features.css";
import ok from "./ok.png";
import pig from "./pig.png";
import graphics from "./graphics.png";

class FeaturesComponent extends React.Component {
  render() {
    return (
      <section id="features" className="row">

          


        <div className="container">
        <div className="container title-section col-md-12  col-sm-12  col-xs-12">
                    <h1>Nearshore software development services</h1>
                    <br></br>
                    <div className="container subtitle-section">  <h6>We can provide and source for every technology available within the market.
                    Whether you require demandware developers, designers, mobile developers or project managers, we will put our best to make sure that your requirements are met and that you find the talent that you need for your team.
                    </h6>
                    </div>



                </div>


          <div className="features-container container">
          <div className="col-md-4 col-xs-12 features-info">
              <div className="img-container">
                <img src={graphics} alt="graphics" />
              </div>
              <div className="separator">  <hr class="rounded"></hr></div>
              <h5>Unleash  your potencial, achieve your goals </h5>
              <p>
                Long-term relationships with clients. This is a core value at Devlights. We strive to create strong relationships and work together with our clients to help them succeed in the long term.
              </p>
            </div>

            <div className="col-md-4 col-xs-12 features-info">
              <div className="img-container">
                <img src={ok} alt="ok" />
              </div>
            <div className="separator">  <hr class="rounded"></hr></div>
            

              <h5> Great cultural fit</h5>
              <p>
                We look for people with the ability to join an existing development team or start one to take charge of a new or existing project.
              </p>
            </div>

            <div className="col-md-4 col-xs-12 features-info">
              <div className="img-container">
                <img src={pig} alt="pig" />
              </div>
              <div className="separator">  <hr class="rounded"></hr></div>              <h5>Outstanding rates, transparency and convenience </h5>
              <p> clear contract terms and conditions, DEVLIGHTS is capable of providing highly-skilled specialists for just a fraction of the cost of local talent.


                

              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturesComponent;
