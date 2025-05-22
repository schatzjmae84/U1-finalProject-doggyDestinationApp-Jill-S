import { useParams } from "react-router"

const SelectedDestination = props => {

    const {idealInfo} = useParams();
    

    let { name, description, address, website, activity } = props.destination;

    return (
        <div className="selected-destination">
            <h2>{idealInfo}</h2>
            <h1>Insert Image Later</h1>
        </div>
    );
};


export default SelectedDestination;    


