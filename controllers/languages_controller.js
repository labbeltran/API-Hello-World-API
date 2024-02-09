const express = require('express')
const languages = express.Router()
const Language= require(`./models/language.js`)

//Middleware

//Routes
languages.get('/seed', async (req, res) => {
    try {
        s
        await Language.insertMany([...]);
        res.json({
            message: "Seed successful!"
        });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: error.message });
    }
});

//Index
languages.get(`/`, async (req, res)=>{
    try{
        const foundLanguages= await Language.find()
        res.json(foundLanguages)
    }
    catch{error}{
        console.error(`Error`, error)
        res.status(500).render(`error`, {error:error})
    }
})


//Show
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name.toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage);
        })
        .catch(error => {
            console.error('Error', error);
            res.status(500).json({ error: error.message });
        });
});

// Languages: 
const languagesController = require('./controllers/languages_controller.js')
app.use('/languages', languagesController)


//Listen
module.exports= languages