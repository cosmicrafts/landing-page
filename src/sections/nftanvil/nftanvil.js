import { Button } from "bootstrap";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function NFTAnvil()
{
    return(
        <Container className="m-1">
            <Row className="justify-content-md-center text-center">
                <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                    <Image/>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                    <Image/>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                    <Image/>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-justify">
                <Col xs={12} sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }} xxl={{ span: 6, offset: 3 }}>
                    <p>
                        <strong>We've partnered with NFT Anvil to</strong>
                        deliver the ultimate decentralized marketplace and trade your assets on the 
                        <strong>Internet Computer</strong>
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-center">
                <Col>
                </Col>
            </Row>
        </Container>
    );
}