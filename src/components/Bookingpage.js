import React from "react";
import BookingForm from "./BookingForm";

function Bookingpage(props) {
  return (
    <div>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        SubmitForm={props.submitForm}
      />
    </div>
  );
}

export default Bookingpage;
