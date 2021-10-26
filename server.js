const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super()
        process.nextTick(() => {
            this.emit('response', 'Type')
        })
        client.on('command', (cmd, args) => {
            switch (cmd) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete': 
                    this[cmd](args)
                    break;
            
                default:
                    this.emit('response', 'Unknown command ...')
                    break;
            }
        })
    }

    help() {
        this.emit('response', 'help ...');
    }

    add(args) {
        this.emit('response', args.join(' '));
    }

    ls() {
        this.emit('response', 'ls ...');
    }

    delete() {
        this.emit('response', 'delete ...');
    }

}



module.exports = (client) => new Server(client)