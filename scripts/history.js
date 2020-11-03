/* using chart.js library */
var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontFamily = "Sen";

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October'],
        datasets: [{
            label: 'Happiness',
            data: [5, 2, 10, 8, 7],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#00FBD4'],
            borderWidth: 1,
            pointBackgroundColor: ['#00FBD4', '#00FBD4', '#00FBD4', '#00FBD4', '#00FBD4'],
        }, {
            label: 'Physical Health',
            data: [3, 8, 7, 4, 5],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#02E1BF'],
            borderWidth: 1,
            pointBackgroundColor: ['#02E1BF', '#02E1BF', '#02E1BF', '#02E1BF', '#02E1BF'],
        }, {
            label: 'Emotional Control',
            data: [10, 5, 7, 4, 8],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#00A88E'],
            borderWidth: 1,
            pointBackgroundColor: ['#00A88E', '#00A88E', '#00A88E', '#00A88E', '#00A88E'],
        }, {
            label: 'Sense of Accomplishment',
            data: [6, 6, 2, 3, 6],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#007765'],
            borderWidth: 1,
            pointBackgroundColor: ['#007765', '#007765', '#007765', '#007765', '#007765'],
        }, {
            label: 'Connectedness',
            data: [7, 4, 5, 9, 9],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#004D41'],
            borderWidth: 1,
            pointBackgroundColor: ['#004D41', '#004D41', '#004D41', '#004D41', '#004D41'],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});