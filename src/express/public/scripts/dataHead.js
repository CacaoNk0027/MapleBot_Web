async function clientUser() {
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=client').then(c => c.json())
    document.getElementById('author').content = clientUser_.username
};
clientUser()