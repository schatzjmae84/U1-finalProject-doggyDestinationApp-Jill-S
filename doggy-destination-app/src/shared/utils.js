import pupData from "../assets/data.json"

export const filteredDestination = (selectedDestination) => {
    const newActivity = pupData.filter((dest) => {
    return dest.activity === selectedDestination;
    });
    setDestination(newActivity);
};
