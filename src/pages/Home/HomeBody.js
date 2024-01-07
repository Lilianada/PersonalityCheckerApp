import React from "react";
import { Link } from "react-router-dom";
import {Button,
    Header,
    InnerBody
} from "../../pages/Home/HomeStyles";

export default function HomeBody () {

    return (
            <InnerBody>
                <p>
                    Take this free Personality Test and find out more about who you are and your strengths. 
                </p>
                <Link to="/Test" style={{display: "grid"}}><Button>Start test</Button></Link>
                <h4>Only takes 2 minutes</h4>
            </InnerBody>
    )
}