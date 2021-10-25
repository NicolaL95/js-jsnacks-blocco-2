const bikes = [
    {
        "name": "bike_1",
        "weight": "30"
    },
    {
        "name": "bike_2",
        "weight": "20"
    },
    {
        "name": "bike_3",
        "weight": "45"
    },
    {
        "name": "bike_4",
        "weight": "82"
    },
]

function minoWeight() {
    let minWeight = 0;
    let bikeName;
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].weight < minWeight | minWeight == 0) {
            minWeight = bikes[i].weight;
            bikeName = bikes[i].name;

        }
    }
    return bikeName;
}
document.getElementById("bike_name").innerHTML = minoWeight();

