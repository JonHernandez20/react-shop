import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "../containers/login";
import Layout from "../containers/layout";
import Recovery from "../containers/RecoveryPassword";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={ <Home/> } />
                    <Route exact path="/login" element={ <Login/> } />
                    <Route exact path="/recovery" element={ <Recovery/> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;