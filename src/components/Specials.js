import Bruchetta from '../assets/icons_assets/bruchetta.svg';
import Salad from '../assets/icons_assets/greek salad.jpg';
import Dessert from '../assets/icons_assets/lemon dessert.jpg';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';
import '../Carousel.css';

export default function Specials() {
    return (
        <>
      <section className='mx-2 px-2 my-2 py-2'>
        <Container fluid>
          <Carousel fade interval={2000} >
            <Carousel.Item>
              <article>
                <Container fluid>
                  <Row>
                    <Col>
                      <Card className='p-2 m-2 border-0'>
                      <Card.Img style={{height: 450+'px', width: 450+'px'}} className='roundedcircle mx-auto my-auto px-auto py-auto' src={Bruchetta} alt='Bruchetta'/>
                      </Card>
                    </Col>
                    <Col className='mx-auto'>
                      <Card className='m-2 p-2 border-0'>
                      <Container>
                        <Card.Header>
                                <Row>
                                <Col>
                                  <h6 className='text-center'>Bruchetta</h6>
                                </Col>
                                <Col>
                                  <div className='text-center'><b>$49.99</b></div>
                                </Col>
                                </Row>
                        </Card.Header>
                      </Container>
                        <Card.Body>
                          Come enjoy our Bruchetta made from day old marinated bread with juicy tomatoes marinated in garlic and our secret grandma sauce 
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </article>
            </Carousel.Item>

            <Carousel.Item>
              <article>
                <Container className='m-auto p-auto'fluid>
                  <Row>
                    <Col>
                      <Card className='m-2 p-2 border-0'>
                      <Card.Img style={{height: 450+'px', width: 450+'px'}} className='roundedcircle mx-auto my-auto px-auto py-auto' src={Salad} alt='Greek Salad'/>
                      </Card>
                    </Col>
                    <Col>
                      <Card className='m-2 p-2 border-0'>
                      <Container>
                        <Card.Header>
                                <Row>
                                <Col>
                                  <h6 className='text-center'>Greek Salad</h6>
                                </Col>
                                <Col>
                                  <div className='text-center'><b>$49.99</b></div>
                                </Col>
                                </Row>
                        </Card.Header>
                      </Container>
                      <Card.Body>
                            Come enjoy our Greek Salad made from fresh lettuce, ripe tomatoes and olives plucked out of our hydroponic garden (Our Hydroponic olive shrubs are a must see attraction)
                      </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </article>
            </Carousel.Item>

            <Carousel.Item>
              <article>
                <Container fluid>
                  <Row>
                    <Col>
                      <Card className='m-2 p-2 border-0'>
                        <Card.Img style={{height: 450+'px', width: 450+'px'}} className='roundedcircle mx-auto my-auto px-auto py-auto' src={Dessert} alt='Lemon Pie'/>
                      </Card>
                    </Col>
                    <Col>
                      <Card className='m-2 p-2 border-0'>
                        <Container>
                          <Card.Header>
                                  <Row>
                                  <Col>
                                    <h6 className='text-center'>Lemon Pie</h6>
                                  </Col>
                                  <Col>
                                    <div className='text-center'><b>$49.99</b></div>
                                  </Col>
                                  </Row>
                          </Card.Header>
                        </Container>
                        <Card.Body>
                            Come enjoy Lemon pie slow baked at tart lemons, crystallized caramel honey sugar and our special chef magic.
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </article>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
        </>
    );
}
/*
                  <article className='twocolgrid-coltwo'>
          <img src={Salad} alt='Greek Salad' className='hero-img'/>
          <div className='twocolgrid'>
            <h2 className='p twocolgrid-colone'>
                Greek Salad
            </h2>
            <p className='p twocolgrid-coltwo'>
                <b>$39.99</b>
            </p>
          </div>
          <p>
          The food so great, you never have to cook. Come enjoy our Greek Salad made from 10 day old Lettuce with warm overripe tomatoes and pungent garlic onions 
          </p>
        </article>
        <article className='threecolgrid-colthree'>
          <img src={Dessert} alt='Dessert' className='hero-img'/>
          <div className='twocolgrid'>
            <h2 className='p twocolgrid-colone'>
                Lemon moron pie
            </h2>
            <p className='p twocolgrid-coltwo'>
                <b>$29.99</b>
            </p>
          </div>
          <p>
          The food so great, you never have to cook. Come enjoy our Lemon Dessert slow baked at 35 Celsius using old lemons, trash salvaged sugar and our special chef magic.
          </p>
        </article>

        */