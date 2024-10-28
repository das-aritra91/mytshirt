import React, {Component} from "react";
import Display from "../design/display";
import Setting from "../design/setting";
import {storage} from "../../config/fireBaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

class Dashboard extends Component{

    state={
        tshirtcolor: "black",
        uppertext: "This is upper text",
        lowertext: "This is lower text",
        mainimg: "",
        url: "",
        textsize: 52,
        textcolor: "white"
    }

    handleTshirtColor = (e) =>{
        this.setState({tshirtcolor: e.target.id});
    }

    handleUpperText = (e) => {
        this.setState({uppertext: e.target.value});
    }

    handleLowerText = (e) => {
        this.setState({lowertext: e.target.value});
    }

    handleTextSize =(e)=>{
        this.setState({textsize: e.target.value})
    }

    formatText(){
        const size = this.state.textsize;
        return parseInt(size);
    }

    handleTextColor = (e)=>{
        this.setState({textcolor: e.target.value})
    }

    handleImgUpload = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const storageRef = ref(storage, `images/${image.name}`);
            
            // Create a reference for the upload task
            const uploadTask = uploadBytesResumable(storageRef, image);
    
            uploadTask.on('state_changed', 
                (snapshot) => {
                    // You can handle progress here if needed
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.error('Upload error:', error);
                },
                () => {
                    // Handle successful uploads
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        this.setState({ url });
                    });
                }
            );
        }
    };

    render(){
        return(
            <div className="Container py 5">
                <div className="row">
                    <div className="col lg 8">
                    <Display display={this.state} textformat={this.formatText({})}/>
                    </div>
                    <div className="col lg 4">
                    <Setting color={this.handleTshirtColor} uppertext={this.handleUpperText} lowertext={this.handleLowerText} uploadimage={this.handleImgUpload}
                    textsize={this.handleTextSize}
                    textcolor={this.handleTextColor}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;