import { Container, Row } from 'react-bootstrap';
import Hero from './Hero';
import Testimonials from './Testimonials';


export default function Home() {
    return (
    <>
    <Container fluid>
        <Row className='mx-2 my-2 py-2 px-2'>
          <Hero/>
        </Row>
        <Row className='mx-2 my-2 py-2 px-2'>
          <Testimonials/>
        </Row>
    </Container>
    </>
    );
}
