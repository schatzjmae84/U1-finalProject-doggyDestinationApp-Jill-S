import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router";


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

    const handleActivityChange = (event) => {
        event.preventDefault();
        let pupActivity = (event.target.value);
        setActivityInput(pupActivity);
        props.updateActivity(pupActivity);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };    
    
          
    return (

        <div>  
            <h2>{pupPlaces}</h2>      
        <div className="form-box">
        <form onSubmit={handleSubmit}>
            <div className="field1">
            <h1>Pup Place Participant Form</h1>
            <label>                
                <input placeholder="Pup's Name" type="text" name="pupName" value={formData.pupName}
                onChange={handleChange}/>
            </label><br />
            <label>                
                <input placeholder="Type of Dog" type="text" name="dogType" value={formData.dogType}
                onChange={handleChange}/>
            </label><br />
            <label>                
                <input placeholder="Type of Pup Activity: Outdoor or Social" type="text" name="activity" value={activityInput} onChange={handleActivityChange}/>
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
                <p>Type of Pup Activity: {activityInput}</p>
                <p>Zip Code for Search: {formData.zipCode}</p>
            </div>
            <div>
                <button type="submit" onClick={handleActivityChange}>Submit Form</button>
            </div>  
            <div>
                <Link to="/idealInfo"><button>Continue to Pup Activity Info!</button></Link> 
            </div>      
        </div>
    );

};


export default DestinationInfo;