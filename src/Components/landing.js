import React from 'react';


export default class LandingView extends React.Component {

    render() {
        return (
            <div className="landingContainer">
                <nav>
                    <ul className="list">
                        <li>Preise</li>
                        <li>Kontakt</li>
                        <li>Über</li>
                    </ul>
                </nav>
                <div className="landingTable">
                    <div className="landingCell">
                        <img id="takisLogo" src={require("../img/takis_logo.svg")} alt="Logo" />
                        <h1>GRIECHISCHES OLIVENÖL</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>


            </div>
        )
    };

}