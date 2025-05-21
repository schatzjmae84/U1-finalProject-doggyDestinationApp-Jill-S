import dogData from "../assets/data.json"
import { useParams } from "react-router"
import { Link } from "react-router"

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
            <Link to="/searchForm">Return to Search Form</Link>
        </div>
    );

};