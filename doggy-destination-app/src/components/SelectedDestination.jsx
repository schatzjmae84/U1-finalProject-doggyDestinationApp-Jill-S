import { useParams } from "react-router"
import Main from "./Main";


const SelectedDestination = (props) => {

    const {idealInfo} = useParams();
    
    return (
        <div className="selected-destination">
            <h2>{idealInfo}</h2>
            <h1>{props.info.name}</h1>
            <ul>
                <li>{props.info.description}</li>
                <li>{props.info.address}</li>
                <li>{props.info.website}</li>
                <li>{props.info.activity}</li>
            </ul>
        </div>
    );
};

//Validation of data types for props
/*SelectedDestination.propTypes = {
    info: PropTypes.object.isRequired,
}; */

export default SelectedDestination;    


