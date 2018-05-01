var cluster = require('cluster');
if (cluster.isMaster)
{
    for (var i = 0; i < 2; ++i)
        cluster.fork();
} else {
    setInterval(function () {
        console.log('Running', new Date());
    }, 1000);
}