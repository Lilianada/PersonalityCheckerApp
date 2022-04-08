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
    const [visible, setVisible] = useState(1);

    //Replaces the current question with the next question
    const [currentQtn, setCurrentQtn] = useState(0);

    //Shows the result of the test
    const [showResult, setShowResult] = useState(undefined);

    // Handle Options
    const [finalOption, setFinalOption] = useState([]);
    const [currentOption, setCurrentOption] = useState("");

    const handleOptions = (correctAns) => {
        setCurrentOption(correctAns)
    }

    // Handle the Next button once clicked
    const handleClick = () => {
        if (currentOption === ""){
            alert('Choose an option');
            return
        }
        const nxtQuestion = currentQtn + 1;
            setCurrentQtn(nxtQuestion);

        if (nxtQuestion < questions.length){
            setFinalOption(finalOption.concat([currentOption]))
            setCurrentOption('');

        setCurrentQtn(nxtQuestion)
        }else{
            // Returns the option that meets the condition 'extrovert after filtering
            const extro = finalOption.filter( (arrayItem) => { 
                if (arrayItem === 'extrovert'){
                    return arrayItem
                }
            })
            // Re
            const intro = finalOption.length - extro.length 
                if (intro > extro.length){
                    setShowResult('Introvert')
                }else {setShowResult('Extrovert')}
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
                            <QtnCount>Question {currentQtn+1}/{questions.length}</QtnCount>
                            <Qtn>{questions[currentQtn].qtnText}</Qtn>
                            <Req>All questions are required</Req>

                            {questions[currentQtn].Options.map((options, idx) => (
                                <Options key={idx} onClick={()=> handleOptions(options.correctAns)}>
                                    <Opt>{options.opt}</Opt>
                                    <Ans>{options.ans}</Ans>
                                </Options>
                            ))}
                            <ButtonWrap>
                                <Button
                                    onClick={handleClick}
                                >
                                    Next
                                </Button>
                            </ButtonWrap>
                        </Wrapper>
                    ))}
                </> 
            )}
        </>
    )
}