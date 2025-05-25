import { useState, useRef } from "react";
import { useParams } from "react-router";
import "./Form.css";
import { Link } from "react-router";
import SelectedDestination from "./SelectedDestination";
import pupData from "../assets/data.json"


export default function SearchForm() {

    const [formData, setFormData] = useState({
        pupName: "",
        dogType: "",
        activity: "",
        zipCode: "",
    });

    const {searchForm} = useParams();

    const [ info, setInfo ] = useState({pupData});

    const [ activityType, setActivityType ] = useState("");

    const handleUpdateActivity = (pupActivity) => {
        setInfo(prevState => {
            return { ...prevState, activity: pupActivity,};
        });
    };
        
    const handleActivityChange = (event) => {
        event.preventDefault();
        let pupActivity = (event.target.value);
        setActivityType(pupActivity);
        props.updateActivity(pupActivity);
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value,}));
    }; 
    
    const handleSubmit = (event) => {
        event.preventDefault()
    };


    return (

        <div style={{textAlign: "center", marginTop: "20px"}}>
        <p className="appIntro">
            This app is created to help dog owners seek out places that they can go and take their puppers with them.  Whether you are looking for an outdoor dog park to give your dog some exercise, or maybe you are wanting to get out and socialize with other dog owners? Our search form below is all you need to fill out to get you to your desired "Doggy Destination!
        </p>        
        <h2>{searchForm}</h2>
        
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
                <input placeholder="Type of Pup Activity: Outdoor or Social" type="text" name="activity" value={activityType}
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
                <Link to="/pupPlaces"><button type="submit">Submit Form</button></Link>
            </div>  
            <SelectedDestination info={info} updateActivity={handleUpdateActivity} />
        </div>
    );
};