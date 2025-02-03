import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getStringDate } from '../../utils/utils';
import { Container, Row, Col } from 'react-bootstrap';

const BookingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  resDate: Yup.date().required('Reservation date is required').min(new Date(Date.now() - (24 * 60 * 60 * 1000)),"Res date should be today or in the future"),//.min(new Date(),'Date must not be less than today').max(new Date(Date.now()+(24*60*1000)),"Bookings accepted 1 week from today")
  guests: Yup.number().required('Specify number of guests').integer("We don't have a way to seat partial humans").min(1, 'Atleast 1 guest required').max(10,'Call us for reservations with more than 9 guests'),
  resTime: Yup.string().required("Specify a reservation time").min(5,'Required').max(5,'Required'),
});

export default function Bookings(props) {
    const availableTimings = props.availTimings;
    const initVal = {
        firstName: '',
        lastName: '',
        email: '',
        resDate: getStringDate(props.resDate),
        guests: 0,
        resTime: "",
        occasion: ""
    };

    async function formSubmit(values) {
        return new Promise(
            (resolve, reject) => props.handleReservation(new Date(values.resDate), values));
    }

    function resDateChanged(e) {
        const newDate = e.target.value;
        props.handleDateChange(new Date(newDate));
    }

    return (
        <>
                <h5 className='m-2 p-2'>Let's get some details</h5>
                <div id='bookings'>
                <Formik initialValues={initVal} validationSchema={BookingSchema}
                        onSubmit={async (values) => formSubmit(values)}>

                {(props) => (
                <Form>
                    <Container fluid>
                    <div className='form-group'>
                        <Row>
                            <Col className='m-2 p-2'>
                        First Name</Col><Col className='m-2 p-2'> <Field name="firstName" placeholder='John'/>
                        {props.errors.firstName && props.touched.firstName ? (
                            <div className='text-danger'>{props.errors.firstName}</div>
                        ) : null}</Col>
                        </Row>
                        <Row>
                        <Col className='m-2 p-2'>
                            Last Name</Col><Col><Field name="lastName" placeholder='Doe'/>
                        {props.errors.lastName && props.touched.lastName ? (<div className='text-danger'>{props.errors.lastName}</div>) : null}
                        </Col>
                        </Row>
                        <Row>
                        <Col className='m-2 p-2'>email: </Col><Col className='m-2 p-2'><Field name="email" type="email" placeholder='jd@nowhere.com'/>
                        {props.errors.email && props.touched.email ? <div className='text-danger'>{props.errors.email}</div> : null}
                        </Col>
                        </Row>
                    </div>
                    <div className='form-group'>
                    <Row>
                        <Col className='m-2 p-2'>Date: </Col>
                        <Col className='m-2 p-2'><Field data-testid="resDate" name="resDate" type="Date" onChange={ (evt) => {console.log(props);props.handleChange(evt);resDateChanged(evt);}}/>
                        {props.errors.resDate && props.touched.resDate ? <div data-testid="resDateError" className='text-danger'>{props.errors.resDate}</div> : null}
                        </Col>
                        </Row>
                        <Row>
                        <Col className='m-2 p-2'>
                        Time</Col><Col className='m-2 p-2'><Field data-testid="resTime" name="resTime" as="select" >
                            <option></option>
                            {availableTimings.filter( item => item.status !== 2).map(item => {
                                    return (<option key={item.time}>{item.time}</option>);
                                }
                            )}
                        </Field>
                        {props.errors.resTime && props.touched.resTime ? <div className='text-danger'>{props.errors.resTime}</div> : null}
                        </Col>
                        </Row>
                        <Row>
                        <Col className='m-2 p-2'>
                        Guest Count</Col><Col className='m-2 p-2'><Field name="guests" type="number" placeholder='2' aria-valuenow="2" aria-valuemin="0" aria-valuemax="9"/>
                        {props.errors.guests && props.touched.guests ? <div className='text-danger'>{props.errors.guests}</div> : null}
                        </Col>
                        </Row>
                        <Row>
                        <Col className='m-2 p-2'>
                        Occasion</Col><Col className='m-2 p-2'><Field name="occasion" as="select">
                            <option></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </Field>
                        {props.errors.occasion && props.touched.occasion ? <div className='text-danger'>{props.errors.occasion}</div> : null}
                        </Col>
                        </Row>
                    </div>
                    <Row>
                    <p className='form-group m-2 p-2'>
                        <button className="btn btn-primary text-center" data-testid="bookingsubmit" type="submit" onSubmit={formSubmit} disabled={props.isSubmitting || !props.isValid}>Submit your Reservation</button>
                    </p>
                    </Row>
                    </Container>
                </Form>
                )}

                </Formik>
            </div>
            </>
    );
}
/*
 <>
            <div id='bookings' className='twocolgrid-coltwo'>
                <h2>Let's get some details</h2>
                <Formik initialValues={initVal} validationSchema={BookingSchema}
                        onSubmit={async (values) => formSubmit(values)}>

                {(props) => (
                <Form>
                    <p className='emptyflex'> First Name: <Field name="firstName" />
                    {props.errors.firstName && props.touched.firstName ? (
                        <div className='errors'>{props.errors.firstName}</div>
                    ) : null}</p>
                    <p className='emptyflex'>
                        Last Name: <Field name="lastName" />
                    {props.errors.lastName && props.touched.lastName ? (<div>{props.errors.lastName}</div>) : null}
                    </p>
                    <p className='emptyflex'>
                        email: <Field name="email" type="email" />
                    {props.errors.email && props.touched.email ? <div>{props.errors.email}</div> : null}
                    </p>
                    <p className='emptyflex'>
                        Date: <Field data-testid="resDate" name="resDate" type="Date" onChange={ (evt) => {console.log(props);props.handleChange(evt);resDateChanged(evt);}}/>
                    {props.errors.resDate && props.touched.resDate ? <div>{props.errors.resDate}</div> : null}
                    </p>
                    <p className='emptyflex'>
                    Time: <Field data-testid="resTime" name="resTime" as="select" >
                        <option></option>
                        {availableTimings.filter( item => item.status !== 2).map(item => {
                                return (<option key={item.time}>{item.time}</option>);
                            }
                        )}
                    </Field>
                    {props.errors.resTime && props.touched.resTime ? <div>{props.errors.resTime}</div> : null}
                    </p>
                    <p className='emptyflex'>
                    Guest Count: <Field name="guests" type="number" aria-valuenow="2" aria-valuemin="0" aria-valuemax="9"/>
                    {props.errors.guests && props.touched.guests ? <div>{props.errors.guests}</div> : null}
                    </p>
                    <p className='emptyflex'>
                    Occasion: <Field name="occasion" as="select">
                        <option></option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </Field>
                    {props.errors.occasion && props.touched.occasion ? <div>{props.errors.occasion}</div> : null}
                    </p>
                    <p className='emptyflex'>
                    <button className="btn btn-primary" data-testid="bookingsubmit" type="submit" onSubmit={formSubmit} disabled={props.isSubmitting || !props.isValid}>Submit your Reservation</button>
                    </p>
                </Form>
                )}

                </Formik>
            </div>
            </>
            */