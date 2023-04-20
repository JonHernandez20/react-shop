import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "../containers/login";
import Layout from "../containers/layout";
import Recovery from "../containers/RecoveryPassword";
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route exact path="/" element={ <Home/> } />
                    <Route exact path="/login" element={ <Login/> } />
                    <Route exact path="/login" element={ <Recovery/> } />
                    <Route element={ <NotFound /> } />
                </Layout>
            </Routes>
        </BrowserRouter>
    )
}

export default App;