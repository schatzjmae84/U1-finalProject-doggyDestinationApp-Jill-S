import dogData from "../assets/data.json"
import { useParams } from "react-router"
import { Link } from "react-router"
import image from "../assets/pupPic1.jpg"
import picture from "../assets/pupPic2.jpg"

export default function DestinationList() {

    const {pupPlaces} = useParams();



    return (
        
        <div className="container">
            <h2>{pupPlaces}</h2>
            <div>Link1</div>
            <div>Link2</div>
            <div>Link3</div>
            <div>Link4</div>
            <div>Link5</div>
            <div>Link6</div>
            <div><img className="image" src={image} width="200" height="225" alt="Dog in car" /></div>
            <div><img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" /></div>              
            <div><Link to="/searchForm">Return to Search Form</Link></div>
        </div>
    );

};