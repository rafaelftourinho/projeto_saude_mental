const { Router } = require('express');
const registrationContoller = require('../controllers/registration.controller');

const route = Router();

route.get('/', registrationContoller.getAllInfos);
route.get('/:id', registrationContoller.getInfoById);
route.post('/insert', registrationContoller.insertInfo);
route.delete('/:id', registrationContoller.deleteInfo);

module.exports = route;
