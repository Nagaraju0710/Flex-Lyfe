import { Button } from "@chakra-ui/react"
import img5 from "../Imges/img5.png"
import img6 from "../Imges/img6.png"
import img7 from "../Imges/img7.png"
import img8 from "../Imges/img8.png"
import img9 from "../Imges/img9.jpg"
import img10 from "../Imges/img10.png"
import img11 from "../Imges/img11.png"



export const Footer = () => {
    return (
        <div>
            <div className="mainfooter">
                <div className="mainf">

                    <div style={{ display: "flex", marginLeft: "300px", gap: "50px" }}>
                        <div className="f1" >
                            <div>
                                <img src={img5} alt="" />
                            </div>
                            <div>
                                <a style={{ color: "lightcoral" }} href="https://apps.apple.com/us/app/fitocracy-exercise-log-online/id509253726">Download FlexLyfe</a>
                                <p>FREE ON THE APP STORE</p>
                            </div>
                        </div>
                        <div className="f1" >
                            <div>
                                <img src={img6} alt="" />
                            </div>
                            <div>
                                <a style={{ color: "lightcoral" }} href="https://play.google.com/store/games?hl=en-IN">Download FlexLyfe</a>
                                <p>FREE ON THE GOOGLE <br />PLAY STORE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ftxt">
                    <h1 style={{ fontSize: "40px", fontFamily: "revert-layer" }}>How Much Does It Cost?</h1>
                    <h2 style={{ paddingTop: "20px" }}>PROFESSIONAL TRAINING FROM THE WORLD’S BEST COACHES STARTS FOR AS LITTLE AS $1/DAY.</h2>
                </div>
                <div>
                    <div style={{ display: "flex" }}>
                        <div className="fone">
                            <div>
                                <h1 style={{ fontSize: "30px", fontFamily: "revert-layer" }}>
                                    Free
                                </h1>
                                <p style={{ fontFamily: "serif", fontWeight: "lighter" }}>NO STRINGS</p>
                                <p style={{ fontSize: "50px", color: "blueviolet" }}>$0</p>
                            </div>
                            <div style={{ fontFamily: "sans-serif", fontStyle: "italic", fontWeight: "lighter" }}>
                                <ul>
                                    <li>
                                        Get free workouts for any goal and experience level
                                    </li>
                                    <li>Earn points for every workout logged</li>
                                    <li>Earn badges for unlocking special achievements</li>
                                    <li>View progress on any exercise with interactive charts</li>
                                    <li>Get support and motivation from the most positive fitness community online</li>
                                    <li>Read daily articles and tips from our Knowledge Center</li>
                                </ul>
                                <Button style={{ color: "white", backgroundColor: "rgb(81, 81, 249)" }}>Join Now</Button>
                            </div>
                        </div>
                        <div>
                            <div className="ftwo">
                                <div>
                                    <h1 style={{ fontSize: "30px", fontFamily: "revert-layer" }}>
                                        Free
                                    </h1>
                                    <p style={{ fontFamily: "serif", fontWeight: "lighter" }}>NO STRINGS</p>
                                    <p style={{ fontSize: "50px", color: "blueviolet" }}>$/1/day</p>
                                </div>
                                <div style={{ fontFamily: "sans-serif", fontStyle: "italic", fontWeight: "lighter" }}>
                                    <ul>
                                        <li>
                                            Get free workouts for any goal and experience level
                                        </li>
                                        <li>Earn points for every workout logged</li>
                                        <li>Earn badges for unlocking special achievements</li>
                                        <li>View progress on any exercise with interactive charts</li>
                                        <li>Get support and motivation from the most positive fitness community online</li>
                                        <li>Read daily articles and tips from our Knowledge Center</li>
                                    </ul>

                                    <Button style={{ color: "white", backgroundColor: "rgb(81, 81, 249)" }}>Hire A Coach</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maibutton">
                <div>
                    <h2>VIEW COACHES FOR</h2>
                </div>
                <div className="buttons">
                    <div> <a href=""><Button><p>Weight Loss</p></Button></a></div>
                   <div><a href=""><Button>At Home Fitness</Button></a></div>
                    <div><a href=""><Button>Strength Gainz</Button></a></div>
                    <div><a href=""><Button>Beginner</Button></a></div>
                    <div>  <a href=""><Button>women Only</Button></a></div>
                    <div> <a href=""><Button>Nutrition</Button></a></div>
                   <div><a href=""><Button>Atheletic Performance</Button></a></div>
                    <div> <a href=""><Button>Look Good Naked</Button></a></div>
                    <br />
                    <div><a href=""><Button>Compitition Training</Button></a></div>
                    <div> <a href=""><Button>View All</Button></a></div>
                   
                </div>
            </div>
            <div className="lastfooter">
                <div className="lastfooter1">
                    <div>
                        <a href=""><h1>Support</h1></a>
                    </div>
                    <div>
                        <a href=""><h1>Terms</h1></a>
                    </div>
                    <div>
                        <a href=""><h1>Privacy</h1></a>
                    </div>
                    <div>
                        <a href=""><h1>About</h1></a>
                    </div>
                    <div>
                        <a href=""><h1>Careers</h1></a>
                    </div>
                    <div>
                        <a href=""><h1>Contact</h1></a>
                    </div>
                    <div>
                        <a href=""><img src={img7} alt="" /></a>
                    </div>
                    <div>
                        <a href=""><img src={img8} alt="" /></a>
                    </div>
                    <div>
                        <a href=""><img src={img9} alt="" /></a>
                    </div>
                    <div>
                        <a href=""><img src={img10} alt="" /></a>
                    </div>
                    <div>
                        <a href=""><img src={img11} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}