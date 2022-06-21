import React, { Suspense } from 'react';

//import About from './sections/about/about';
//import DividerThree from './sections/divider/dividerThree';
//import DividerTwo from './sections/divider/dividerTwo';
//import FirstDivider from './sections/divider/firstDivider';
//import Footer from './sections/footer/footer';
//import Fundrising from './sections/fundrising/fundrising';
//import Future from './sections/future/future';
//import Header from './sections/header/header';
//import Main from './sections/main/main';
//import NFTAnvil from './sections/nftanvil/nftanvil';
//import Roadmap from './sections/roadmap/roadmap';
//import Team from './sections/team/team';

import "./css/font.css";
import "./css/html.css";

const About = React.lazy(() => import('./sections/about/about'));
const DividerThree = React.lazy(() => import('./sections/divider/firstDivider'));
const DividerTwo = React.lazy(() => import('./sections/divider/dividerTwo'));
const FirstDivider = React.lazy(() => import('./sections/divider/firstDivider'));
const Footer = React.lazy(() => import('./sections/footer/footer'));
const Fundrising = React.lazy(() => import('./sections/fundrising/fundrising'));
const Future = React.lazy(() => import('./sections/future/future'));
const Header = React.lazy(() => import('./sections/header/header'));
const Main = React.lazy(() => import('./sections/main/main'));
const NFTAnvil = React.lazy(() => import('./sections/nftanvil/nftanvil'));
const Roadmap = React.lazy(() => import('./sections/roadmap/roadmap'));
const Team = React.lazy(() => import('./sections/team/team'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Main />
        <FirstDivider />
        <About />
        <DividerTwo />
        <NFTAnvil/>
        <Future />
        <DividerThree />
        <Roadmap />
        <Team />
        <Fundrising />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
