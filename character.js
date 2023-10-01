document.addEventListener('DOMContentLoaded', function () {
    // Obtém o ID do personagem da URL
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('id');

    // Lista de personagens (você deve carregar esta lista a partir do endpoint na página anterior)
    const characters = [
        {
            "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
            "name": "Harry Potter",
            "species": "Human",
            "gender": "Male",
            "hairColour": "Black",
            "eyeColour": "Green",
            "actor": "Daniel Radcliffe",
            "image": "https://ik.imagekit.io/hpapi/harry.jpg",
            // Adicione mais informações do personagem aqui
        },
        // Outros personagens
    ];

    // Encontra o personagem com o ID correspondente
    const character = characters.find(char => char.id === characterId);

    // Referência ao elemento do DOM onde os detalhes do personagem serão exibidos
    const characterDetails = document.getElementById('characterDetails');

    // Função para preencher os detalhes do personagem
    function fillCharacterDetails() {
        if (character) {
            characterDetails.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <img src="${character.image}" class="img-thumbnail rounded-circle mx-auto d-block mb-3" alt="${character.name}">
                        <h2 class="card-title text-center">${character.name}</h2>
                        <p class="text-center">ID: ${character.id}</p>
                        <p class="text-center">Espécie: ${character.species}</p>
                        <p class="text-center">Gênero: ${character.gender}</p>
                        <p class="text-center">Cor do Cabelo: ${character.hairColour}</p>
                        <p class="text-center">Cor dos Olhos: ${character.eyeColour}</p>
                        <p class="text-center">Ator: ${character.actor}</p>
                        <!-- Adicione mais informações do personagem aqui -->
                    </div>
                </div>
            `;
        } else {
            characterDetails.innerHTML = '<p>Personagem não encontrado.</p>';
        }
    }

    // Preenche os detalhes do personagem
    fillCharacterDetails();
});
