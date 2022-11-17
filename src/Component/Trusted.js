// import React from 'react';
import styled from 'styled-components';
import img1 from "../Assets/image/image2.png";
import img2 from "../Assets/image/image3.png";
import img3 from "../Assets/image/image4.png";
import img4 from "../Assets/image/image6.png";
import img5 from "../Assets/image/image8.png";

export default function Trusted() {
    return (
        <Wrapper className='brand-section'>
            <h3>Trusted by 1000+ Companies</h3>
            <div className='brand-section-slider'>
                <div className='slide'>
                    <img src={img1} alt="image-1" />
                </div>
                <div className='slide'>
                    <img src={img2} alt="image-2" />
                </div>
                <div className='slide'>
                    <img src={img3} alt="image-3" />
                </div>
                <div className='slide'>
                    <img src={img4} alt="image-4" />
                </div>
                <div className='slide'>
                    <img src={img5} alt="image-5" />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
    margin: 0 20px 0 20px;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;