import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Opt,
    Options,
    QtnCount,
    Qtn,
    Wrapper,
    Req,
    Ans, 
    Button,
    ButtonWrap,
    Result,
    ResultText
} from './QAstyles.js';
import questions from "./Questions.js";

export default function QtnAnswer () {
    // Handles the visibility of the questions
    const [visible, setVisible] = useState(1)

    //Replaces the current question with the next question
    const [currentQtn, setCurrentQtn] = useState(0)

    //Shows the result of the test
    const [showResult, setShowResult] = useState(false)

    // Handle the Next button once clicked
    const handleClick = (correctAns) => {
        if ((correctAns == "introvert") > 3) {
            setShowResult("Introvert")
        }else if ((correctAns == "extrovert") > 3){
            setShowResult("Extrovert")
        }else {
            setShowResult("Ambivert") 
        }

        const nxtQuestion = currentQtn + 1;
            setCurrentQtn(nxtQuestion);
        if (nxtQuestion < questions.length){
            setCurrentQtn(nxtQuestion)
            }else{
                alert ("You've come to the end of the Test");
            }
    }

    return (
        <>
            {showResult ? (
                <Result>
                    <ResultText>You are an {showResult}!</ResultText>
                    <img src="https://n.foxdsgn.com/sterling-3/wp-content/uploads/2020/12/7-2.png" alt="Result" />
                </Result>
                )
                :
                (
                <>
                    {questions.slice(0, visible).map((test, idx) => (
                        <Wrapper key={idx}>
                            <QtnCount>Question {test.id}/{questions.length}</QtnCount>
                            <Qtn>{questions[currentQtn].qtnText}</Qtn>
                            <Req>All questions are required</Req>

                            {questions[currentQtn].Options.map((options, idx) => (
                                <Options key={idx}>
                                    <Opt>{options.opt}</Opt>
                                    <Ans>{options.ans}</Ans>
                                </Options>
                            ))}
                            <ButtonWrap>
                                <Button
                                    onClick={handleClick}
                                >
                                    Next question
                                </Button>
                            </ButtonWrap>
                        </Wrapper>
                    ))}
                </> 
            )}
        </>
    )
}