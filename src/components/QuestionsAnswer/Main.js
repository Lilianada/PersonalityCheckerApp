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
} from './Styles.js';
import questions from "./Array.js";
import image from "../../assets/049-choices-colour.svg"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QtnAnswer() {
  const [visible, setVisible] = useState(1);
  const [currentQtn, setCurrentQtn] = useState(0);
  const [showResult, setShowResult] = useState(undefined);
  const [finalOption, setFinalOption] = useState([]);
  const [currentOption, setCurrentOption] = useState('');
  const [resultText, setResultText] = useState('');

  // Keep track of the active option for each question
  const [activeOptions, setActiveOptions] = useState(Array(questions.length).fill(null));

  const handleOptions = (correctAns, idx) => {
    setCurrentOption(correctAns);
    const updatedActiveOptions = [...activeOptions];
    updatedActiveOptions[currentQtn] = idx;
    setActiveOptions(updatedActiveOptions);
  };

  const handleClick = () => {
    if (currentOption === '') {
      toast('Please kindly choose an option to proceed!');
      return;
    }

    const nextQuestion = currentQtn + 1;
    setCurrentQtn(nextQuestion);

    if (nextQuestion < questions.length) {
      setFinalOption(finalOption.concat([currentOption]));
      setCurrentOption('');
      setCurrentQtn(nextQuestion);
    } else {
      const extrovert = finalOption.filter((arrayItem) => arrayItem === 'extrovert');

      const introvert = finalOption.length - extrovert.length;
      if (introvert > extrovert.length) {
        setShowResult('Introvert');
        setResultText(
          "An introvert is a person with qualities of a personality type known as introversion, which means that they feel more comfortable focusing on their inner thoughts and ideas, rather than what's happening externally. They enjoy spending time with just one or two people, rather than large groups or crowds."
        );
      } else {
        setShowResult('Extrovert');
        setResultText(
          "The definition of an extrovert is someone who is very outgoing and engaged with people. An example of an extrovert is someone at a party who chats easily with everyone."
        );
      }
    }
  };

  return (
    <>
      {showResult ? (
        <Result>
          <ResultText>You are an {showResult}!</ResultText>
          <Text>{resultText}</Text>
          <img src={image} alt="Result" style={{ width: '18rem', margin: '2rem auto' }} />
          <Link to="/" style={{ display: 'grid' }}>
            <Button>Go to home</Button>
          </Link>
        </Result>
      ) : (
        <>
          {questions.slice(0, visible).map((test, idx) => (
            <Wrapper key={idx}>
              <QtnCount>Question {currentQtn + 1}/{questions.length}</QtnCount>
              <Qtn>{questions[currentQtn].qtnText}</Qtn>
              <Req>All questions are required</Req>

              {questions[currentQtn].Options.map((options, idx) => (
                <Options
                  key={idx}
                  onClick={() => handleOptions(options.correctAns, idx)}
                  isActive={idx === activeOptions[currentQtn]}
                >
                  <Num id="num">{options.opt}</Num>
                  <Ans id="ans">{options.ans}</Ans>
                </Options>
              ))}
              <ButtonWrap>
                <Button onClick={handleClick} data-testid="start-button">
                  Next
                </Button>
              </ButtonWrap>
            </Wrapper>
          ))}
        </>
      )}
      <ToastContainer />
    </>
  );
}
