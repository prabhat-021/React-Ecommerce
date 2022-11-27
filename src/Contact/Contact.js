import styled from "styled-components";
import { Button } from "../styles/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function Contact() {
  const { isAuthenticated, user } = useAuth0();
  return <Wrapper>
    <h2>Conatct Page </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873407301582!2d77.49468907402337!3d28.75319637859367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1668681394947!5m2!1sen!2sin"
      width="90%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mpznbnkw" method="post" className="contact-inputs">
          <input name="username" type="text" placeholder="Username" required autoComplete="off" value={isAuthenticated ? user.name : ""} />
          {/* <label for="email">Your Email</label> */}
          <input name="Email" type="email" autoComplete="off" required placeholder="Email" value={isAuthenticated ? user.email : ""} />
          <textarea name="message" cols={30} rows="10" required autoComplete="off" placeholder="Enter Your Message" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
