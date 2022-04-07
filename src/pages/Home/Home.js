import React from "react";
import FooterSection from '../../components/Footer/Footer';
import HeaderNav from '../../components/Header/Header';
import { Wrapper,
    Header,
    InnerBody
} from "../../pages/Home/HomeStyles";
import image from "../../assets/049-choices-colour.svg"
import { Link } from "react-router-dom";
import { Button } from "../../components/QuestionsAnswer/QAstyles";


function Home() {
  return (
    <div className="App bodyWrapper">
        <HeaderNav />
        <Wrapper>
            <Header>
                    <h2>Wanna find out if you're an Extrovert or an Introvert?</h2>
                    <h4>Take the Personality Test</h4>
                </Header>
                <img src={image} alt="Choice image" className="image"/>
                <InnerBody>
                    <Button><Link to="/QtnAns">Start test</Link></Button>
                </InnerBody>
        </Wrapper>
        <FooterSection />
    </div>
  );
}

export default Home;
