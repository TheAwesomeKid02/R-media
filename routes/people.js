const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/', (req, res) => {
    res.render('people/index');
});

router.get('/new', (req, res) => {
    res.render('people/new', { person: new Person() });
});

router.post('/', (req, res) => {
    const person = new Person({
        name: req.body.name,
        password: req.body.password
    });
    person.save((err, newPerson) => {
        if(err) {
            let locals = { errorMessage : `something went wrong` }
            res.render('people/new', {
                person: person,
                locals
            });
        } else {
            //res.redirect(`people/${newPerson.id}`)
            res.redirect(`people`);
        }
    });
});

module.exports = router;