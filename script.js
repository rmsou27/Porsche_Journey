
const modelsData = [
    { name: " Prosche 356", year: "1948", image: "356.jpg", description: "No. 1 Roadster (1948), is recognized as the first production sports car to bear the Porsche name " },
    { name: "Porsche 911", year: "1964", image: "911.jpg", description: "The Porsche 911 was equipped with a 2.0-liter flat-6 rear engine. This engine produced 130 hp and 129 lb-ft of torque. Its cost around 21,900 Deutschmarks which equals to 11,197 Euros(10,36,203 in Indian Rupee) " },
    { name: "Porsche 718 Cayman", year: "1990", image: "718.jpg", description: "The 718 Cayman is a mid-engine, rear-wheel-drive sports car with 2.0-liter turbocharged four-cylinder boxer engine which producing around 300 PS with 380 Nm of torque." },
    { name: "Porsche Cayenne", year: "2000", image: "cayenne.avif", description: "The Cayenne is  first mid-size luxury SUV built by Porsche group, including 3.0-liter V6 turbocharged engine which produces around 348 HP(PS), as well as plug-in hybrid variants (0-100 km/h) in 6 sec with 8-speed Tiptronic S automatic transmission" },
    { name: "Porsche Panamera", year: "2009", image: "panamera.webp", description: "The Porsche Panamera it is first four door sedan consist of 4.8-liter twin-turbo V8 engine which produces ranging from 500 to 570 HP in the Turbo S versions, with ranging from roughly 700 to 800 Nm torque. sports car performance with luxury sedan." },
    { name: "Porsche Macan", year: "2014", image: "Macan.jpg", description: "The Prosche Macan debuted in 2014 with 3.6-liter V6 twin-turbo which produces 400HP with 550 Nm of torque. 7-speed PDK (Porsche Doppelkupplung) dual-clutch automatic transmission with All-wheel drive (AWD) " },
];

const enginesData = [
    { name: "Flat-six Engine", image: "flat-6.jpg", description: "The Porsche flat-six engine series is a line of mechanically similar, naturally aspirated and sometimes turbocharged, flat-six boxer engines, produced by Porsche for almost 60 consecutive years, since 1963.The engine is an evolution of the flat-four boxer used in the original Volkswagen Beetle" },
    { name: "3.0 V6 turbocharged Engine",image: "3.0 litre v6.jpg", description: "The Porsche 3.0 litre V6 turbocharged petrol engine with a gasolineIt delivers 260 kW (354 PS) and has a maximum torque of 480 Nm, representing an increase of 10 kW (14 PS) and 20 Nm of torque." },
    { name: " V8 Engine",image: "V8.jpg", description:"Porsche began a fresh chapter in engine building with the V-engine: The eight-cylinder engine was made up of essentially all lightweight alloys."
}];

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
            <div class="engine-item-inner">
                <div class="engine-item-front">
                    <h3>${engine.name}</h3>
                    <img src="${engine.image}" alt="${engine.name}">
                </div>
                <div class="engine-item-back">
                    <p>${engine.description}</p>
                </div>
            </div>
        `;
 
        engineItem.addEventListener('click', () => {
            engineItem.classList.toggle('flipped');
        });

        enginesContainer.appendChild(engineItem);
    });
}


populateModels();
populateEngines();
