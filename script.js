// script.js
const modelsData = [
    { name: "[Model 1 Name]", year: "[Year]", image: "model1.jpg", description: "[Model 1 Description]" },
    { name: "[Model 2 Name]", year: "[Year]", image: "model2.jpg", description: "[Model 2 Description]" },
    // Add more models...
];

const enginesData = [
    { name: "[Engine 1 Name]", year: "[Year]", image: "engine1.jpg", description: "[Engine 1 Description]" },
    { name: "[Engine 2 Name]", year: "[Year]", image: "engine2.jpg", description: "[Engine 2 Description]" },
    // Add more engines...
];

function populateModels() {
    const modelsContainer = document.querySelector('.models-container');
    modelsData.forEach(model => {
        const modelItem = document.createElement('div');
        modelItem.classList.add('model-item');
        modelItem.innerHTML = `
            <h3>${model.name} (${model.year})</h3>
            <img src="${model.image}" alt="${model.name}">
            <p>${model.description}</p>
        `;
        modelsContainer.appendChild(modelItem);
    });
}

function populateEngines() {
    const enginesContainer = document.querySelector('.engines-container');
    enginesData.forEach(engine => {
        const engineItem = document.createElement('div');
        engineItem.classList.add('engine-item');
        engineItem.innerHTML = `
            <h3>${engine.name} (${engine.year})</h3>
            <img src="${engine.image}" alt="${engine.name}">
            <p>${engine.description}</p>
        `;
        enginesContainer.appendChild(engineItem);
    });
}

populateModels();
populateEngines();