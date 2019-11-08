function displayBarChart() {
  var barChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June"
    ],
    datasets: [
      {
        label: "American Express",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [3, 5, 6, 7,3, 5, 6, 7]
      },
      {
        label: "Mastercard",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [4, 7, 3, 6, 10,7,4,6]
      },
      {
        label: "Paypal",
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        data: [10,7,4,6,9,7,3,10]
      },
      {
        label: "TD",
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        data: [7,4,6,9,7,3,10,2]
      },
      {
        label: "Visa",
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 1,
        data: [6,9,7,3,10,7,4,6]
      }
    ]
  };

  var chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  var ctx = document.getElementById("barChart").getContext("2d");
  var barChart = new Chart(ctx).Bar(barChartData, chartOptions);
};
