import A from '../assets/icons_assets/Mario and Adrian A.jpg';
import B from '../assets/icons_assets/Mario and Adrian b.jpg';
import { Container, Placeholder, Row, Col} from 'react-bootstrap';

export default function BackStory() {
    return (
        <>
      <section>
        <article>
          <Container fluid>
            <Row>     
               <h1 className='text-center p-2'>Our Story</h1>
            </Row>
          <Row>
            <Col aria-disabled>
              <img style={{maxWidth: 80+'%'}} className="img-fluid mx-auto" src={A} alt='Adrian and Mario in Little Lemon'/>
            </Col>
            <Col aria-disabled>
              <img style={{maxWidth: 80+'%'}} className="img-fluid mx-auto" src={B} alt='Adrian and Mario posing as Chefs'/>
            </Col>
          </Row>
          <Row style={{maxWidth: 100+'%'}} >
            <p className='m-auto p-2 text-justify'>
              Our owners (Mario and Adrian, right to left) are trained in the respective kitchens of their grandma's in the finest mediterranean traditions. Please come in to sample their art, you'll be taken on a pleasant culinary journey through the African, Middle Eastern and European coasts.
            </p>
          </Row>
          <Row style={{maxWidth: 80+'%'}} >
            <p className='m-auto p-2 text-justify'>
                    We're privileged to have the opportunity to serve you. Instead of our listening to us harp about our food and restaurant, see what our user testimonials say about us.
                    We bring the finest American Italian Meditteranean cooking experience to you, right in the heart of bustling Chicago. Once you taste our hospitality, you can never leave!
            </p>
        </Row>
        </Container>
        </article>
      </section>
        </>
    );
}

/*
    return (
        <>
      <section className='twocolgrid'>
        <article  className='twocolgrid-colone'>
          <div className='emptyflex'>
          <img src={A} className='bs-img' alt='user1'/>
          </div>
        </article>
        <article  className='twocolgrid-coltwo'>
        <div className='emptyflex'>
          <img src={B} className='bs-img' alt='user1'/>
        </div>
        </article>
      </section>
      <h1>Meet Adrian and Mario</h1>
      <section className='centeralignedtext'>
        <p>
                We're privileged to have the opportunity to serve you. Instead of our listening to us harp about our food and restaurant, see what our user testimonials say about us.
                We bring the finest American Italian Meditteranean cooking experience to you, right in the heart of bustling Chicago. Once you taste our hospitality, you can never leave!
        </p>
      </section>
        </>
    );
*/