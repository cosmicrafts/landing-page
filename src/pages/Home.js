import React from 'react';

const About = React.lazy(() => import('../sections/about/about'));
const DividerThree = React.lazy(() => import('../sections/divider/dividerThree'));
const DividerTwo = React.lazy(() => import('../sections/divider/dividerTwo'));
const FirstDivider = React.lazy(() => import('../sections/divider/firstDivider'));
const Fundrising = React.lazy(() => import('../sections/fundrising/fundrising'));
const Future = React.lazy(() => import('../sections/future/future'));
const Main = React.lazy(() => import('../sections/main/main'));
const NFTAnvil = React.lazy(() => import('../sections/nftanvil/nftanvil'));
const Roadmap = React.lazy(() => import('../sections/roadmap/roadmap'));
const Team = React.lazy(() => import('../sections/team/team'));

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
