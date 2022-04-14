import { Hero } from "./style"
import { Parallax } from 'react-scroll-parallax';

export const Home = () =>{
    return(
        <Hero>
            <Parallax speed={-21} style={{ display: 'flex' }}>
                <h1>w</h1>
                <h1>o</h1>
                <h1>l</h1>
                <h1>f</h1>
                <h1>c</h1>
                <h1>o</h1>
                <h1>y</h1>
                <h1>o</h1>
                <h1>t</h1>
                <h1>l</h1>
            </Parallax>
        </Hero>
    )
}