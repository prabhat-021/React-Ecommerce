import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get Started</h3>
                        <h3>Talk to us Today</h3>
                    </div>
                    <div>
                        <Button>
                            <NavLink to="/contact">Get Started</NavLink>
                        </Button>
                    </div>
                </div>
            </section>
            <footer>
                <section className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Technical Prabhat</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="footer-subscribe">
                        <form action="#">
                            <input type="email" placeholder="Your-Email" />
                            <input type="submit" value="subscribe" />
                        </form>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <FaYoutube className="icons" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Call Me</h3>
                        <h3>+91 9084539879</h3>
                    </div>
                </section>
                <section className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>@{new Date().getFullYear()} Prabhat. All Rights Reserved</p>
                        <div>
                            <p> PRIVACY POLICY</p>
                            <p>TERMS AND CONDITION</p>
                        </div>
                    </div>

                </section>
            </footer>

        </Wrapper>
    );
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      ${'' /* color:black; */}
      font-size: 2.5rem;
      font-weight:600;
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;