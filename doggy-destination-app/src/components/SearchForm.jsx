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
                Pup's Name:
                <input type="text" name="pupName" value={formData.pupName}
                onChange={handleChange}/>
            </label><br />
            <label>
                Type of Dog:
                <input type="text" name="dogType" value={formData.dogType}
                onChange={handleChange}/>
            </label><br />
            <label>
                Type of Pup Activity:
                <input type="text" name="activity" value={formData.activity}
                onChange={handleChange}/>
            </label><br />
            <label>
                Zip Code for Search:
                <input type="text" name="zipCode" value={formData.zipCode}
                onChange={handleChange}/>
            </label>
        </form>
        <h2>REVIEW YOUR SEARCH INPUT BELOW</h2>
        <p>Pup's Name: {formData.pupName}</p>
        <p>Type of Dog: {formData.dogType}</p>
        <p>Type of Pup Activity: {formData.activity}</p>
        <p>Zip Code for Search: {formData.zipCode}</p>
        </div>
    );
};