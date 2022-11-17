// import styled from "styled-components";
import HeroSection from "../Component/HeroSection";
import "./home.css";
import Trusted from "../Component/Trusted";
import Services from "../Component/Services";

export default function Home(){
    return ( 
        <>
       <HeroSection />
       <Services />
       <Trusted />
       </>
    );
}
