import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';




const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className="description">
                <p> 
                    Plan and organize your events effortlessly with event planner. from birthdays to corporate meeting, we've got you covered.
                </p>

                <button className="Get-started-button">Get Started</button>

            </section>

            <section className="events_categories">
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthdays parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby shower</li>
                    <li>Graduation parties</li>
                    <li>Family reunios</li>
                </ul>

                <ul>
                    <h2>Entertaiment Event:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural event</li>
                </ul>

                <ul>
                    <h2>Community Events:</h2>
                    <li>Funrising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>


            </section>

            <section className="features">
                <h2>Features</h2>
                <ul> 
                    <li> Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and Notifications</li>                
                </ul>

            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeza. Highly recomended"</p>
                    <p className="Autor">-Emily Johnson</p>
                    <section className="testimonials">
                <h2>Testimonials</h2>
            
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
                </div>

            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placehorder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placehoder="message"></textarea>
                    <button clasName="submit-button">Send</button>
                </form>

            </section>
            <Footer/>
        </div>

    );
};

export default EventPlanner;
