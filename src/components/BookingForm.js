import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occassion, setOccassion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm();
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <div>
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="book-date">Choose Date:</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                />
              </div>
              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select
                  id="book-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes.map((availableTimes, index) => (
                    <option key={index}>{availableTimes}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="book-guests">Number of Guests:</label>
                <input
                  id="book-guests"
                  min="1"
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="book-occasion">Occasion</label>
                <select
                  id="book-occasion"
                  value={occassion}
                  onChange={(e) => setOccassion(e.target.value)}
                >
                  <option value="">Select an Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <input type="submit" value="Make Your Reservation" />
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    </div>
  );
};

export default BookingForm;
