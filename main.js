/* const bikes = [
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
    return {minWeight, bikeName}
}

const bikeList = minoWeight();
document.getElementById("bike_name").innerHTML = bikeList.bikeName
document.getElementById("bike_weight").innerHTML = bikeList.minWeight
 */

const teams = [
    {
        name: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

for (let i = 0; i < teams.length; i++) {
    teams[i].falliSubiti = Math.floor(Math.random() * 100) + 1;
    teams[i].puntiFatti = Math.floor(Math.random() * 100) + 1;

}
console.log(teams)
