import { AboutSection, Information, Image } from "./style"
import card1 from '../../images/card-1.jpg';

export const About = () =>{
    return(
        <AboutSection>
            <Information>
                <h2>New album is out now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ad veniam dolorem maiores voluptatum enim sint distinctio praesentium aliquam delectus.</p>
                <button>Learn more</button>
            </Information>
            <Image>
                <img src={card1} alt="santiago" />
            </Image>
        </AboutSection>
    )
}