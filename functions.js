// 1. list function
function list(clients) {
    return clients.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$${client.balance}</strong>
    </li>
  `).join('');
}

// 2. order function
function order(clients, property) {
    return [...clients].sort((a, b) => {
        if (typeof a[property] === 'string') {
            return a[property].localeCompare(b[property]);
        }
        return a[property] - b[property];
    });
}

// 3. total function
function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}

// 4. info function
function info(index) {
    return clients.find(client => client.index === index);
}

// 5. search function
function search(query) {
    const lowerQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
}