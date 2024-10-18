import React from "react";
import { useSpring, animated } from "react-spring";
import "./count.css";


function Count() {
    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
       

        return (
            <animated.span>
                {number.to((n) =>
                    n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
            </animated.span>
        );
    }

    return (
        <div className="container">
            <div className="count">
                <h1>
                    ${<Number n={6000000} />}
                </h1>
                <p>Paid to our affiliate partners</p>
            </div>
        </div>
    );
}

export default Count;
