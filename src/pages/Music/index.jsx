import { CardMusic, CardMusicBody, CardMusicImage } from "../../components/Card"
import { Releases } from "./style"
import palomazo from '../../images/palomazo.jpg';

export const Music = () =>{
    return(
        <>
            <h3>Other releases</h3>
            <Releases>
                <CardMusic>
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>
                <CardMusic>
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>
                <CardMusic>
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>
                <CardMusic>
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>
                <CardMusic>
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>
            </Releases>
        </>
    )
}