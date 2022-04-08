import React, { useState } from "react";
import { Num,
    Options,
    QtnCount,
    Qtn,
    Wrapper,
    Req,
    Ans, 
    Button,
    ButtonWrap,
    Result,
    ResultText,
    Text
} from './QAstyles.js';
import questions from "./Questions.js";
import image from "../../assets/049-choices-colour.svg"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    // Result Text
    const [resultText, setResultText] = useState('');

    const handleOptions = (correctAns) => {
        setCurrentOption(correctAns)
    }

    // Handle the Next button once clicked
    
    const handleClick = () => {
        if (currentOption === ""){
            toast("Please kindly choose an option to proceed!");
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

            // Result
            const intro = finalOption.length - extro.length 
                if (intro > extro.length){
                    setShowResult('Introvert');
                    setResultText("An introvert is a person with qualities of a personality type known as introversion, which means that they feel more comfortable focusing on their inner thoughts and ideas, rather than what's happening externally. They enjoy spending time with just one or two people, rather than large groups or crowds.")
                }else {
                    setShowResult('Extrovert');
                    setResultText("The definition of an extrovert is someone who is very outgoing and engaged with people. An example of an extrovert is someone at a party who chats easily with everyone.")
                }
        }
    }

    return (
        <>
            {showResult ? (
                <Result>
                    <ResultText>You are an {showResult}!</ResultText>
                    <Text>{resultText}</Text>
                    <img src={image} alt="Result" style={{width: "18rem", margin: "2rem auto"}} />
                    <Link to="/" style={{display: "grid"}}><Button>Go to home</Button></Link>
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
                                    <Num id="num">{options.opt}</Num>
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
             <ToastContainer />
        </>
    )
}