document.addEventListener("DOMContentLoaded", function () {
    // Line Chart
    (function renderLineChart() {
      var lineCanvas = document.getElementById("chartjs-dashboard-line");
      if (lineCanvas) {
        var ctx = lineCanvas.getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 225);
        gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
        gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
  
        new Chart(lineCanvas, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Sales ($)",
                fill: true,
                backgroundColor: gradient,
                borderColor: window.theme.primary,
                data: [
                  2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327,
                ],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                grid: { display: false },
              },
              y: {
                ticks: { stepSize: 1000 },
                grid: { borderDash: [3, 3] },
              },
            },
          },
        });
      }
    })();
  
    // Pie Chart
    (function renderPieChart() {
      var pieCanvas = document.getElementById("chartjs-dashboard-pie");
      if (pieCanvas) {
        new Chart(pieCanvas, {
          type: "pie",
          data: {
            labels: ["Chrome", "Firefox", "IE"],
            datasets: [
              {
                data: [4306, 3801, 1689],
                backgroundColor: [
                  window.theme.primary,
                  window.theme.warning,
                  window.theme.danger,
                ],
                borderWidth: 5,
              },
            ],
          },
          options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            cutoutPercentage: 75,
          },
        });
      }
    })();
  
    // Bar Chart
    (function renderBarChart() {
      var barCanvas = document.getElementById("chartjs-dashboard-bar");
      if (barCanvas) {
        new Chart(barCanvas, {
          type: "bar",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "This year",
                backgroundColor: window.theme.primary,
                borderColor: window.theme.primary,
                hoverBackgroundColor: window.theme.primary,
                hoverBorderColor: window.theme.primary,
                data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                barPercentage: 0.75,
                categoryPercentage: 0.5,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                grid: { display: false },
                ticks: { stepSize: 20 },
              },
              x: {
                grid: { color: "transparent" },
              },
            },
          },
        });
      }
    })();
  
    // World Map
    (function renderWorldMap() {
      var mapElement = document.getElementById("world_map");
      if (mapElement) {
        var markers = [
          { coords: [31.230391, 121.473701], name: "Shanghai" },
          { coords: [28.704060, 77.102493], name: "Delhi" },
          { coords: [6.524379, 3.379206], name: "Lagos" },
          { coords: [35.689487, 139.691711], name: "Tokyo" },
          { coords: [23.129110, 113.264381], name: "Guangzhou" },
          { coords: [40.7127837, -74.0059413], name: "New York" },
          { coords: [34.052235, -118.243683], name: "Los Angeles" },
          { coords: [41.878113, -87.629799], name: "Chicago" },
          { coords: [51.507351, -0.127758], name: "London" },
          { coords: [40.416775, -3.703790], name: "Madrid" },
        ];
  
        var map = new jsVectorMap({
          map: "world",
          selector: "#world_map",
          zoomButtons: true,
          markers: markers,
          markerStyle: {
            initial: {
              r: 9,
              strokeWidth: 7,
              strokeOpacity: 0.4,
              fill: window.theme.primary,
            },
            hover: {
              fill: window.theme.primary,
              stroke: window.theme.primary,
            },
          },
          zoomOnScroll: false,
        });
  
        window.addEventListener("resize", () => {
          map.updateSize();
        });
      }
    })();
  
    // Date Picker
    (function renderDatePicker() {
      var datePicker = document.getElementById("datetimepicker-dashboard");
      if (datePicker) {
        var date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
        var defaultDate =
          date.getUTCFullYear() +
          "-" +
          (date.getUTCMonth() + 1) +
          "-" +
          date.getUTCDate();
  
        datePicker.flatpickr({
          inline: true,
          prevArrow: "<span title=\"Previous month\">&laquo;</span>",
          nextArrow: "<span title=\"Next month\">&raquo;</span>",
          defaultDate: defaultDate,
        });
      }
    })();
  });
  