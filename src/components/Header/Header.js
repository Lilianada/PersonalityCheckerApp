import React from "react";
import {Header,
    HeaderName
} from "./HeaderStyles.js"
import {CgGirl} from "react-icons/cg"

export default function HeaderNav () {
    return (
        <Header>
            <HeaderName>PersonalityChecker</HeaderName>
            <div className="Profile">
                <HeaderName><CgGirl style={{marginRight: ".5rem"}}/>By Lilian Okeke</HeaderName>
            </div>
        </Header>
    )
}