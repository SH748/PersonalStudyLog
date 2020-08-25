const pubsub = require ("pubsub-js")

const Topic = "Message"

function getMessage(message,data){
    console.log(message,data);
}
pubsub.subscribe(Topic,getMessage)

// pubsub.publish(Topic,"this is a message")
pubsub.publishSync(Topic,"this is a message")
console.log('something');
