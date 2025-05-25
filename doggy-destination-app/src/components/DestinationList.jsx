import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import image from "../assets/pupPic1.jpg";
import picture from "../assets/pupPic2.jpg";
import dogPic from "../assets/pupPic4.jpg";


const DestinationList = (props) => {

    const {pupPlaces} = useParams();

    const outdoor = ["Willmore Dog Park", "Central Park Maplewood", "SLU Dog Park & Sculpture Garden"];
      
    const social = ["Bar K St. Louis", "Zoomies Pet Cafe + Boutique", "Rockwell Beer Garden"];
  

    
    return (
        
        <div>
            <h2>{pupPlaces}</h2>
            <div className={`list-container ${props.type}`}>
            <div className="item1">Here are some places you can go with your pup based on your search!</div>
            {props.type === "outdoor" && <div className="item2"></div>}
            <div className="item3">Link3</div>
            <div className="item4">Link4</div>
            {props.type === "social" && <div className="item5"></div>}
            <div className="item6">Link6</div>
            <div className="item7">Link7</div>
            </div>
            <div><img className="image" src={image} width="200" height="225" alt="Dog in car" />
            <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />
            <img className="dogPic" src={dogPic} width="325" height="225"  alt="Four Dogs on a Log" /><br />              
            <Link to="/searchForm"><button>Return to Search Form</button></Link>
            </div>
        </div>
    );

};

export default DestinationList;