// Require the nodejs amqp protocol client
const amqp = require("amqplib");

// Prepare the message to be published
const msg = { number: 19 };

// Start the connection with the RabbitMQ server (spun by docker)
connect();

// Define the connect function
async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log(`Job send successfully ${msg.number}`);
  } catch (ex) {
    console.error(ex);
  }
}
