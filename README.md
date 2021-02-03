# rabbitmq

## Demonstration of the RabbitMQ system design using Node.js publisher and consumer.

The Node.js clients written here depend on a spun up docker RabbitMQ server listening on port 5672

To spin up the docker RabbitMQ server, run the following command:

`docker run --name rabbitmq -p 5672:5672 rabbitmq`
