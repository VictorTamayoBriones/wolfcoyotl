import { AboutSection, Information, Image, LearnMore } from "./style"
import card1 from '../../images/card-1.jpg';
import spotify from '../../images/brand-spotify.svg';
import insta from '../../images/brand-instagram.svg';
import facebook from '../../images/brand-facebook.svg';

export const About = () =>{
    return(
        <AboutSection>
            <Information>
                <h2>New album is out now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ad veniam dolorem maiores voluptatum enim sint distinctio praesentium aliquam delectus.</p>
                <LearnMore>
                    <button>Learn more</button>
                    <img src={spotify} alt="logo spotify" title="go to spotify" />
                    <img src={insta} alt="logo insta" title="go to instagram" />
                    <img src={facebook} alt="logo facebook" title="go to facebook" />
                </LearnMore>
            </Information>
            <Image>
                <img src={card1} alt="santiago" />
            </Image>
        </AboutSection>
    )
}