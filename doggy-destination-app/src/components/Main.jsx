import { useState} from "react";
import { useParams } from "react-router";
import "./Form.css";
import { Link } from "react-router";
import pupData from "../assets/data.json"
import DestinationInfo from "./DestinationInfo";
import SelectedDestination from "./SelectedDestination";



export default function Main() {

    const {pupPlaces} = useParams();

    const [ pupInfo, setPupInfo ] = useState(
        pupData.map(object => {
            return { ...object };
        })
    );

    const handleUpdateActivity = (pupActivity) => {
        setPupInfo(prevState => {
            return { ...prevState, activity: pupActivity};            
        });
    }; 

    
    return (

        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h2>{pupPlaces}</h2>
            <p className="appIntro">
                This app is created to help dog owners seek out places that they can go and take their puppers with them.  Whether you are looking for an outdoor dog park to give your dog some exercise, or maybe you are wanting to get out and socialize with other dog owners? Our search form below is all you need to fill out to get you to your desired "Doggy Destination!
            </p> 
                            
            <DestinationInfo updateActivity={handleUpdateActivity} />
            
                
                       
        </div>
    );
};

