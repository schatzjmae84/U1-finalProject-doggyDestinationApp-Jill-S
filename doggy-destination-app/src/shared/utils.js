import pupData from "../assets/data.json"

export const filteredDestination = (selectedDestination) => {
    pupData.filter((dest) => {
    return dest.activity === selectedDestination;
    });
};
