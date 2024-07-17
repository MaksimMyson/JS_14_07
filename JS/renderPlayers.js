export const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

function addPlayersToDOM(players) {
    const playerBox = document.querySelector('.player_box');
    const playerHtml = players.map((player) => {
        return `<div class="player">
            <h2>${player.name}</h2>
            <p>Тривалість гри: ${player.timePlayed}</p>
            <p>Досвід: ${player.points}</p>
            <p class='online'>${player.online ? "Грає" : "Відпочиває"}</p>
        </div>`;
    }).join('');

    playerBox.innerHTML = playerHtml;
    const onlineElements = document.querySelectorAll('.online');

    onlineElements.forEach((element, index) => {
        if (players[index].online) {
            element.style.color = 'blue';
        } else {
            element.style.color = 'red';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addPlayersToDOM(players);

    const pointsFilterInput = document.getElementById('pointsFillter');
    const pointsFilterValue = document.getElementById('pointsFillterValue');
    const statusFilter = document.getElementById('statusFillter');

    pointsFilterInput.addEventListener('input', () => {
        pointsFilterValue.textContent = pointsFilterInput.value;
        applyFilters();
    });

    statusFilter.addEventListener('change', applyFilters);

    function applyFilters() {
        const pointsFilter = parseInt(pointsFilterInput.value) || 0;
        const statusFilterValue = statusFilter.value;

        let filteredPlayers = players.filter(player => player.points >= pointsFilter);

        if (statusFilterValue === 'active') {
            filteredPlayers = filteredPlayers.filter(player => player.online);
        } else if (statusFilterValue === 'inactive') {
            filteredPlayers = filteredPlayers.filter(player => !player.online);
        }

        addPlayersToDOM(filteredPlayers);
    }
});
