import React from "react";
import image from "../../assets/049-choices-colour.svg"
import { Link } from "react-router-dom";
import {Button,
    Header,
    InnerBody
} from "../../pages/Home/HomeStyles";

export default function HomeBody () {

    return (
        <>
            <Header>
                <h2>Wanna find out if you're an Extrovert or an Introvert?</h2>
                <h4>Take the Personality Test</h4>
            </Header>
            <img src={image} alt="Choice image" className="image"/>
            <InnerBody>
                <p>
                    A lot of young adults want to find out their Personality, 
                    you should too. Click the button to start now.
                    Lorem ipsum Lorem loremmmmmm shhbc ncbabhc anac.
                </p>
                <Link to="/Test" style={{display: "grid"}}><Button>Start test</Button></Link>
            </InnerBody>
            
        </>
    )
}