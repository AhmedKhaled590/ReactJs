import Button from "./Button"
import { AiFillPlayCircle, FaPlay } from 'react-icons/fa'
import Card from "./cards"
const Hero = () => {
    return (
        <>

            <div className="content">
                <video autoplay="true" muted="true" loop="true" id="myVideo">
                    <source src="videos\video-1.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <h1 className="heading">
                    ADVENTURE AWAITS
                </h1>
                <p className="info">
                    What are you waiting for?
                </p>
                <div className="hero-btns">
                    <Button btnName="GET STARTED" bg="transperant" color="white" />
                    <Button btnName="WATCH TRAILER" bg="white" color="black" /><FaPlay />
                </div>
            </div>
        </>
    );
}

export default Hero;