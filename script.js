// function lengthConverter(valNum) {
//     document.getElementById("outputMeters").innerHTML = valNum /0.022046;

// }

function calculateBmi() {
    var height = document.getElementById('height').value
    var unit = document.getElementById('unit').value
    var weight = document.getElementById('weight').value
    var heightInMeters;

    if (unit === 'inch') {
        // Convert inch to meters (1 inch = 0.0254 meters)
        heightInMeters = height * 0.0254;
    } else if (unit === 'feet') {
        // Convert feet to meters (1 foot = 0.3048 meters)
        heightInMeters = height * 0.3048;
    } else if (unit === 'cm') {
        // Convert centimeter to meters (1 cm = 0.01 meters)
        heightInMeters = height * 0.01;
    } else {
        alert('Invalid unit selected!');
        return;
    }



    var bmi = (weight / (height * height))

    document.getElementById('heading').innerHTML = 'your BMI is:'
    document.getElementById('bmi-output').innerHTML = (bmi)
}

