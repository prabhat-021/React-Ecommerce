import HeroSection from "../Component/HeroSection";
import {useProductContext } from "../context/ProductContext";
// import "./about.css";

export default function About(){
const myName =useProductContext();

    return (
        <>
       <HeroSection />
       </>
    );
}