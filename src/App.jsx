import { MainContainer } from "./components/Container"
import { Home } from "./pages/Home"
import { Header } from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <MainContainer>
        <Home/>
      </MainContainer>
    </>
  )
}

export default App
