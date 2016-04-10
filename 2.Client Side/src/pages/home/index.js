var template = require('./template.marko');

module.exports = function(req,res){
	/*res.write('Hello World');
	res.end();*/
	template.render({
		name : 'Priya',
		colors : ['red' , 'green' , 'blue']
	},res);
};