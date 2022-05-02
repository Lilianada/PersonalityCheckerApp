import React from "react";
import { Route, Routes } from 'react-router-dom';
import FooterSection from '../../components/Footer/Footer';
import HeaderNav from '../../components/Header/Header';
import QtnAnswer from "../../components/QuestionsAnswer/Main";
import { Wrapper} from "../../pages/Home/HomeStyles";
import HomeBody from "./HomeBody";


function Home() {
    return (
        <div className="App bodyWrapper">
            <HeaderNav />
            <Wrapper>
                <Routes>
                    <Route exact path="/" element={<HomeBody/>}/>
                    <Route path="/Test" element={<QtnAnswer/>}/>
                </Routes>
            </Wrapper>
            <FooterSection />
        </div>
    );
}

export default Home;
