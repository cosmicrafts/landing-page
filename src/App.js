import React, { Suspense } from 'react';

import "./css/font.css";
import "./css/html.css";

const About = React.lazy(() => import('./sections/about/about'));
const DividerThree = React.lazy(() => import('./sections/divider/dividerThree'));
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
