// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create event handler for comment creation
app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    // Emit CommentModerated event
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentModerated',
      data: {
        ...data,
        status
      }
    });
  }
  res.send({});
});

// Start server
app.listen(4003, () => {
  console.log('Listening on 4003');
});