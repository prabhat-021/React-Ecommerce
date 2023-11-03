// import styled from "styled-components";
import HeroSection from "../Component/HeroSection";
// import "./home.css";
import Trusted from "../Component/Trusted";
import Services from "../Component/Services";
import FeatureProducts from "../Component/FeatureProducts";

export default function Home(){
    return ( 
        <>
       <HeroSection />
       <FeatureProducts />
       <Services />
       <Trusted />
       </>
    );
}
