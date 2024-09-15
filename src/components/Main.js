import React, { useState } from 'react';
import BookingForm from './BookingForm';
import restaurantInside from '../img/restaurant_inside.jpg';
import Bruschetta from '../img/Bruschetta.jpg';
import restaurantChef from '../img/restaurantChef.jpg';

const Main = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  return (
    <>
      {showBookingForm ? (
        <div>
          <h1>Book a Table</h1>
          <BookingForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <p>Welcome to our booking page. Please fill out the form to reserve a table.</p>
        </div>
      ) : (
        <main>
          <section>
            <article id="hero">
              <h1 className="heading_shadow">GRAND OPENING</h1>
              <p>15% Off This Weekend</p>
              <a href="/#" onClick={handleBookNowClick} className="cta">Book now</a>
            </article>
          </section>
          <section>
            <article>
              <h2>Our New Menu</h2>
              <img src={Bruschetta} alt="Menu" />
              <p>Our menu consists of 12-15 seasonal items based on Italian and Greek culture.</p>
              <p><a href="/#">See our new menu</a></p>
            </article>
            <article>
              <h2>Book a table</h2>
              <img src={restaurantInside} alt="Booking" />
              <p>Reserve your table for an Italian and Greek dining experience.</p>
              <p><a href="/#" onClick={handleBookNowClick}>Book your table now</a></p>
            </article>
            <article>
              <h2>Opening Hours</h2>
              <img src={restaurantChef} alt="Hours" />
              <p>The Little Lemon Restaurant is open 7 days a week, except for public holidays.</p>
              <ul>
                <li>Mon - Fri: 2pm - 10pm</li>
                <li>Sat: 2pm - 11pm</li>
                <li>Sun: 2pm - 9pm</li>
              </ul>
            </article>
          </section>
        </main>
      )}
    </>
  );
};

export default Main;

