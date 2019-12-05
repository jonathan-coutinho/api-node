const User = require ("../models/User")

module.exports  = {
    async update (req,res) {
        try{
            const {nome,cidade,idade} = req.body
            const user = await User.create ({nome,cidade,idade})
            res.json ({user})     
        } catch (err) {
            console.log (err)
            res.json ({msg:"Problemas no serivor"})
        }
    
        
    }
}