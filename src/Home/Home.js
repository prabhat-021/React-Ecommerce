import styled from "styled-components";
import "./home.css";

export default function Home(){
    return (
        <Wrapper className="test">Home
        </Wrapper>
    );
}

const Wrapper =styled.section`
    background-color: ${({theme}) => theme.colors.bg};
`;