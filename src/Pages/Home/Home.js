import React from 'react';
import ReactDOM from "react-dom";
import {Switch,Route} from 'react-router-dom';
import News from '../../Components/News/news';
import Header from '../../Components/Header/Header';
import reportWebVitals from "./reportWebVitals";
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <News/>
        </div>
    )
    
}
export default Home;