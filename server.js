"use strict"

var billreaderapp = require('express'),
billreaderapp = express();
billreaderapp.use(express.static('www'));
billreaderapp.set('port', process.env.PORT || 5000);
billreaderapp.listen(billreaderapp.get('port'), function () {
    console.log('Express server listening on port ' + billreaderapp.get('port'));
});