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
                <h2>Take our Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do.</h2>
                
            </Header>
            <img src={image} alt="Choice image" className="image"/>
            <InnerBody>
                <p>
                    Take this free Personality Test and find out more about who you are and your strengths. 
                    Be yourself and answer honestly to find out your personality type.
                    Your personality type influences many areas of your life, this is valuable information for choosing a career. 
                    and you can grow into the person you want to be with your optional Premium Profile.
                </p>
                <Link to="/Test" style={{display: "grid"}}><Button>Start test</Button></Link>
                <h4>Only takes 2 minutes</h4>
            </InnerBody>
            
        </>
    )
}