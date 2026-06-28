const event = require('events')

const eventHandler = new event.EventEmitter();

eventHandler.on('greet',(name)=>{
    console.log(`${name} called`)
})

eventHandler.emit('greet','abhishek')