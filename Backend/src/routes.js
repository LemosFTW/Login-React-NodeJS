const express = require('express');

const routes = express.Router();

//creating a user to test the constraints
const users = [{
    id: 1,
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
    password: "123456"
}]
    


routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    const finalUser = users.find(user => user.email === email && user.password === password);
    if (!finalUser) 
        return res.status(400).json({ error: 'User not found' });
    

    return res.status(200).json({ finalUser});

});

module.exports = routes;