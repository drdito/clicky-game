import React from "react";
import "./ImageContainer.css";



const ImageContainer = props => 
  
  <img src={props.src} alt="celeb 1" height="200" width="200" onClick={props.onClick}/>;



export default ImageContainer;