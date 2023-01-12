import './App.css';

import { Header } from './components/organisms/Header'
import { Main } from './components/atoms/Main';
import { Works } from './components/organisms/Works';
import { Footer } from './components/organisms/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Works />
      </Main>
      <Footer />
    </>
  );
}

export default App;
