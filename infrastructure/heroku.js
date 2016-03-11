var heroin = require('heroin-js');

var configurator = heroin("019205f3-d373-4cc0-8e6a-6e766a5eb014");

//configurator.export('superswag').then(function(result) {
//    console.log(result);
//});
// MONGOLAB_URI: 'mongodb://heroku_q9ksp8tv:jrqthlm2jtb468sns9s03dmthb@ds041494.mlab.com:41494/heroku_q9ksp8tv' },

var prod = { name: 'superswagtest',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        NODE_ENV:"TEST"},
        addons: { mongolab: { plan: 'mongolab:sandbox' } },
        collaborators: [ 'thomashafsaas@gmail.com', 'janrobert.n@gmail.com' ],
        features:
    {   'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
        formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
        log_drains: [],
        domains: [ 'superswagtest.herokuapp.com' ]
};

configurator(prod);


