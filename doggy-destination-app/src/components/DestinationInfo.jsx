import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import image from "../assets/pupPic1.jpg";
import picture from "../assets/pupPic2.jpg";
import dogPic from "../assets/pupPic4.jpg";


const DestinationInfo = (props) => {

    const {pupPlaces} = useParams();

    const [ activityInput, setActivityInput ] = useState("");

    const [formData, setFormData] = useState({
        pupName: "",
        dogType: "",
        activity: "",
        zipCode: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value,}));
    }; 
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }; 

    const handleActivityChange = (event) => {
        event.preventDefault();
        let pupActivity = (event.target.value);
        setActivityInput(pupActivity);
        props.updateActivity(pupActivity);
    };
    
    
          
    return (

        <div>  
            <h2>{pupPlaces}</h2>      
        <div className="form-box">
        <form onSubmit={(event) => {handleSubmit(event)}}>
            <div className="field1">
            <h1>Search Form</h1>
            <label>                
                <input placeholder="Pup's Name" type="text" name="pupName" value={formData.pupName}
                onChange={handleChange}/>
            </label><br />
            <label>                
                <input placeholder="Type of Dog" type="text" name="dogType" value={formData.dogType}
                onChange={handleChange}/>
            </label><br />
            <label>                
                <input placeholder="Type of Pup Activity: Outdoor or Social" type="text" name="activity" value={activityInput}
                onChange={handleActivityChange}/>
            </label><br />
            <label>                
                <input placeholder="Zip Code for Search" type="text" name="zipCode" value={formData.zipCode}
                onChange={handleChange}/>
            </label>
            </div>
        </form>
        </div>
            <h2>Review Your Search Input Below</h2>
            <div className="input">
                <p>Pup's Name: {formData.pupName}</p>
                <p>Type of Dog: {formData.dogType}</p>
                <p>Type of Pup Activity: {formData.activity}</p>
                <p>Zip Code for Search: {formData.zipCode}</p>
            </div>
            <div>
                <button type="submit" onClick={handleActivityChange}>Submit Form</button>
            </div>
        
        <div>
            
            <div className="list-container">
            <div className="item1">Here are some places you can go with your pup based on your search!</div>
            {props.type === "outdoor" && <div className="item2"></div>}
            <div className="item3"></div>
            <div className="item4"></div>
            {props.type === "social" && <div className="item5"></div>}
            <div className="item6"></div>
            <div className="item7"></div>
            </div>
            <div><img className="image" src={image} width="200" height="225" alt="Dog in car" />
            <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />
            <img className="dogPic" src={dogPic} width="325" height="225"  alt="Four Dogs on a Log" /><br />              
            <Link to="/searchForm"><button>Return to Search Form</button></Link>
            </div>
        </div>
        </div>
    );

};

export default DestinationInfo;