/* using chart.js library */
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['June', 'July', 'August', 'September', 'October'],
        datasets: [{
            label: 'Your Progress Over Time',
            data: [5, 2, 10, 8, 7],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#00A88E'],
            borderWidth: 1,
            pointBackgroundColor: ['#00A88E', '#00A88E', '#00A88E', '#00A88E', '#00A88E'],
        }, {
            label: 'Progress Over Time',
            data: [3, 8, 7, 4, 5],
            backgroundColor: [ 'rgba(255,255,255,0)'],
            borderColor: ['#00A88E'],
            borderWidth: 1,
            pointBackgroundColor: ['#00A88E', '#00A88E', '#00A88E', '#00A88E', '#00A88E'],
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