
import React from 'react';

import './slider-section.css';
import client1 from "./client-1.png";
import client2 from "./client-2.png";
import client3 from "./client-3.png";
import client10 from "./client-10.png";
import client21 from "./client-21.png";
// import client22 from "./client-22.png";

class SliderSection extends React.Component {



    render() {


        return (
            <section id="slider-section" className="slider-section">
                <div className="container">

                    <div className="title-container">
                        <div className="title-clients "> <h3>Clients</h3> </div>
                    </div>


                </div>
                <div className="row clients-section">


                    <div className="col-lg-3 col-md-3  col-sm-12 ">
                        <div className="client-logo">
                            <img className="img-fluid" src={client1} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3  col-sm-12 ">
                        <div className="client-logo">
                            <img className="img-fluid" src={client2} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3  col-sm-12 ">
                        <div className="client-logo">
                            <img className="img-fluid" src={client3} alt="logo" />

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 ">
                        <div className="client-logo">
                            <img className="img-fluid" src={client10} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3  col-sm-12 " >
                        <div className="client-logo"  >
                            <img className="img-fluid" src={client21} alt="logo" />
                        </div>
                    </div>

                    <div>



                    </div>



                </div>















            </section >

        )

    };

}

export default SliderSection;