import { useParams } from "react-router"
import image from "../assets/pupPic1.jpg";
import picture from "../assets/pupPic2.jpg";
import dogPic from "../assets/pupPic4.jpg";
import pupData from "../assets/data.json"
import { useState} from "react";

const SelectedDestination = () => {

    const {idealInfo} = useParams();

    const [ activityType, setActivityType ] = useState("");
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const displayActivities = () => {
        if (!activityType) {
            setError("Please, select an activity to get started!");
            return;
        }
    };

    
    
    return (
        <div className="selected-destination">
            <h2>{idealInfo}</h2>
            <h2>Here are some places you can go with your pup based on your search!</h2>
            <label>
                Select the type of activity you are interested in:
                <select value={activityType} onChange={(event) => setActivityType(event.target.value)}>
                    <option value="">--Doggy Destinations--</option>
                    <option value="Outdoor">Outdoor Adventures</option>
                    <option value="Social">Social Settings for both of you!</option>
                </select> 
                <button onClick={}></button>  
            </label>
            {error && <p style={{color: "red"}}>{error}</p>}          
            <div>
            <img className="image" src={image} width="200" height="225" alt="Dog in car" />
            <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />
            <img className="dogPic" src={dogPic} width="325" height="225"  alt="Four Dogs on a Log" /><br />              
            </div>
        </div>        
    );
};


export default SelectedDestination;    


