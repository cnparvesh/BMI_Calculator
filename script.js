
    document.addEventListener("DOMContentLoaded", function () {
      var button = document.getElementById("calcBtn");

      button.addEventListener("click", function () {
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;

        if (height > 0 && weight > 0) {
          var heightInMeters = height / 100;
          var bmi = weight / (heightInMeters * heightInMeters);
          var roundedBMI = Math.round(bmi * 10) / 10;

          var category = "";

          if (bmi < 18.5) {
            category = "Underweight";
          } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal weight";
          } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
          } else {
            category = "Obesity";
          }

          document.getElementById("result").innerText =
            "Your BMI is " + roundedBMI + " (" + category + ")";
        } else {
          document.getElementById("result").innerText =
            "Please enter valid height and weight.";
        }
      });
    });