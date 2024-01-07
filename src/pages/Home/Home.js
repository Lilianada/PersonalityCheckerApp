import React from "react";
import { Route, Routes } from 'react-router-dom';
import FooterSection from '../../components/Footer/Footer';
import HeaderNav from '../../components/Header/Header';
import QtnAnswer from "../../components/QuestionsAnswer/Main";
import { InnerBody, Wrapper} from "../../pages/Home/HomeStyles";
import HomeBody from "./HomeBody";


function Home() {
    return (
        <div className="App container">
            <HeaderNav />
            <Wrapper>
                <InnerBody>
                <Routes>
                    <Route exact path="/" element={<HomeBody/>}/>
                    <Route path="/Test" element={<QtnAnswer/>}/>
                </Routes>
                </InnerBody>
            </Wrapper>
            <FooterSection />
        </div>
    );
}

export default Home;
