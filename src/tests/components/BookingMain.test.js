import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor} from "@testing-library/react";
import { act } from 'react';
import BookingMain from "../../components/booking/BookingMain";
import userEvent from '@testing-library/user-event';
import {getStringDate} from '../../utils/utils';

test("Booking Main Rendering Tests", () => {
  // render the App component
  render(<BookingMain />); 
  let expectedDate = getStringDate(new Date());

  const heading = screen.getByText("Reserve a Table");
  expect(heading).toHaveTextContent("Reserve a Table");

  const heading2 = screen.getByText("Viewing Reservation availability for: "+expectedDate);
  expect(heading2).toHaveTextContent("Viewing Reservation availability for: "+expectedDate);
});

function initializer() {
  const retVal = ["17:00","18:00","19:00","20:00","21:00","22:00"].map(item => {
      return {time: item, status: 1};
  });

  return retVal;
}

test("Booking Main InitializeTimes Test", () => {
    //instead of exporting or spying on inner functions, this validates the function
    //initializeTimes by expecting a default set of values on the time option list
    // render the App component

    render(<BookingMain initializer={initializer}/>); 

    const resDate = screen.getByTestId("resDate");
    const expectedDate = getStringDate(new Date());
    expect(resDate).toHaveValue(expectedDate);
  
    const resTimings = screen.getByTestId("resTime");
    //crude
    expect(resTimings.innerHTML).toBe("<option></option><option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option>");
  });

  test("Booking Main Date Change should trigger timings change and validation errors", async () => {
    //instead of exporting or spying on inner functions, this validates the function
    //initializeTimes by expecting a default set of values on the time option list
    // render the App component
    const user = userEvent.setup()
    render(<BookingMain initializer={initializer} />); 
    let expectedDate = getStringDate(new Date());
    const resDate = screen.getByTestId("resDate");
    act(() => resDate.focus());
    expect(resDate).toHaveFocus();
    expect(resDate).toHaveValue(expectedDate);
    act(() => {
      fireEvent.change(resDate, {target: {value: '2025-01-31'}});
      fireEvent.blur(resDate);
    });
  
    const resTimings = screen.getByTestId("resTime");
    act( () => {
      resTimings.focus();
      fireEvent.change(resTimings, {target: {value: "17:00"}})
    });
    expect(resTimings).toHaveValue("17:00");

    //Res date should be today or in the future
    const errorDiv = await screen.findByText("Res date should be today or in the future");
    expect(errorDiv).not.toBe(undefined);
    expect(errorDiv).not.toBe(null);
    expect(errorDiv.innerHTML).toBe("Res date should be today or in the future");

    //crude
    expect(resTimings.innerHTML).toBe("<option></option><option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option>");
  });

  test("Booking Main submit Reservation", async () => {
    //instead of exporting or spying on inner functions, this validates the function
    //initializeTimes by expecting a default set of values on the time option list
    // render the App component
    const user = userEvent.setup()
    render(<BookingMain initializer={initializer}/>); 
//    await act(async () => {
      let expectedDate = getStringDate(new Date());

      const resDate = screen.getByTestId("resDate");
      const resTimings = screen.getByTestId("resTime");
      expect(resTimings.innerHTML).toBe("<option></option><option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option>");
      fireEvent.change(resTimings, {target: {value: '17:00'}})
      await waitFor( () => expect(resTimings).toHaveValue('17:00'), {timeout: 3000} );

      const submitBtn = screen.getByTestId("bookingsubmit");
      expect(submitBtn).not.toBe(null);
      expect(submitBtn).not.toBe(undefined);
      await user.click(submitBtn);
      //await waitFor( () => false, {timeout: 3000} );

      const heading = screen.getByText("Success!");
      expect(heading).toHaveTextContent("Success!");

      let confirmationMsg = "Thank you, John, for your booking at Little Lemon Chicago. ";
      confirmationMsg+= "We look forward to seeing you on "+expectedDate+" at 17:00."

      const heading2 = screen.getByText(confirmationMsg);
      expect(heading2).toHaveTextContent(confirmationMsg);
//    });
  });
