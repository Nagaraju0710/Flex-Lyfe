import img5 from "../Imges/img5.png"
import img6 from "../Imges/img6.png"

export const Footer = () => {
    return (
        <div className="mainf">
            <div style={{display:"flex",marginLeft:"300px",gap:"50px"}}>
                <div className="f1" >
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <a style={{color:"lightcoral"}} href="https://apps.apple.com/us/app/fitocracy-exercise-log-online/id509253726">Download FlexLyfe</a>
                        <p>FREE ON THE APP STORE</p>
                    </div>
                </div>
                <div className="f1" >
                    <div>
                        <img src={img6} alt="" />
                    </div>
                    <div>
                        <a style={{color:"lightcoral"}} href="https://play.google.com/store/games?hl=en-IN">Download FlexLyfe</a>
                        <p>FREE ON THE GOOGLE <br />PLAY STORE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}