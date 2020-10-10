const mongoose = require('mongoose');
const { store } = require('c:/projects/short.me/backend/src/controllers/usercontroller');
require('../models/Grammar');
const grammar = mongoose.model('Grammar');

module.exports = {
    async index(req, res){
        const words = await grammar.find();
        res.send(words);
    },
    async store(req, res){
        const {word, type} = req.body;
        const newWord = new grammar({
            word,
            type,
            translations:{
                English:"Test"
            }
        });

        try{
            const stored = await newWord.save();
            res.send(stored);
        }catch(err){
            res.status(400).send(err);
        }

    },
}