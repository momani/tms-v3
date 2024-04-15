import Chart from "chart.js/auto";

// reading json

// fetch("/28.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const sample = require('../28.json');

// const fs = require('fs');

// // Asynchronous read
// fs.readFile('../28.json', 'utf-8', (err, data1) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return;
//     }
//     const jsonData = JSON.parse(data1);
// });

(async function () {


//******************************** */
// fetch('../28.json') // Replace 'example.json' with the path to your JSON file
//   .then(response => response.json())
//   .then(data => {
//     // 'data' contains the parsed JSON object
//     // You can assign it to a variable or use it as needed
//     const jsonData = data;
//     console.log(jsonData); // or do something else with jsonData
//   })
//   .catch(error => {
//     console.error('Error fetching JSON:', error);
//   });


//*************************************** */


  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2017, count: 28 },
  ];

  const data2 = [
    { year: 2010, count: 5 },
    { year: 2011, count: 3 },
    { year: 2012, count: 77 },
    { year: 2013, count: 33 },
    { year: 2014, count: 11 },
    { year: 2015, count: 30 },
    { year: 2016, count: 11 },  
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "line",
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },

        {
            label: "Acquisitions2 by year",
            data: data2.map((row) => row.count),
          },

        //   {
        //     label: "Acquisitions2 by year",
        //     data: jsonData.map((row) => row.count),
        //   },
          ],
    },
  });
})();
