import React from "react";
import "./display.css"

const Display = ({display, textformat}) =>{
    return(
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img className="img responsive" src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtcolor}`} alt="img Tshirt"></img>
            </div>
            <div className="memetext text-center">
                <div className="uppertext">
                    <p style={{fontSize: textformat, color: display.textcolor}}>{display.uppertext}</p>
                </div>
                <img src={`${display.url}` || 'https://dummyimage.com/400x300'} alt="meme-text">
                </img>
                <div className="lowertext">
                    <p style={{fontSize: textformat, color: display.textcolor}}>{display.lowertext}</p>
                </div>
            </div>
        </div>
    )
}

export default Display;