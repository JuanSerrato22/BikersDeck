document.addEventListener('DOMContentLoaded', () => {
  const playersContainer = document.getElementById('playersContainer');
  const startGameBtn = document.getElementById('startGameBtn');

  // Obtener nombres y cantidad de jugadores desde el localStorage o URL
  const params = new URLSearchParams(window.location.search);
  const cantidad = parseInt(params.get('players'));
  const nombres = JSON.parse(localStorage.getItem('nombresJugadores')) || [];

  const avatars = [
    'Img/Avatars/avatar1.png',
    'Img/Avatars/avatar2.png',
    'Img/Avatars/avatar3.png',
    'Img/Avatars/avatar4.png',
    // agrega más si tienes más imágenes
  ];

  // Generar los elementos por jugador
  for (let i = 0; i < cantidad; i++) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player-card');

    const avatarImg = document.createElement('img');
    avatarImg.src = avatars[i % avatars.length];
    avatarImg.alt = `Avatar ${i + 1}`;
    avatarImg.classList.add('avatar-img');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = `Jugador ${i + 1}`;
    nameInput.value = nombres[i] || '';
    nameInput.classList.add('player-name');

    playerDiv.appendChild(avatarImg);
    playerDiv.appendChild(nameInput);
    playersContainer.appendChild(playerDiv);
  }

  startGameBtn.addEventListener('click', () => {
    const jugadores = [];

    document.querySelectorAll('.player-card').forEach(card => {
      const nombre = card.querySelector('input').value.trim();
      const avatar = card.querySelector('img').src;
      jugadores.push({ nombre, avatar });
    });

    localStorage.setItem('jugadoresLobby', JSON.stringify(jugadores));
    window.location.href = 'juego.html'; // o la pantalla del juego real
  });
});
