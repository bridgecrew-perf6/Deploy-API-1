const app = require('express')();

app.get('/', (req, res) => {
    res.send(
        '<a href="/api">API</a>'
    )
});

app.get('/api', (req, res) => {
    res.json({
        name: {
            first: "Om",
            last: "Panda"
        },
        email: "ompanda0910@gmail.com",
        address: {
            street: "Coolidge Hwy",
            city: "Troy",
            state: "MI"
        }
    });
})

app.listen(process.env.PORT || 8080, () => console.log('Server running'));