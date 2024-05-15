import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import img1 from "../Assets/image/shopping2.avif";
import img2 from "../Assets/image/shopping3.avif";


const HeroSection = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data'>
              WELCOME TO
            </p>
            <h1>SHOPIFY</h1>
            <p>Welcome to our premier e-commerce destination, where innovation meets convenience! Explore a world of cutting-edge electronics and essential shopping items curated just for you. From state-of-the-art gadgets to everyday essentials, we're your one-stop shop for all things tech and beyond. Whether you're upgrading your home entertainment system or stocking up on household necessities, our extensive selection guarantees quality and affordability. With seamless navigation and secure transactions, shopping with us is not just easy, but enjoyable. Experience the future of online shopping with our e-commerce platform, where excellence is standard and satisfaction is guaranteed.
            </p>
            <NavLink to="/product">
              <Button>Shop now</Button>
            </NavLink>
          </div>
          <div className='hero-section-image'>
            <figure>
              <img src={img1} alt="hero setion image" className='img-style' />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding:12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 80%;
      background-image:url(${img2});
      ${'' /* background-color: rgba(81, 56, 238, 0.4); */}
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
  }
`;

export default HeroSection;
