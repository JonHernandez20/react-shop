import React from "react";
import Login from "../containers/login";
import Layout from "../containers/layout";
import '../styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login/>
        </Layout>
    )
}

export default App;