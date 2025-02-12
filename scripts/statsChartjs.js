let myChartInstance = null;

function showStatsChart(i) {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    if (myChartInstance) {
        myChartInstance.destroy();
    }

    myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: currentPokemonDataList[i].stats.map(stat => stat.stat.name.toUpperCase()),
            datasets: [{
                data: currentPokemonDataList[i].stats.map(stat => stat.base_stat),
                borderWidth: 2,
                barThickness: 25,
                maxBarThickness: 45,
                categoryPercentage: 0.8,  
                barPercentage: 0.9,  
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)' 
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderRadius: 10,
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },
        options: {
            maintainAspectRatio: false,  
            indexAxis: 'y',
            layout: {
                padding: 20
            },
            animation: false,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: {
                        font: { size: 14, weight: 'bold' },
                        color: 'white'
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: {
                        font: { size: 14, weight: 'bold' },
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: { size: 16 },
                    bodyFont: { size: 14 }
                }
            }
        }
    });
}
