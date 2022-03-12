import { Col, Row } from 'react-bootstrap';
import Explore from '../components/home/Explore';
import Default from './layout/Default';

const Home = () => {

    return (
        <Default>
            <Row className="loginPage">
                <Col md="7">
                    <Explore />
                </Col>
                <Col md="5">
                </Col>
            </Row>
        </Default>
    )
}

export default Home;