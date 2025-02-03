
export default function BookingConfirmation(props) {
    
     return (
        <>
        Thank you, {props.firstName}, for your booking at Little Lemon Chicago. 
        We look forward to seeing you on {props.resDate} at {props.resTime}.
        </>
    );
}