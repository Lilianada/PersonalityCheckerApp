import { Wrapper,
        Header,
        InnerBody
} from "./BodyStyles";
import React from "react";
import image from "../../assets/049-choices-colour.svg"
import QtnAnswer from "../QuestionsAnswer/QtnAns";

export default function BodyContainer () {
    return (
        <Wrapper>
            <Header>
                <h2>Wanna find out if you're an Extrovert or an Introvert?</h2>
                <h4>Take the Personality Test</h4>
            </Header>
            <img src={image} alt="Choice image" className="image"/>
            <InnerBody>
                <QtnAnswer />
            </InnerBody>
        </Wrapper>
    )
}