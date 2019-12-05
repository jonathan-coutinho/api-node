const User = require ("../models/User")

module.exports  = {

    async show (req,res) {
        try {
            const {userId} = req.params

            
            const users = await User.find({
                _id: userId
            })
            if (users.length ===0) {
                return res.status(401).json({error:"Nenhum usuário cadastrado com este Id"})
            }
            return res.status(200).json({users})
            

        }catch (err) {
            console.log (err) 
            return res.status(500).json({msg:"Problemas no servidor"})
        }
    },
    async list (req,res) {
        try {
            const users = await User.find()
            return res.status(200).json({users})


        }catch (err) {
            console.log (err) 
            return res.status(500).json({msg:"Problemas no servidor"})
        }
    },
    async create (req,res) {
        try{
            const {nome,email,cargo} = req.body
            const userexist = await User.find ({email})

            if (userexist) {
                return res.status(401).json({error:"Já existe um usuário com este email"})
            }
            const user = await User.create ({nome,email,cargo})
            return res.status(201).json ({user})     
        } catch (err) {
            console.log (err)
            return res.status(500).json ({msg:"Problemas no serivor"})
        }
    
        
    },
    async update (req,res) {

        try{
            const {nome,email,cargo} = req.body
            const {userId} = req.params
            const usereXist = await User.findById({_id: userId})
            if (!usereXist) {
                return res.status (401).json({error:"Não é possível atualizar um usuário não cadastrado"})
            } 
            const user = await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                email,
                cargo
            },{
                new : true
            })
            return res.status(200).json ({user})     
        } catch (err) {
            console.log (err)
            return res.status(500).json ({msg:"Problemas no serivor"})
        }
    
        
    },
    async delete (req,res) {

        try{
            const {userId} = req.params

                const usereXist = await User.findById({_id: userId})
                if (!usereXist) {
                    return res.status (401).json({error:"Não é possível deletar um usuário não cadastrado"})
                } 
            const user = await User.findByIdAndDelete({_id: userId})
           return  res.json ({user})     
        } catch (err) {
            console.log (err)
           return  res.status(500).json ({msg:"Problemas no serivor"})
        }
    
        
    },

}