import { useParams } from "react-router"
import image from "../assets/pupPic1.jpg";
import picture from "../assets/pupPic2.jpg";
import dogPic from "../assets/pupPic4.jpg";
import { useState } from "react";
import RiseLoader from 'react-spinners/RiseLoader';
import { Link } from "react-router";
import "./SelectedDestination.css"

const SelectedDestination = () => {

    const {idealInfo} = useParams();

    const [ activityType, setActivityType ] = useState("");
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ destination, setDestination] = useState([]);

    const destinationNames = {
        Outdoor: ["Willmore Dog Park", "Central Park Maplewood", "SLU Dog Park & Sculpture Garden"],
        Social: ["Bar K St. Louis", "Zoomies Pet Cafe + Boutique", "Rockwell Beer Garden"]
    };  
    
    const displayActivities = () => {
        if (!activityType) {
            setError("Please, select an activity to get started!");
            return;
        }
        setError("");
        setLoading(true)       
        setTimeout(() => {
            setDestination(destinationNames[activityType]);
            setLoading(false)
        }, 2000);
    };    
    
    
    return (
        <div className="selected-destination">
            <h2>{idealInfo}</h2>
            <h2>Here are some places you can go with your pup based on your search!</h2>
            <label>
                <h2>Select the type of activity you are interested in:</h2>
                <select className="drop-menu" value={activityType} onChange={(event) => setActivityType(event.target.value)}>
                    <option value="">--Doggy Destinations--</option>
                    <option value="Outdoor">Outdoor Adventures</option>
                    <option value="Social">Social Settings for both of you!</option>
                </select> 
            </label>
            <div>
                { loading ? <RiseLoader loading={loading} /> :
                <button onClick={displayActivities}>Display Pup Activities!</button>}                
            </div>
            {error && <p style={{color: "red"}}>{error}</p>} 

            {destination.length > 0 && (                                               
                <div className="selected">
                    <h2>Here are the Doggy Destinations in the category you selected:</h2>
                    <ul>
                        {destination.map((dest, index) => (
                            <Link to="/doggyDestinations"><li key={index}>{dest}</li></Link>
                        ))}              
                    </ul>
                </div>
            )}                                                  
                                   
            <div>
                <img className="image" src={image} width="200" height="225" alt="Dog in car" />
                <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />
                <img className="dogPic" src={dogPic} width="325" height="225"  alt="Four Dogs on a Log" /><br />              
            </div>
        </div>        
    );
};


export default SelectedDestination;    


