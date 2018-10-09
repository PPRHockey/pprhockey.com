import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom';

// styling imports
import '../LandingPage/LandingPage.css';


class LandingPage extends Component {

    toLogin = () => {
        this.props.history.push('login');
    }

    toRegister = () => {
        this.props.history.push('register');
    }

    constructor(props) {
        super(props)
        this.aboutRef = React.createRef();
    }


    // scrollToAbout = () => {
    //      console.log('in scroll click');
    //     const aboutDomNode = ReactDOM.findDOMNode(this.aboutRef.current);
    //     aboutDomNode.scrollIntoView();

    //      window.scrollTo(0, this.aboutRef.current);
    // }

    render() {
        return (
            <div className="landingPageContainer">
                <div className="nav">
                    <img className="logo"
                        src="https://drive.google.com/uc?export=view&id=1k270ptdyB7SabQnO3HHD1DBytIIBQBtQ"
                        alt="logo"></img>


                    <Link to="/register">
                        Register
                </Link>

                    <Link to="/login">
                        Log In
                </Link>

                    <Link to="/terms">
                        Terms
                </Link>

                    <a>About</a>

                </div>

                <p>Landing Page</p>

                <div className="missionContainer">
                    <h1 className="missionHeader">
                        A Mission Statement A Mission Statement A Mission Statement</h1>
                    <br></br>
                    <h3 className="missionDetail">
                        We do the things. All the things. All the time.
                        We do the things. All the things. All the time.
                    We do the things. All the things. All the time.</h3>
                    <br></br>
                    <h3 className="missionDetail">
                        And we do them well. We do them with gusto. We accomplish them with gravitas.
                    </h3>
                </div>
                <div className="guideContainer">

                    <div className="guideSections">
                        <h1 className="guideHeaders">Build Your Profile</h1>
                        <p>Enter your stats.</p>
                    </div>
                    {/* <br></br> */}
                    <span></span>
                    <div className="guideSections">
                        <h1 className="guideHeaders">Showcase Your Talent</h1>
                        <p>Load a clip of your skills in action.</p>
                    </div>
                    {/* <br></br> */}
                    <span></span>
                    <div className="guideSections">
                        <h1 className="guideHeaders">Get Noticed</h1>
                        <p>Your profile will be accessible to coaches across the country.</p>
                    </div>
                </div>

                <div className="testimonialContainer">

                    <div className="testimonialSections">
                    A testimonial of the greatness achieved by usage of this service.
                    <br></br>
                    An image of a fancy lad will appear above this.
                    </div>

                    <div className="testimonialSections">
                    A testimonial of the greatness achieved by usage of this service.
                    <br></br>
                    An image of a fancy lad will appear above this.
                    </div>

                    <div className="testimonialSections">
                    A testimonial of the greatness achieved by usage of this service.
                    <br></br>
                    An image of a fancy lad will appear above this.
                    </div>

                </div>

                <div className="aboutContainer" id="#aboutNavigate"
                    ref={aboutRef => this.aboutRef = aboutRef}>

                    <div className="bioSections">
                        {/* material avatars go here */}
                        <img></img>
                        <p>A bio. A personal epic of Olympian scale.
                        <br></br>Avatars go right above this.
                        </p>

                    </div>

                    <div className="bioSections">
                        {/* material avatars go here */}
                        <img></img>
                        <p>A bio. A personal epic of Olympian scale.
                        <br></br>Avatars go right above this.
                        </p>


                    </div>

                    <div className="bioSections">
                        {/* material avatars go here */}
                        <img></img>
                        <p>A bio. A personal epic of Olympian scale.<br>
                        </br>Avatars go right above this.</p>
                    </div>

                </div>
                <button className="getStarted" onClick={this.toRegister}>Get started!</button>
                {/* <button onClick={this.toLogin}>Log In</button> */}
            </div >
        );
    };
}

export default LandingPage;