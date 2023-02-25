import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './introduce.css';
import Introduce1 from "./introduce1";
import Introduce2 from "./introduce2";
import Introduce3 from "./introduce3";
import Introduce4 from "./introduce4";

function Introduce() {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div className="introduce_main">
            
            <Introduce4/>
            <Introduce1/>
            <Introduce2/>
            <Introduce3/>
            
        </div>
    );
}
export default Introduce;