import React from "react";
import { Link } from "react-router-dom";
import {Button,
    Header,
    InnerBody,
    BodyText
} from "../../pages/Home/HomeStyles";
import image from "../../assets/049-choices-colour.svg"

export default function HomeBody () {

    return (
            <>
                <img src={image} alt="Choice image" className="choice"/>
                <BodyText>
                Take our Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do.
                   Find out more about who you are and your strengths. 
                </BodyText>
                <Link to="/Test" style={{display: "grid"}}><Button>Start test</Button></Link>
                <h4 className="align-center">Only takes 2 minutes</h4>
            </>
    )
}