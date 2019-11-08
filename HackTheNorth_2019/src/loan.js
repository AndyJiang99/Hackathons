function displayLineChart() {
  var data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
          {
              label: "Prime and Fibonacci",
              fillColor: "rgba(18,66,42,0.2)",
              strokeColor: "rgba(18,66,42,1)",
              pointColor: "rgba(0, 0, 0, 1)",
              pointStrokeColor: "#fff",

              data: [26000, 24343, 22094, 21065, 19673, 17834]
          }
      ]
  };
  var ctx = document.getElementById("lineChart").getContext("2d");
  var options = { };
  var lineChart = new Chart(ctx).Line(data, options);
}
displayLineChart();
