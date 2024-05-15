import { GitHub } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./styles.css"

export default function Footer() {
    return (
        <footer>
            <div id="foot-grid">
                <div className="foot-social">
                    <h1 className="foot-list-h1">Follow Me</h1>
                    <ul className="icon-list">
                        <li className="icon-list-3"><LinkedInIcon style={{ fontSize: "2.4rem", }} /><a className="icon-list-1" href="https://www.linkedin.com/in/prabhatsahrawat/"> LinkedIn</a></li>
                        <li className="icon-list-3"><GitHub style={{ fontSize: "2.4rem", }} /><a className="icon-list-1" href="https://github.com/prabhat-021"> GitHub</a></li>
                        <li className="icon-list-3"><TwitterIcon style={{ fontSize: "2.4rem", }} /><a className="icon-list-1" href="https://twitter.com/prabhat__021"> Twitter</a></li>
                        <li className="icon-list-3"><InstagramIcon style={{ fontSize: "2.4rem", }} /><a className="icon-list-1" href="https://instagram.com/prabhat_021?igshid=YmMyMTA2M2Y="> Instagram</a></li>
                    </ul>
                </div>
                <div className="foot-link">
                    <h1 className="foot-list-h1">NavBar Links</h1>
                    <ul className="icon-list">
                        <li className="icon-list-2"><Link className="icon-list-1" to="/">➢ Home </Link></li>
                        <li className="icon-list-2"><Link className="icon-list-1" to="/about">➢ About </Link></li>
                        <li className="icon-list-2"><Link className="icon-list-1" to="/product">➢ Products </Link></li>
                        <li className="icon-list-2"><Link className="icon-list-1" to="/contact">➢ Contact</Link></li>
                    </ul>
                </div>
                <div className="foot-services">
                    <h1 className="foot-list-h1">Explore Products</h1>
                    <ul className="icon-list">
                        <li className="icon-list-1 services-ls">➢ Electronics </li>
                        <li className="icon-list-1 services-ls">➢ Mobile Phones </li>
                        <li className="icon-list-1 services-ls">➢ Fashion  </li>
                        <li className="icon-list-1 services-ls">➢ Tvs, Laptops </li>
                        <li className="icon-list-1 services-ls">➢ Beauty & Grooming </li>
                        <li className="icon-list-1 services-ls">➢ Sports & Fitness</li>
                    </ul>
                </div>
                <div className="foot-question">
                    <h1 className="foot-list-h1">Have a Question ?</h1>
                    <div className="question"><LocationOnIcon id="question-icon" /> Kiet Group Of Institution,Gaziabadh,India</div>
                    <div className="question"><LocalPhoneIcon id="question-icon" /> +91 9084539879</div>
                    <div className="question"><EmailIcon id="question-icon" /> prabhatsahrawat010203 @gmail.com</div>
                </div>
            </div>
        </footer>
    );
}