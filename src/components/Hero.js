import Restaurant from '../assets/icons_assets/restaurant.jpg';
import RestaurantFood from '../assets/icons_assets/restauranfood.jpg';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
    return (
    <>
        <section>
        <Container fluid>
          <Row>
            <Col>
            <Card className='m-2 p-2 border-0'>
              <article>
                  <Card.Title data-testid="restaurantName" className='m-2 p-2 border-0'>
                    Little Lemon
                  </Card.Title>
                  <Card.Subtitle className='m-2 p-2 border-0'>
                    Chicago
                  </Card.Subtitle>
                  <Card.Img  data-test-id="image1" src={Restaurant} alt='Little Lemon in Chicago'/>
                  <Card.Body>
                    <section>
                      Little Lemon is a charming neighborhood bistro 
                      that serves simple food and classy cocktails in a lively but casual environment.
                      The restaurant features a locally sourced menu with daily specials.
                   </section>
                  </Card.Body>
                  </article>
            </Card>
            </Col>
            <Col>
            <Card className='m-2 p-2 border-0'>
                <article>
                  <Card.Img style={{maxHeight: 650+'px'}} data-test-id="image2" src={RestaurantFood} alt='Yum Yum!'/>
                </article>
            </Card>
            </Col>
            </Row>
          </Container>
      </section>
    </>
    );
}

/*
    return (
    <>
      <section className='threecolgrid App-body'>
      <article className='threecolgrid-colone'>
          <h1 data-testid="restaurantName">
            Little Lemon
          </h1>
          <h2>
            Chicago
          </h2>
          <section>
            Little Lemon is a charming neighborhood bistro 
            that serves simple food and classy cocktails in a lively but casual environment.
            The restaurant features a locally sourced menu with daily specials.
          </section>
        </article>
        <article className='twocolgrid-coltwo'>
          <img data-test-id="image1" src={Restaurant} alt='Little Lemon in Chicago' className='hero-img'/>
        </article>
        <article className='threecolgrid-colthree'>
          <img data-test-id="image2" src={RestaurantFood} alt='Yum Yum!' className='hero-img'/>
        </article>
      </section>
    </>
    );
*/