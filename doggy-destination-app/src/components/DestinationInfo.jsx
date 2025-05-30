import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce, Zoom } from "react-toastify";


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
        setFormData({ ...formData, [name]: value,});
    };      

    const handleActivityChange = (event) => {
        event.preventDefault();
        let pupActivity = (event.target.value);
        setActivityInput(pupActivity);
        props.updateActivity(pupActivity); 
        console.log("Form Submitted:", pupActivity);       
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();         
    };   
    
    const submitSuccess = () => {
    toast("Thank you!  Your \'Pup Place Participant Form' has been successfully submitted!", {
            className: "success-toast",
            draggable: true,
        });       
    };

    return (

        <div>  
            <h2>{pupPlaces}</h2>      
        <div className="form-box">
        <form onSubmit={handleSubmit}>
            <div className="field1">
            <h1 className="title">Pup Place Participant Form</h1>
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
            <div className="input">
                <h2>Review Your Search Input</h2>
                <p>Pup's Name: {formData.pupName}</p>
                <p>Type of Dog: {formData.dogType}</p>
                <p>Type of Pup Activity: {activityInput}</p>
                <p>Zip Code for Search: {formData.zipCode}</p>
            </div>
            <div>
                <button type="submit" onClick={submitSuccess}>Submit Form</button>
            </div>  
            <div>
                <Link to="/idealInfo"><button>Continue to Pup Activity Info!</button></Link>             
            </div>
            <ToastContainer />      
        </div>
    );

};


export default DestinationInfo;