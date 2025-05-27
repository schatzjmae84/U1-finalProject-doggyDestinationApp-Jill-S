import { useParams } from "react-router"
import image from "../assets/pupPic1.jpg";
import picture from "../assets/pupPic2.jpg";
import dogPic from "../assets/pupPic4.jpg";

const SelectedDestination = (props) => {

    const {idealInfo} = useParams();

    
    
    return (
        <div className="selected-destination">
            <h2>{idealInfo}</h2>
            <h2>Here are some places you can go with your pup based on your search!</h2>
             
            
            <div><img className="image" src={image} width="200" height="225" alt="Dog in car" />
            <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />
            <img className="dogPic" src={dogPic} width="325" height="225"  alt="Four Dogs on a Log" /><br />              
            </div>
        </div>        
    );
};


export default SelectedDestination;    


