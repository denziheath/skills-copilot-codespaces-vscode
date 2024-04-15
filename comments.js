// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a list of comments
const comments = [
    {id: 1, author: 'Dale', text: 'This is the first comment'},
    {id: 2, author: 'Jane', text: 'This is the second comment'},
    {id: 3, author: 'John', text: 'This is the third comment'}
];

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
    }
    res.send(comment);
});

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,}
    });