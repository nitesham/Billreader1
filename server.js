
/**
	Server file to integrate with Heroku.
	Ref: https://medium.com/@nomanyaqoob/how-to-deploy-hybrid-mobile-app-using-ionic-framework-on-heroku-889c2600805b

	_anoopPrasad
**/
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.resolve(__dirname, 'www')));
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function() {
 console.log('listening to Port', app.get('port'));
});