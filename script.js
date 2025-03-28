// script.js
const modelsData = [
    { name: " Prosche 356", year: "1948", image: "1953-porsche-356.jpg", description: "No. 1 Roadster (1948), is recognized as the first production sports car to bear the Porsche name " },
    { name: "Porsche 911", year: "1964", image: "911.jpg", description: "Porsche 911 was equipped with a 2.0-liter flat-6 rear engine. This engine produced 130 hp and 129 lb-ft of torque. Its cost around 21,900 Deutschmarks which equals to 11,197 Euros(10,36,203 in Indian Rupee) " },
    { name: "Porsche 718 Cayman", year: "1990", image: "718.jpg", description: "The 718 Cayman is a mid-engine, rear-wheel-drive sports car with 2.0-liter turbocharged four-cylinder boxer engine which producing around 300 PS with 380 Nm of torque." },
    { name: "Porsche Cayenne", year: "2000", image: "cayenne.avif", description: "The Cayenne is  first mid-size luxury SUV built by Porsche group, including 3.0-liter V6 turbocharged engine which produces around 348 HP(PS), as well as plug-in hybrid variants (0-100 km/h) in 6 sec with 8-speed Tiptronic S automatic transmission" },
    { name: "Porsche Macan", year: "2014", image: "Macan.jpg", description: "The Prosche Macan debuted in 2014 with 3.6-liter V6 twin-turbo which produces 400HP with 550 Nm of torque. 7-speed PDK (Porsche Doppelkupplung) dual-clutch automatic transmission with All-wheel drive (AWD) " },
    { name: "Porsche Cayenne", year: "2000", image: "cayenne.avif", description: "[Model 2 Description]" },
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
            <div class="model-item-inner">
                <div class="model-item-front">
                    <h3>${model.name} (${model.year})</h3>
                    <img src="${model.image}" alt="${model.name}">
                </div>
                <div class="model-item-back">
                    <p>${model.description}</p>
                </div>
            </div>
        `;

        // Add click event to toggle the flip effect
        modelItem.addEventListener('click', () => {
            modelItem.classList.toggle('flipped');
        });

        modelsContainer.appendChild(modelItem);
    }
    );
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
