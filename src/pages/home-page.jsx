import Advantages from '../components/Advantages';
import Creteria from '../components/Creteria';
import Footer from '../components/Footer';
import Header from '../components/header';
import Intro from '../components/Intro';
import News from '../components/News';
import Schedule from '../components/Schedule';
import { StyledEngineProvider } from '@mui/material';
import Program from '../components/Program';
import Organization from '../components/Organizators';

const Home = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        <Intro />
        <Schedule />
        <Advantages />
        <Program />
        <Creteria />
        {/* <Mentors /> */}
        <Organization />
        <News />
        <Footer />
      </StyledEngineProvider>
    </>
  );
};

export default Home;
