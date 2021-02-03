// Require the nodejs amqp protocol client
const amqp = require("amqplib");

// Start the connecttion with the RabbitMQ server (spun by docker)
connect();

// Define the connect function
async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");

    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");
    channel.consume("jobs", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(input);
    });
  } catch (ex) {
    console.error(ex);
  }
}
