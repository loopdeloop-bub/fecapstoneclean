import BookingForm from './BookingForm';
import React, { useReducer } from 'react';
import BookingList from './BookingList';
import { getStringDate, initializeTimes } from '../../utils/utils';
import { submitAPI } from '../../theSoCalledAPI';
import BookingConfirmation from './BookingConfirmation';
import { Container, Row, Col, Stack, Button, Modal } from 'react-bootstrap';

export default function BookingMain(props) {

    let initializer = (props && props.initializer) ? props.initializer : initializeTimes;

    function constructInitState() {
        const today = new Date();
        const slotMap = new Map();
        slotMap.set(getStringDate(today),initializer(today));
        return {
            currentDate: today,
            allTimings: slotMap,
            showBookings: true
        };
    }

    const [bookingState, bookingDispatch] = useReducer(availableTimingsReducer, constructInitState());

    function availableTimingsReducer(state, action) {
        //supports two actions
        //1. {type: 'booking', bookingDate: newDate, bookingTime:  time}
        //2. {type: 'datechange', bookingDate: newDate}
        let newState = {...state};
        const {bookingDate, bookingTime, formData} = {...action};
        const bookingDateStr = getStringDate(bookingDate);
        let temp =  newState.allTimings;
        let showConfirmation = false;

        if (action.type === 'datechange') {
            //does state have the date and available slots? 
            // if yes, update component state to trigger re-render
            // if not, add the slots
            if (temp.get(bookingDateStr) === undefined) {
                //fetch data here.
                temp.set(bookingDateStr, initializer(bookingDate));
            }
        } else if (action.type === 'booking') {
            //if not, update slot state and update component state to trigger re-render
            if (temp.get(bookingDateStr) !== undefined) {
                let bookings = temp.get(bookingDateStr);
                let updatedBookings = bookings.map(element => {
                    if (element.time === bookingTime) 
                        return {time: bookingTime, status: 2};
                    else
                        return element;
                });
                if (submitAPI(formData)) {//submit api
                    temp.set(bookingDateStr,updatedBookings);
                    //dispatchConfirmation(bookingDate, formData);
                    showConfirmation = true;
                }
            } // else should theoretically not happen
        } else if (action.type === 'confirmationtoggle') {
            showConfirmation = newState.showBookings; //toggle happens when new state is set
        }
        newState = {
            currentDate: bookingDate,
            allTimings: temp,
            showBookings: !showConfirmation,
            formData: formData
        };
        return newState;
    }

    function resDateChanged(newDate) {
        bookingDispatch({type: 'datechange', bookingDate: new Date(newDate)});
    }

    function addBooking(newDate, values) {
        bookingDispatch({type: 'booking', bookingDate: new Date(newDate), bookingTime: values.resTime, formData: values});
    }

    function handleClose() {
        bookingDispatch({type: 'confirmationtoggle', bookingDate: bookingState.currentDate, bookingTime: "", formData: bookingState.formData});
    }

    return (
        <>
            <section>
            <Container className='m-2 p-2'fluid>
                <Row>
                    <h3 className='text-center'>
                        Reserve a Table
                    </h3>
                </Row>
                <Row>
                    <Col>
                        <Stack>
                            <h5 className='m-2 p-2 text-center'>
                                Viewing Reservation availability for: {getStringDate(bookingState.currentDate)}
                            </h5>
                            <BookingList resDate={bookingState.currentDate} 
                                availTimings={bookingState.allTimings.get(getStringDate(bookingState.currentDate))} />
                        </Stack>
                    </Col>
                    <Col>
                        <BookingForm resDate={bookingState.currentDate} 
                                availTimings={bookingState.allTimings.get(getStringDate(bookingState.currentDate))} handleDateChange={resDateChanged} 
                                handleReservation={addBooking}/>
                    </Col>
                </Row>
            </Container>
            </section>
            <Modal show={!bookingState.showBookings} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Booking Success!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <BookingConfirmation {...bookingState.formData}/>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


/*
    <>
        { bookingState.showBookings?
        (
            <>
                <section className='twocolgrid'>
                <h1>
                    Reserve a Table
                </h1>
                <h2>
                    Viewing Reservation Slots for: {getStringDate(bookingState.currentDate)}
                </h2>
                    <BookingList resDate={bookingState.currentDate} 
                        availTimings={bookingState.allTimings.get(getStringDate(bookingState.currentDate))} />
                    <BookingForm resDate={bookingState.currentDate} 
                            availTimings={bookingState.allTimings.get(getStringDate(bookingState.currentDate))} handleDateChange={resDateChanged} 
                            handleReservation={addBooking}/>
                </section>
            </>
        ) : 
        (
            <>
                <BookingConfirmation {...bookingState.formData}/>
            </>
        )
        }
    </>
    */