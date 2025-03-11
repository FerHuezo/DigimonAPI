

// consultar la api de dragon ball utilizando fetch

const getDigimons = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        data.forEach(digimon => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="${digimon.img}" alt="${digimon.name}" class="w-32 aspect-square object-cover">

                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${digimon.name}</h2>
                        <p class="text-gray-700">${digimon.level}</p>
                    </div>
                </div>  
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
};

getDigimons();

