// import { useState, useEffect } from "react";
import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ListProductsComponent from "../components/ListProductsComponent";

const Home = () => {

    return(
        <div className="HomeComponent">
            <div>
                <HeaderComponent/>
                <ListProductsComponent/>
                <FooterComponent/>
            </div>
        </div>
    );
}

export default Home; 