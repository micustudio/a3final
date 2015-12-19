var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Day: String,
  Sales: String,
  employeeExpenses: String
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);