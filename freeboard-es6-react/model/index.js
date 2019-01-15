// import user from './user';
// import reply from './reply';
// import board from './board';


// export { board, user, reply };

var user = require('./user');

var reply = require('./reply');

var board = require('./board');

module.exports = {
    user: user,
    reply: reply,
    board: board
}
