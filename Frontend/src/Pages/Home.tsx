import React from "react";
import home1 from "../Imges/home1.jpg";
import img1 from "../Imges/img1.png";
import img2 from "../Imges/img2.png";
import img3 from "../Imges/img3.jpg";
import img4 from "../Imges/img4.png";
// import img12 from "../Imges/img12.png"
import { Button } from "@chakra-ui/react";
import { Footer } from "../Components/footer";
import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <div>
      <div>
        <div
          style={{ display: "flex", marginLeft: "150px", marginTop: "50px" }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              marginBottom: "2rem",
              marginLeft: "-2.5rem",
              color: "#A0CE5F",
            }}
          >
            FlexLyfe
          </h1>
        </div>
        <div className='upside'>
          <div style={{ marginLeft: "50px" }}>
            <a href=''>
              <h1>How it Works</h1>
            </a>
          </div>
          <div>
            <a style={{color: '#ffffffd0'}} href=''>Pick a Coach</a>
          </div>
        </div>
        <div style={{ marginLeft: "110px" }}>
          <img
            style={{ width: "1100px", height: "600px" }}
            src={home1}
            alt=''
          />
          <div className='h1'>
            <h1 style={{fontWeight: '400',marginTop:'-1.5rem'}}>a Stronger You in 2023</h1>
          </div>
          <div className='h2'>
            <h1 style={{color: '#d2d2d2d4'}}>
              Let FitLyfe help you conquer this year. Track workouts, build
              support, challenge yourself and your friends, all with the help of
              our expert coaches.
            </h1>
          </div>
        </div>
        <div className='button'>
          <a href=''>
            <Button
              style={{
                backgroundColor: "#A0CE5F",
                color: "white",
                fontFamily: "sans-serif",
                fontWeight: "lighter",
              }}
            >
              Join Today
            </Button>
          </a>
        </div>
      </div>
      <div className='downside'>
        <div
          style={{
            marginLeft: "60px",
            fontFamily: "sans-serif",
            fontSize: "40px",
          }}
        >
          <h1>Mashable</h1>
        </div>
        <div style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}>
          <p>Top Innovation Winner</p>
        </div>
        <div
          style={{
            marginLeft: "60px",
            fontFamily: "sans-serif",
            fontSize: "40px",
          }}
        >
          <h1>Men'sHealth</h1>
        </div>
        <div>
          <p>Top Fitness Apps 2014</p>
        </div>
      </div>
      <div>
        <div className='main'>
          <div className='head'>
            <h1>How Does FitLyfe Help Me?</h1>
          </div>
          <div className='head1'>
            GET YOUR VERY OWN PERSONAL TRAINER THAT PROVIDES EVERYTHING YOU{" "}
            <br /> NEED TO GET IN THE BEST SHAPE OF YOUR LIFE.
          </div>
        </div>
      </div>
      <div className='grid'>
        <div style={{ display: "flex", gap: "100px" }}>
          <div>
            <div className='fimg'>
              <div>
                <img src={img1} alt='' />
              </div>
              <div>
                <h2>FITNESS ASSESSMENT</h2>
              </div>
            </div>

            <div className='text'>
              <p>
                Your expert coach will take you through an assessment in <br />
                order to create your personal plan for success. Whether you're{" "}
                <br /> a beginner or an experienced athlete, we have a coach for
                you.
              </p>
            </div>
          </div>
          <div>
            <div className='fimg'>
              <div>
                <img src={img2} alt='' />
              </div>
              <div>
                <h2>NUTRITIONAL SUCCESS</h2>
              </div>
            </div>
            <div className='text'>
              <p>
                You'll get a personalized nutrition plan built specifically for{" "}
                <br />
                your needs. No more guesswork, no more stress. You'll learn{" "}
                <br />
                how to eat on your own terms while establishing healthy <br />
                habits.
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "100px" }}>
          <div>
            <div className='fimg'>
              <div>
                <img style={{ borderRadius: "40px" }} src={img3} alt='' />
              </div>
              <div>
                <h2>WORKOUTS</h2>
              </div>
            </div>
            <div className='text'>
              <p>
                We build the workouts for you, you follow them and get <br />
                results. The FitLyfe mobile app will take you through each{" "}
                <br /> expert-built workout, set by set.
              </p>
            </div>
          </div>
          <div>
            <div className='fimg'>
              <div>
                <img src={img4} alt='' />
              </div>
              <div>
                <h2>MOTIVATION & ACCOUNTABILITY</h2>
              </div>
            </div>
            <div className='text'>
              <p>
                Your coach works with you on a daily basis to keep you <br />{" "}
                motivated and on track. They're your secret weapon to hit any{" "}
                <br /> goal, no matter what it is.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
