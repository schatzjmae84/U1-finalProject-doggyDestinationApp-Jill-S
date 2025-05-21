import dogData from "../assets/data.json"
import { useParams } from "react-router"
import { Link } from "react-router"
import image from "../assets/pupPic1.jpg"
import picture from "../assets/pupPic2.jpg"
import dogPic from "../assets/pupPic4.jpg"

export default function DestinationList() {

    const {pupPlaces} = useParams();



    return (
        
        <div>
            <h2>{pupPlaces}</h2>
            <div className="container">
            <div className="item1">Here are some places you can go with your pup based on your search!</div>
            <div className="item2">Link2</div>
            <div className="item3">Link3</div>
            <div className="item4">Link4</div>
            <div className="item5">Link5</div>
            <div className="item6">Link6</div>
            <div className="item7">Link7</div>
            </div>
            <div><img className="image" src={image} width="200" height="225" alt="Dog in car" />
            <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />
            <img className="dogPic" src={dogPic} width="325" height="225"  alt="Four Dogs on a Log" /><br />              
            <Link to="/searchForm">Return to Search Form</Link>
            </div>
        </div>
    );

};