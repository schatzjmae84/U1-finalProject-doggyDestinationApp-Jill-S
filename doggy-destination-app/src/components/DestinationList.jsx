import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import image from "../assets/pupPic1.jpg";
import picture from "../assets/pupPic2.jpg";
import dogPic from "../assets/pupPic4.jpg";
import SearchForm from "./SearchForm";


export default function DestinationList() {

    const {pupPlaces} = useParams();

    const outdoor = ["Willmore Dog Park", "Central Park Maplewood", "SLU Dog Park & Sculpture Garden"];
    const social = ["Bar K St. Louis", "Zoomies Pet Cafe + Boutique", "Rockwell Beer Garden"];
  
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        localStorage.setItem('activity', JSON.stringify(activity))    
    }, [activity]); 

    useEffect(() => {
        const storedActivity = JSON.parse(localStorage.getItem('activity'));
        if(activity) {
            setActivity(activity);
        }
    }, []);

    const activityType = [storedActivity];
    const selectActivity = activityType.filter(checkType);

    function checkType(type) {
        if(type == "outdoor"){
            return outdoor;
        }else{
            return social;
        }
    }
    
    return (
        
        <div>
            <h2>{pupPlaces}</h2>
            <div>
                <SearchForm activity={activity} setActivity={setActivity} />
            </div>
            <div className="container">
            <div className="item1">Here are some places you can go with your pup based on your search!</div>
            <div className="item2">{selectActivity}</div>
            <div className="item3">Link3</div>
            <div className="item4">Link4</div>
            <div className="item5">Link5</div>
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