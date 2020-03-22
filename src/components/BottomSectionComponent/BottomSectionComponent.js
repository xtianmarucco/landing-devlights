import React from 'react';
import './bottomsection.css';

class BottomSectionComponent extends React.Component {

    render() {

        return (
            <section id="nearshore-section" className="row">

                <div className="container bottom-section">
                    <div className="container section-title">
                        <h1>The Selection process</h1>
                        <br></br>
                    </div>
                    <div className="info-section container col-md-10 text-center">
                        <div className="info-card">
                            <div className="col-md-2 number-container "> <h1 className="number">1</h1> </div> <div className="col-md-7 card-text "> <div><h3>Recruiting</h3></div> <div><p>We select assets according to your ideal candidate profile. Tell us what you need related to technologies, location, attitude, interpersonal habilities and we will find the right candidate for you.</p></div></div>
                        </div>
                        <div className="info-card">
                            <div className="col-md-2 number-container "> <h1 className="number">2</h1> </div> <div className="col-md-7 card-text "> <div><h3>Selection</h3></div> <div><p>We help setting things up for you. based on your requirements, we will present you, possible candidates and relevant information about them so you can get to know them and make the right move.
</p></div></div>
                        </div>
                        <div className="info-card">
                            <div className="col-md-2 number-container "> <h1 className="number">3</h1> </div> <div className="col-md-7 card-text "> <div><h3>Hiring </h3></div> <div><p>Once your ideal candidate is selected, we take care of the hiring process and the required formalities so the employee is recruited by us and hired by you after that your new asset is ready to join your team and start working. </p></div></div>
                        </div>



                    </div>
                </div>


            </section>

        )

    };

}

export default BottomSectionComponent;