function renderPokemonList() {
    let pokemonListRef = document.getElementById("pokemonList");
    pokemonListRef.innerHTML = "";
    for (let i = 0; i < currentPokemonDataList.length; i++) {
        const onePokemon = currentPokemonDataList[i];
        let template = generateTemplatesForRenderPokemons(i, onePokemon);
        pokemonListRef.innerHTML += template;
    }
}

function toggleAbilityOverlay(i) {
    let overlay = document.getElementById("abilityOverlay");
    overlay.classList.toggle("d_none");
    if (Number.isInteger(i)) {
        currentIndex = i;
        renderOverlay(i);
    }
}

function renderOverlay(i) {
    let overlayRef = document.getElementById("abilityOverlay");
    overlayRef.innerHTML = generateTemplatesForOverlay(i);
    toggleCardContent(2, i);
}

function stopPropation(event) {
    event.stopPropagation();
}

function nextBtnInOverlay() {
    currentIndex++;
    if (currentIndex >= currentPokemonDataList.length) {
        currentIndex = 0;
    }
    renderOverlay(currentIndex);
}

function previousBtnInOverlay() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentPokemonDataList.length - 1;
    }
    renderOverlay(currentIndex);
}

function loadMore() {
    pokeApiOffset += pokeApiLimit;
    fetchPokemonsList();
}

function toggleLoadingSpinner() {
    let overlay = document.getElementById("loadingOverlay");
    overlay.classList.toggle("d_none");
}

function toggleCardContent(buttonId, i) {
    let cardContentRef = document.getElementById("cardContent");
    let templateString = "";
    if (buttonId == 1) {
        templateString = generateTemplatesEvoChain();
        cardContentRef.innerHTML = templateString;
    } else if (buttonId == 2) {
        templateString = generateTemplatesStats(i);
        cardContentRef.innerHTML = templateString;
        showStatsChart(i);
    } else if (buttonId == 3) {
        templateString = generateTemplatesDRITE();
        cardContentRef.innerHTML = templateString;
    }
}

let myChartInstance = null; // Variable, um bestehendes Chart-Objekt zu speichern

function showStatsChart(i) {
    const canvas = document.getElementById('myChart');

    const ctx = canvas.getContext('2d');

    // Falls bereits ein Chart existiert, zerstöre ihn
    if (myChartInstance) {
        myChartInstance.destroy();
    }

    // Neues Chart erstellen und in der Variable speichern
    myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: currentPokemonDataList[i].stats.map(stat => stat.stat.name.toUpperCase()), // Labels für Achse
            datasets: [{
                data: currentPokemonDataList[i].stats.map(stat => stat.base_stat),
                borderWidth: 2,
                barThickness: 25, // Dickere Balken für bessere Sichtbarkeit
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
                borderRadius: 10, // Abgerundete Balken für modernes Design
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
                padding: 20 // Fügt das Padding um das Chart hinzu
            },
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
