(function(dataSearch) {

	var database = require('./database');

	dataSearch.addData = function() {
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.employeeDetails.insertOne({
                        Name: 'Anshul',
                        Salary: 1000000,
                        Age: 29
                }, function(err, result) {
                    if(err) {
                        console.log("Data Insertion Failed")
                    } else {
                        console.log("Data Inserted");
                    }
                });

				theDb.db.collection('myNewData').insertOne({
					"Name" : "Mayank",
					"Age": 27
				}, function(err, result) {
						if(err) {
							console.log("Data Insertion Failed")
						} else {
							console.log("Data Inserted");
						}
				});
			} 
		});
	};


	dataSearch.runCursor = function() {
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.employeeDetails.find().toArray(function(err, results) {
					if (err) {
						console.log('Data Fetching Failed');
					} else {
						console.log('Result Count: ' + results.length);
					}
				theDb.db.close();
				});
			}
		});
	}

	dataSearch.findData = function(callback) {
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.employeeDetails.find().toArray(function(err, results) {
					if (err) {
						console.log('Data Fetching Failed');
					} else {
						console.log('Result Count: ' + results.length);
					}
				theDb.db.close();
				})	
			}
		});
	};

	dataSearch.findByName = function(callback) {
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.employeeDetails.delete({"Name": "Mayank", age: 10}, function(err, results) {
					if (!err) {
						callback(results);
					}
					theDb.db.close();
				});
			}
		});
	};

	dataSearch.createEmbeddedDocument = function() {
		console.log('Function Called');
		var dbValue = null;
		database.getDb(function(err, theDb) {
			dbValue = theDb;
			theDb.employeeDetails.insertOne({
				Name: 'Anshul Gupta',
				Age: 28,
				Salary: 100000,
				Address: {
					City: 'Goa',
					Country: 'India'
				}
			}, function(err, result) {
					dbValue.employeeDetails.find({"Address.City": "Goa"}).toArray(function(err, results) {
						console.log('Aggregate Data Count: ' + results.length);
						theDb.db.close();
					});
					
				});
		});
	} 

})(module.exports); 