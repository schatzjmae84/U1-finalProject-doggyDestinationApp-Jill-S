import { useState } from "react";
import { useParams } from "react-router"



export default function SearchForm() {

    const {searchForm} = useParams();
    const [formData, setFormData] = useState({
        pupName: "",
        dogType: "",
        activity: "",
        zipCode: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };


    return (

        <div style={{textAlign: "center", marginTop: "20px"}}>
        <p>
            This app is created to help dog owners seek out places that they can go and take their puppers with them.  Whether you are looking for an outdoor dog park to give your dog some exercise, or maybe you are wanting to get out and socialize with other dog owners? Our search form below is all you need to fill out to get you to your desired "Doggy Destination!
        </p>
        <h2>{searchForm}</h2>
        <h1>Search Form</h1>
        <form>
            <label>
                
            </label>
        </form>

        </div>
    )
}