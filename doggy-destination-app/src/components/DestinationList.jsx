import dogData from "../assets/data.json"
import { useParams } from "react-router"
import { Link } from "react-router"
import image from "../assets/pupPic1.jpg"
import picture from "../assets/pupPic2.jpg"

export default function DestinationList() {

    const {pupPlaces} = useParams();



    return (
        <div>
            <h2>{pupPlaces}</h2>
            <ol>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ol>
            <div>
               <img className="image" src={image} width="200" height="225" alt="Dog in car" />
               <img className="picture" src={picture} width="300" height="225" alt="Happy Dog Play at the Park" />               
            </div>
            <Link to="/searchForm">Return to Search Form</Link>
        </div>
    );

};