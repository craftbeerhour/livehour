if (process.env.NODE_ENV === 'production') {
    //todo add production root container
   // module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev')
}