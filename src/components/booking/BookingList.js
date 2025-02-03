import { Container, Row, Col } from "react-bootstrap";

export default function BookingList(props) {
    
     return (
        <>
        <Container className="m-2 p-2 text-center">
                <ul>
                {props.availTimings.map( (element) => {
                    return (<li key={element.time} className="" style={{  listStyle: 'none'}}>
                        <Row className="m-1 p-1">
                            <Col className={element.status===1?"text-primary text-end my-auto py-auto":"text-danger text-end py-auto my-auto"}>
                                {element.time}
                            </Col>
                            <Col>
                                <div className={element.status===1?"text-primary text-start my-auto py-auto":"text-danger text-start py-auto my-auto"}>
                                    {element.status===1?"Available":"Unavailable"}
                                </div>
                            </Col>
                        </Row>
                    </li>);
                })}
                </ul>
        </Container>
        </>
    );

}

/*
        <>
        <div className='twocolgrid-colone'>
            <h4>Availability</h4>
                <ul>
                {props.availTimings.map( (element) => {
                    return (<li key={element.time}><p>

                        {element.time} {element.status===1?"Available":"Unavailable"} </p>
                    </li>);
                })}
                </ul>
        </div>
        </>
*/