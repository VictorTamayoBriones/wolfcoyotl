import { Card, CardBody, CardImage } from "../../components/Card"
import { News } from "./style"
import card2 from '../../images/card-2.jpg';

export const RecentNews = ()=>{
    return(
        <>
            <h3>Recent News</h3>
            <News>
                <Card>
                    <CardImage>
                        <img src={card2} alt="" />
                    </CardImage>
                    <CardBody>
                        <h4>This is the title about the card</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis harum id ipsum natus! Deserunt praesentium veniam rem voluptas tempore cupiditate itaque asperiores sed ab eos.</p>
                        <span>14/04/2022</span>
                    </CardBody>
                </Card>
                <Card>
                    <CardImage>
                        <img src={card2} alt="" />
                    </CardImage>
                    <CardBody>
                        <h4>This is the title about the card</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis harum id ipsum natus! Deserunt praesentium veniam rem voluptas tempore cupiditate itaque asperiores sed ab eos.</p>
                        <span>14/04/2022</span>
                    </CardBody>
                </Card>
            </News>
        </>
    )
}