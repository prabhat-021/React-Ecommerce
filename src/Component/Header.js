import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/image/logo.png";
import Navbar from "./Navbar";


export default function Header() {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <Navbar />
        </MainHeader>
    );
}

const MainHeader = styled.section`
    display: flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    background-color:${({ theme }) => theme.colors.bg};
    height:10rem;
    padding: 0 4.8rem;
`;