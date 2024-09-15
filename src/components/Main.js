import React from 'react';
import restaurantInside from '../img/restaurant_inside.jpg';
import Bruschetta from '../img/Bruschetta.jpg';
import restaurantChef from '../img/restaurantChef.jpg';

const Main = () => {
  return (
    <main>
      <section>
        <article id="hero">
          <h1 class="heading_shadow">GRAND OPENING</h1>
          <p>
            15% Off This Weekend
          </p>
          <a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */ class="cta"> Book now </a>
        </article>
      </section>
      <section>
        <article>
           <h2>Our New Menu</h2>
           <img src={Bruschetta} alt="Menu"/>
          <p>
            Our menu consists of 12-15 seasonal items based on Italian and Greek culture.
          </p>
          <p>
            <a href="#"/*eslint-disable-line jsx-a11y/anchor-is-valid */>See our new menu</a>
          </p>
        </article>
        <article>
          <h2>Book a table</h2>
          <img src={restaurantInside} alt="Booking"/>
          <p>
            Reserve your table for an Italian and Greek dining experience.
          </p>
          <p>
            <a href="#"/*eslint-disable-line jsx-a11y/anchor-is-valid */>Book your table now</a>
          </p>
        </article>
        <article>
          <h2>Opening Hours</h2>
          <img src={restaurantChef} alt="Hours"/>
          <p>
            The Little Lemon Restaurant is open 7 days a week, except for public holidays.
          </p>
          <ul>
            <li>Mon - Fri: 2pm - 10pm</li>
            <li>Sat: 2pm - 11pm</li>
            <li>Sun: 2pm - 9pm</li>
          </ul>
        </article>
      </section>


    </main>
  );
};

export default Main;

