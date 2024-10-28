import React from "react";
import "./display.css"

const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';

const Setting = ({color, uppertext, lowertext, uploadimage, textsize, textcolor}) =>{
    return(
        <div className="card bg-light container">
            <h3 className="text-center">Settings</h3>
            <h4>Change T-shirt color</h4>
            <div className="tshirt-color">
                <img id="white" src={`${urlImgBase}white.png`} alt="white-tshirt" onClick={color}></img>
                <img id="black" src={`${urlImgBase}black.png`} alt="black-tshirt" onClick={color}></img>
                <img id="grey" src={`${urlImgBase}grey.png`} alt="grey-tshirt" onClick={color}></img>
                <img id="blue" src={`${urlImgBase}blue.png`} alt="blue-tshirt" onClick={color}></img>
                <img id="red" src={`${urlImgBase}red.png`} alt="red-tshirt" onClick={color}></img>
            </div>
            <hr/>
            <h4>Write text</h4>
            <input className="form-control form-control-sm-mb-2" input="text" placeholder="Upper text" onChange={uppertext}></input>
            <input className="form-control form-control-sm" input="text" placeholder="Lower text" onChange={lowertext}></input>
            <hr/>
            <h4>Upload image</h4>
            <div className="form-group">
                <input onChange={uploadimage} type="file" className="form-control-file-mb-2"/>
            </div>
            <hr/>
            <h4>Text size</h4>
            <input type="range"min="12" max="52" onChange={textsize}/>
            <hr/>
            <h4>Text color</h4>
            <select onChange={textcolor} className="font-control form-control-sm-mb-2">
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
            </select>
            {/* <hr/> */}
            {/* <button className="btn btn-primary btn-sm-mb-2">Save</button> */}
        </div>
    )
}

export default Setting;