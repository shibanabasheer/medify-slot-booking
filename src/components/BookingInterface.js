import React, { useState, useEffect } from "react";

const BookingInterface = ({ selectedCenter, onBooking }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      // Simulate fetching available time slots for the selected date
      const availableSlots = [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
      ];
      setTimeSlots(availableSlots);
    } else {
      setTimeSlots([]);
    }
  }, [selectedDate]);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      onBooking({
        centerName: selectedCenter.name,
        address: selectedCenter.address,
        date: selectedDate,
        time: selectedTime,
      });
      setSelectedDate("");
      setSelectedTime("");
    } else {
      alert("Please select both date and time!");
    }
  };

  return (
    <div className="booking-interface">
      <h3>Book an Appointment at {selectedCenter.name}</h3>
      <p>{selectedCenter.address}</p>

      <label htmlFor="date">Select Date:</label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0]}
      />

      {selectedDate && (
        <>
          <label htmlFor="time">Select Time Slot:</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </>
      )}

      <button onClick={handleBooking} disabled={!selectedDate || !selectedTime}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingInterface;
