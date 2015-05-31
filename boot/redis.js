var URL   = require('url')
  , redis = require('redis'),
    process = require('process');

module.exports = function (config) {

  var client, dockerRedis, url, port, host, db, pass;
  dockerRedis = process.env.REDIS_PORT;

  if (config = config || {}) {
    try {

      url     = URL.parse(config && config.url || dockerRedis || 'redis://localhost:6379');
      port    = url.port;
      host    = url.hostname;
      db      = config.db;
      auth    = config && config.auth;

      options = {
        no_ready_check: true
      }

      client = redis.createClient(port, host, options);

      if (auth) {
        client.auth(auth, function () {});
      }


      if (db) {
        client.select(db);
      }

    } catch (e) {
      throw new Error(e);
    }
  }

  return module.exports = client;
};
