import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <div>
            <Header />
            <Table />
            <Footer />
        </div>
    );
}

export default App;