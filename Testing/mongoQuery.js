
(function(database) {

	var MongoClient = require('mongodb').MongoClient;
	var mongoUrl = "mongodb://user:a110cate@ds027729.mlab.com:27729/testdata";
	var theDb = null;

	database.getDb = function(next) {
		if (theDb) {
			next(null, theDb)
		}
		else {
			MongoClient.connect(mongoUrl, function(err, db) {
				if(err) {
					next(err, null)
				}
				else {
					theDb = {
						db: db, 
						employeeDetails: db.collection('employeeDetails')
					};
					next(null, theDb)
				}
			})
		}
	}

})(module.exports);
