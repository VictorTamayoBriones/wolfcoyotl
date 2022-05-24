import { MainContainer } from "./components/Container"
import { Home } from "./pages/Home"
import { Header } from './components/Header';
import { About } from "./pages/About";
import { RecentNews } from "./pages/News";
import { Music } from "./pages/Music";
import { Footer } from "./components/Foother";

function App() {

  return (
    <>
      <Header/>
      <MainContainer>
        <Home/>
        <About/>
        <RecentNews/>
        <Music/>
        <Footer/>
      </MainContainer>
    </>
  )
}

export default App
