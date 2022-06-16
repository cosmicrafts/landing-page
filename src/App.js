import About from './sections/about/about';
import DividerTwo from './sections/divider/dividerTwo';
import FirstDivider from './sections/divider/firstDivider';
import Footer from './sections/footer/footer';
import Future from './sections/future/future';
import Header from './sections/header/header';
import Main from './sections/main/main';
import NFTAnvil from './sections/nftanvil/nftanvil';

function App() {
  return (
    <>
      <Header />
      <Main />
      <FirstDivider />
      <About />
      <DividerTwo />
      <NFTAnvil/>
      <Future />
      <Footer />
    </>
  );
}

export default App;
