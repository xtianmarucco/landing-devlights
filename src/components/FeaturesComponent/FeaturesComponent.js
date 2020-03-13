import React from "react";
import "./features.css";
import ok from "./ok.png";
import pig from "./pig.png";
import graphics from "./graphics.png";

class FeaturesComponent extends React.Component {
  render() {
    return (
      <features id="features" className="row">
        <div className="container">
          <div className="features-container container">
            <div className="col-md-4 col-xs-12 features-info">
              <div className="img-container">
                <img src={ok} alt="ok" />
              </div>

              <hr class="rounded"></hr>

              <h5>Feature1</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis dignissimos qui quidem? ue similique, omnis accusamus
                repellat.
              </p>
            </div>

            <div className="col-md-4 col-xs-12 features-info">
              <div className="img-container">
                <img src={pig} alt="pig" />
              </div>
              <hr class="rounded"></hr>
              <h5>Feature2</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis dignissimos qui quidem? ue similique, omnis accusamus
                repellat.
              </p>
            </div>

            <div className="col-md-4 col-xs-12 features-info">
              <div className="img-container">
                <img src={graphics} alt="graphics" />
              </div>
              <hr class="rounded"></hr>
              <h5>Feature3</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis dignissimos qui quidem? ue similique, omnis accusamus
                repellat.
              </p>
            </div>
          </div>
        </div>
      </features>
    );
  }
}

export default FeaturesComponent;
