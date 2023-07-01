import { useEffect, useState } from "react";

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    return (
        <>
            {isVisible &&
            <a className="scroll__btn" style={{display: isVisible ? 'block':'none'}} href="#">
                <img src="src/images/arrow-circle-left.svg"/>
            </a>
            }
        </>
    );
}

export default Scroll;