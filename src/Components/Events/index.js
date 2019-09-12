import React from 'react';
import MAP from '../MAP';
import './style.css';

const EVENTS = () => {
    return (
        <div className="container pt-10">
            <h1 className="text-center font-weight-bold">Events</h1>
            <hr />
            <h3 className="font-weight-bold">Northwest Jump Rope Workshop</h3>
            <p>Awesome instructors from the US and Canada will provide top-level instruction. The workshop will include teaching the basics to beginners as well as helping intermediate jumpers learning new tricks. Instruction will include single rope freestyle, partner skills, Chinese Wheel &amp; Double Dutch. We recommend jumpers be 1st grade or older. There is also an adult workshop offered on the same day if you want to keep up with your kids!</p>
            <p><b>When: </b>Saturday, November 10, 2018 - 9am-Noon or 9am-3pm</p>
            <p><b>Where: </b><a href="https://goo.gl/maps/s9NMbguHab5ZjC7w5">Kamiakin Middle School, 14111 132nd Ave NE, Kirkland, WA 98034</a></p>
            <MAP />
            <p className="space"><b>What to bring:: </b>A jump rope and water. Jump ropes will be available for purchase at the team store if you do not have one. Wear comfortable clothes and athletic shoes for jumping.</p>
            <p><b>Cost: </b>$30 US per jumper for half-day or $45 US for all-day if received by 11/1/2018. After the deadline add $5 US. Workshop T-shirts may be pre-ordered for $15 US. (T-shirt order must be received by 10/23.)</p>
            <p className="lastPara">If you have any questions, please contact Debbie Erickson at <a href="mailto:deb_skis@yahoo.com">deb_skis@yahoo.com</a>.</p>
        </div>
    )
}

export default EVENTS;