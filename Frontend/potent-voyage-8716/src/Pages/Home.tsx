import React from "react";
import home1 from "../Imges/home1.jpg"
import img1 from "../Imges/img1.png"
import img2 from "../Imges/img2.png"
import img3 from "../Imges/img3.jpg"
import img4 from "../Imges/img4.png"
// import img12 from "../Imges/img12.png"
import { Button } from "@chakra-ui/react";
import { Footer } from "../Components/footer";
export default function Home() {
    return (
        <div>
            <div>
                <div style={{ display: "flex", marginLeft: "150px", marginTop: "50px" }}>
                    <h1 style={{ fontSize: "40px", fontFamily: "Georgia, serif", color: "Highlight" }}>FLEXLYFE </h1>
                    {/* <h1 style={{ marginLeft: "15px", fontSize: "40px", fontFamily: "Georgia, serif", color: "chocolate" }}>COACHING</h1> */}
                    <p style={{ paddingLeft: "540px", color: "burlywood" }}>Already a FlexLyfe? </p>
                    <p style={{ marginLeft: "10px", border: "3px solid lightblue", borderRadius: "10px", padding: "0px 10px", color: "blue", height: "35px" }}><a href="http://localhost:3000/login">LogIn</a></p>
                </div>
                <div className="upside">
                    <div style={{marginLeft:'50px'}}>
                        <a href=""><h1>How it Works</h1></a>
                    </div>
                    <div>
                        <a href="">Pick a Coach</a>
                    </div>
                </div>
                <div style={{ marginLeft: "110px" }}>
                    <img style={{ width: "1100px", height: "600px" }} src={home1} alt="" />
                    <div className="h1"><h1>a Stronger You in 2023</h1></div>
                    <div className="h2"><h1>Let Fitocracy help you conquer this year. Track workouts, build support, challenge yourself and your friends, all with the help of our expert coaches.</h1></div>
                </div>
                <div className="button">
                    <a href=""><Button style={{ backgroundColor: "blue", color: "white", fontFamily: "sans-serif", fontWeight: "lighter" }}>Join Today</Button></a>
                </div>
            </div>
            <div className="downside">
                <div style={{marginLeft:"60px",fontFamily:"fantasy",fontSize:"40px"}}>
                    <h1 >Mashable</h1>
                </div>
                <div style={{fontFamily:"sans-serif",fontWeight:"lighter"}}>
                    <p>Top Innovation Winner</p>
                </div>
                <div  style={{marginLeft:"60px",fontFamily:"fantasy",fontSize:"40px"}}>
                    <h1>Men'sHealth</h1>
                </div>
                <div>
                    <p>Top Fitness Apps 2014</p>
                </div>
            </div>
            <div>
                <div className="mainh">
                    <div className="head"><h1>How Does Fitocracy Help Me?</h1></div>
                    <div className="head1">GET YOUR VERY OWN PERSONAL TRAINER THAT PROVIDES EVERYTHING YOU <br /> NEED TO GET IN THE BEST SHAPE OF YOUR LIFE.</div>
                </div>
            </div>
            <div className="grid">
                <div style={{ display: "flex", gap: "100px" }}>
                    <div>
                        <div className="fimg">
                            <div>
                                <img src={img1} alt="" />
                            </div>
                            <div>
                                <h2>FITNESS ASSESSMENT</h2>
                            </div>
                        </div>

                        <div className="text">
                            <h1>Your expert coach will take you through an assessment in <br />order to create your personal plan for success. Whether you're  <br /> a beginner or an experienced athlete, we have a coach for you.</h1>
                        </div>
                    </div>
                    <div>
                        <div className="fimg">
                            <div>
                                <img src={img2} alt="" />
                            </div>
                            <div>
                                <h2>NUTRITIONAL SUCCESS</h2>
                            </div>
                        </div>
                        <div className="text">
                            You'll get a personalized nutrition plan built specifically for <br />your needs. No more guesswork, no more stress. You'll learn <br />how to eat on your own terms while establishing healthy <br />habits.
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "100px" }}>
                    <div>
                        <div className="fimg">
                            <div>
                                <img style={{ borderRadius: "40px" }} src={img3} alt="" />
                            </div>
                            <div>
                                <h2>WORKOUTS</h2>
                            </div>
                        </div>
                        <div className="text">
                            We build the workouts for you, you follow them and get <br />results. The Fitocracy mobile app will take you through each <br /> expert-built workout, set by set.

                        </div>
                    </div>
                    <div>
                        <div className="fimg">
                            <div>
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <h2>MOTIVATION & ACCOUNTABILITY</h2>
                            </div>
                        </div>
                        <div className="text">
                            Your coach works with you on a daily basis to keep you <br /> motivated and on track. They're your secret weapon to hit any <br /> goal, no matter what it is.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}