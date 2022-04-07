import React from "react";
import {Header,
    HeaderName
} from "./HeaderStyles.js"
import {CgGirl} from "react-icons/cg"

export default function HeaderNav () {
    return (
        <Header>
            <h2 className="logo">PersonalityChecker</h2>
            <div className="Profile">
                <HeaderName><CgGirl style={{marginRight: ".5rem"}}/>Lilian Okeke</HeaderName>
                <h4>Frontend Developer</h4>
            </div>
        </Header>
    )
}