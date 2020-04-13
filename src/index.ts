import 'source-map-support/register' // another option is to use `new webpack.BannerPlugin('require("source-map-support").install();', {raw: true,entryOnly: false})`

import { Handler } from 'aws-lambda'
import { createServer } from './server'

// const Server = require('bittorrent-tracker').Server;

// const server = new Server({
//   //   udp: true, // enable udp server? [default=true]
//   http: true, // enable http server? [default=true]
//   //   ws: true, // enable websocket server? [default=true]
//   stats: true, // enable web-based statistics? [default=true]
//   filter: function (infoHash, params, cb) {
//     // Blacklist/whitelist function for allowing/disallowing torrents. If this option is
//     // omitted, all torrents are allowed. It is possible to interface with a database or
//     // external system before deciding to allow/deny, because this function is async.

//     // It is possible to block by peer id (whitelisting torrent clients) or by secret
//     // key (private trackers). Full access to the original HTTP/UDP request parameters
//     // are available in `params`.

//     // This example only allows one torrent.
//     console.log('🗳', { infoHash, params });

//     // var allowed = (infoHash === 'aaa67059ed6bd08362da625b3ae77f6f4a075aaa')
//     // if (allowed) {
//     //   // If the callback is passed `null`, the torrent will be allowed.
//     cb(null);
//     // } else {
//     // If the callback is passed an `Error` object, the torrent will be disallowed
//     // and the error's `message` property will be given as the reason.
//     //   cb(new Error('disallowed torrent'))
//     // }
//   },
// });

// // Internal http, udp, and websocket servers exposed as public properties.
// console.log(server.http);
// // server.udp;
// // server.ws;

// server.on('error', function (err) {
//   // fatal server error!
//   console.log(err.message);
// });

// server.on('warning', function (err) {
//   // client sent bad data. probably not a problem, just a buggy client.
//   console.log(err.message);
// });

// server.on('listening', function () {
//   // fired when all requested servers are listening
//   console.log('listening on http port:' + server.http.address().port);
//   //   console.log('listening on udp port:' + server.udp.address().port);
// });

// const log = (type) => (...args) => {
//   console.log(`📨 ${type}`, args);
//   console.log('🌪', server.torrents);
// };

// // start tracker server listening! Use 0 to listen on a random free port.
// const port = 8000;
// const hostname = 'localhost';
// const onlistening = log('onlistening');

// server.listen(port, hostname, onlistening);

// // listen for individual tracker messages from peers:
// server.on('start', log('start'));

// server.on('complete', log('complete'));
// server.on('update', log('update'));
// server.on('stop', log('stop'));

// get info hashes for all torrents in the tracker server
// Object.keys(server.torrents);

// get the number of seeders for a particular torrent
// server.torrents[infoHash].complete;

// get the number of leechers for a particular torrent
// server.torrents[infoHash].incomplete;
// get the peers who are in a particular torrent swarm
// server.torrents[infoHash].peers;

export const handler: Handler = async (event, context) => {
  console.log('ℹ️', { event, context })

  const server = createServer()

  return { statusCode: 200, body: '👋🌍' }
}
