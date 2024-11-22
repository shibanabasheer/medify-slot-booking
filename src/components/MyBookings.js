import React from "react";

const MyBookings = ({ bookings }) => {
  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found!</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} className="booking-card">
              <h3>{booking.centerName}</h3>
              <p>Address: {booking.address}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
