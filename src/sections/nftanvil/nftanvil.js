import { Col, Container, Image, Row, Button } from "react-bootstrap";
import BackGround from "../../resources/nftanvil/nftanvil_background.png";
import Goblin from "../../resources/nftanvil/Goblin_ship.png";
import Hammer from "../../resources/nftanvil/Hammer_ship.png";
import NFTAnvilLogo from "../../resources/nftanvil/nftanvil_icon.png";
import NFTAnvilLink from "../../resources/nftanvil/marketplace_btn.png";
import "../../css/nftanvil.css";

export default function NFTAnvil()
{
    return(
        <Container className="BackGround" fluid style={{backgroundImage: `url(${BackGround})`}}>
            <Row className="justify-content-md-center text-center align-items-center">
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    <Image className="ships" src={Hammer} alt="left ship"/>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    <Image id="nftanvil_icon" src={NFTAnvilLogo} alt="NFTAnvil logo"/>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    <Image className="ships" src={Goblin} alt="right ship"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={4} sm={4} md={{ span: 6}} lg={{ span: 3 }} xl={{ span: 3 }} xxl={{ span: 3 }}>
                    <p className="text-justify">
                        <strong>We've partnered with NFT Anvil to </strong>
                        deliver the ultimate decentralized marketplace and trade your assets on the 
                        <strong> Internet Computer</strong>
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-center">
                <Col>
                    <Button href="https://nftanvil.com/" id="nftanvil_btn" style={{backgroundImage: `url(${NFTAnvilLink})`}}/>
                </Col>
            </Row>
        </Container>
    );
}