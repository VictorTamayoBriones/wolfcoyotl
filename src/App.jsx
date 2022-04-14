import { MainContainer } from "./components/Container"
import { Home } from "./pages/Home"
import { Header } from './components/Header';
import { About } from "./pages/About";

function App() {

  return (
    <>
      <Header/>
      <MainContainer>
        <Home/>
        <About/>
      </MainContainer>
    </>
  )
}

export default App
