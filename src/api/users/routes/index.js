const getAllRoute = require('./getAll');
const createRoute = require('./create');
const updateRoute = require('./update');
const deleteRoute = require('./delete');

module.exports = [getAllRoute, createRoute, updateRoute, deleteRoute];
