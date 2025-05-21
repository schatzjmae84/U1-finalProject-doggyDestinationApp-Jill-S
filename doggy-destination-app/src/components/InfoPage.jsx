import dogData from "../assets/data.json"
import { useParams } from "react-router"

export default function InfoPage () {

    const {idealInfo} = useParams();


    return (

        <div>
            <h2>{idealInfo}</h2>
            <h3>Display selected info from dogData json file</h3>
        </div>

    );
};