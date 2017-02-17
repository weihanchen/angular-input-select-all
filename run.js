var express = require('express');
var app = express();
app.use(express.static('./examples'));
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function() {
	console.log(`Example app listening on port ${app.get('port')}!`);
});
