import React from 'react';
import './bottomsection.css';

class BottomSectionComponent extends React.Component {

    render() {

        return (
            <bottomsection id="nearshore-section" className="row">

                <div className="container bottom-section">
                    <div className="container section-title">
                        <h1>Nearshore software development services</h1>
                        <br></br>
                        <h5>Technical know-how, similar timezone and cultural fit.</h5>
                    </div>
                    <div className="info-section container col-md-10 text-center">
                        <div className="info-card">
                            <div className="col-md-3 number-container "> <h1 className="number">1</h1> </div> <div className="col-md-7 card-text "> <div><h5>Title</h5></div> <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem perspiciatis repellendus odit ipsa harum</p></div></div>
                        </div>
                        <div className="info-card">
                            <div className="col-md-3 number-container "> <h1 className="number">2</h1> </div> <div className="col-md-7 card-text "> <div><h5>Title</h5></div> <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem perspiciatis repellendus odit ipsa harum</p></div></div>
                        </div>
                        <div className="info-card">
                            <div className="col-md-3 number-container "> <h1 className="number">3</h1> </div> <div className="col-md-7 card-text "> <div><h5>Title</h5></div> <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem perspiciatis repellendus odit ipsa harum</p></div></div>
                        </div>



                    </div>
                </div>


            </bottomsection>

        )

    };

}

export default BottomSectionComponent;