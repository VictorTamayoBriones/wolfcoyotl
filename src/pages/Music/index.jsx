import { CardMusic, CardMusicBody, CardMusicImage } from "../../components/Card"
import { Releases } from "./style"
import palomazo from '../../images/palomazo.jpg';
import { useNavigate } from 'react-router-dom';

export const Music = () =>{

    const navigate = useNavigate();

    const redirecTo = link => window.open(link)

    return(
        <>
            <h3>Other releases</h3>
            <Releases>
                <CardMusic onClick={ () => redirecTo('https://open.spotify.com/track/5p7FZ9fDPb4ZdSI5SD5Sdb?si=70d3dca650a14d1c') } >
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>

                <CardMusic onClick={ () => redirecTo('https://open.spotify.com/track/1r0qskqqzpX4mf5Hgr5xwN?si=d5023a192b014cca') } >
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>

                <CardMusic onClick={ ()=> redirecTo('https://open.spotify.com/track/3dP60bpBkcjSyaUJNzZMaV?si=34e48ff7c7f841d9') } >
                    <CardMusicImage>
                        <img src={palomazo} alt="" />
                    </CardMusicImage>
                    <CardMusicBody>
                        <h5>Ear max</h5>
                        <span>Single</span>
                    </CardMusicBody>
                </CardMusic>

                <CardMusic onClick={ ()=> redirecTo('https://open.spotify.com/track/333F0xW4PhEySeBEBLHPzn?si=42233ced322e4054') } >
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