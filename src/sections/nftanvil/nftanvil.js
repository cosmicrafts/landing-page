import { Col, Container, Image, Row, Button } from "react-bootstrap";
import BackGround from "../../resources/nftanvil/nftanvil_background.png";
import Goblin from "../../resources/nftanvil/Goblin_ship.png";
import Hammer from "../../resources/nftanvil/Hammer_ship.png";
import NFTAnvilLogo from "../../assets/images/logo.svg";
import NFTAnvilLink from "../../resources/nftanvil/marketplace_btn.png";
import "../../css/nftanvil.css";

export default function NFTAnvil()
{
    return(
        <Container className="BackGround" fluid style={{backgroundImage: `url(${BackGround})`}}>
            <Row className="justify-content-center text-center align-items-center">
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    <Image className="ships" src={Hammer} alt="left ship"/>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4} xl={4} xxl={4}>
                    <Image className="" id="nftanvil_icon" src={NFTAnvilLogo} alt="NFTAnvil logo"/>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    <Image className="ships" src={Goblin} alt="right ship"/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={{ span: 6}} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 4 }}>
                    <p className="text-justify">
                        <span className="txt-strong">We've partnered with ENTREPOT to </span>
                        deliver the ultimate decentralized marketplace and trade your assets on the 
                        <span className="txt-strong"> Internet Computer</span>
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col>
                    <Button href="https://entrepot.app/marketplace/cosmicrafts" target="_blank" id="nftanvil_btn" style={{backgroundImage: `url(${NFTAnvilLink})`}}/>
                </Col>
            </Row>
        </Container>
    );
}