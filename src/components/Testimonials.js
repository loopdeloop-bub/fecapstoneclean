import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";

export default function Testimonials() {
    return (
    <>
    <Container>
      <Row>
      <h5 data-testid="testimonials" className="text-center">
          Our loyal customers say ... 
      </h5>
      </Row>
      <Row>
          <Col className="col-6">
              <Card className='m-2 p-2 border-0'>
              <Card.Img style={{maxWidth: 250+"px", maxHeight: 250+"px", borderRadius: 30+'px'}} className="mx-auto px-2 py-2 roundedcircle" src='https://randomuser.me/api/portraits/women/52.jpg' alt='Testimonial from Bullisha, a satisfied user'/>
              <Card.Body>
                <Card.Title>Candy - Mom of Three</Card.Title>
                  <Card.Text>Love the food!  Their magic lets me meet all the dietary preferences of my large family! <br/>
                    <FaRegStar color="gold"/> <FaRegStar color="gold"/> <FaRegStar color="gold"/> <FaRegStar color="gold"/> <FaRegStar color="gold"/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-6">
            <Card className='m-2 p-2 border-0'>
              <Card.Img style={{maxWidth: 250+"px", maxHeight: 250+"px", borderRadius: 30+'px'}} className="mx-auto px-2 py-2 roundedcircle" src='https://randomuser.me/api/portraits/men/62.jpg' alt='Testimonial from Pulser, a satisfied user'/>
              <Card.Body>
                <Card.Title>Andy - Working Professional</Card.Title>
                  <Card.Text>Wow! Just Wow! Ideal for business meetings, dates, special occasions and everyday "don't want to cook" needs. I go atleast 4 times a week<br/>
                    <FaRegStar color="gold"/> <FaRegStar color="gold"/> <FaRegStar color="gold"/> <FaRegStar color="gold"/>
                  </Card.Text>
                </Card.Body>
              </Card>                
            </Col>
      </Row>
      </Container>
    </>
    );
}

/*
    <h1 data-testid="testimonials">Hear from our loyal customers!</h1>
      <section className='twocolgrid'>
        <article  className='twocolgrid-colone'>
          <div className='emptyflex'>
          <img src='https://randomuser.me/api/portraits/women/52.jpg' className='testimonial-img' alt='Testimonial from Bullisha, a satisfied user'/>
          <blockquote>
            <p>
              I go here right before a gut cleanse, don't even need an enema afterward!
            </p>
          </blockquote>
          </div>
        </article>
        <article  className='twocolgrid-coltwo'>
        <div className='emptyflex'>
          <img src='https://randomuser.me/api/portraits/men/62.jpg' className='testimonial-img' alt='Testimonial from Pulser, a satisfied user'/>
          <blockquote>
            <p>
            I can afford their steep charges, so I go there three times a day to show off.
            </p>
          </blockquote>
        </div>
        </article>
      </section>
*/