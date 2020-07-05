import * as React from "react";
import './home.css';
import Card from "./../../components/card/card"



function Home() {
    return (
            <div className= 'container'>
                <div className= 'intro-container'>
                    <div className = 'intro-letters'> 
                    <div className= 'intro-name'> Hello, my name is David Kim.</div>
                    <div className = 'intro-occupation'> I am an ex-software engineer turned Product manager looking to transition into design.</div>
                    </div>
                    <div className = 'intro-mission'>
                    <div className= 'mission-statements'> I aspire to help create a more equitable world by designing technology for good.</div>
                </div>
                </div>
                <div className= 'home-container'>
                <div className= 'home-left'>
                    <div className= 'home-left-title'>
                        <h1>
                        Design
                        </h1>
                    </div>
                    <div className= 'home-left-card'>
                    <Card title= {'COVID-19 Design Challenge'} content= {'XX'}/>
                    </div>
                </div>
                <div className = 'home-right'>
                <h1>Engineering</h1>

                    <p>
                        Right content
                    </p>
                </div>
                </div>
            </div>
    )
  }

  
  export default Home;

  