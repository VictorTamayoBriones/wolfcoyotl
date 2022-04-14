import { MainContainer } from "./components/Container"
import { Home } from "./pages/Home"
import { Header } from './components/Header';
import { About } from "./pages/About";
import { RecentNews } from "./pages/News";
import { Music } from "./pages/Music";

function App() {

  return (
    <>
      <Header/>
      <MainContainer>
        <Home/>
        <About/>
        <RecentNews/>
        <Music/>
      </MainContainer>
    </>
  )
}

export default App
