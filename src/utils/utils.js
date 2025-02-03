import { fetchAPI } from '../theSoCalledAPI';

function getStringDate(bookingDate) {
    const month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    return bookingDate.getFullYear()
                +'-'+month[bookingDate.getMonth()]
                +'-'+ ( bookingDate.getDate() < 10 ? '0'+ (bookingDate.getDate()) : (bookingDate.getDate()) );
}

function initializeTimes(bookingDate = new Date()) {

    const apiData = fetchAPI(bookingDate);
    const bookingSlots = apiData.map( (item) => {return {time: item, status: Math.random() >= 0.3 ? 1 : 2}});
    return bookingSlots;    
}

export {getStringDate, initializeTimes};