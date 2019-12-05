const Persona = require ("../models/Persona")

module.exports  = {

    async show (req,res) {
        try {
            const {personaId} = req.params

            
            const personas = await Persona.find({
                _id: personaId
            })
            if (personas.length ===0) {
                return res.status(401).json({error:"Nenhum usuário cadastrado com este Id"})
            }
            return res.status(200).json({personas})
            

        }catch (err) {
            console.log (err) 
            return res.status(500).json({msg:"Problemas no servidor"})
        }
    },
    async list (req,res) {
        try {
            const personas = await Persona.find()
            return res.status(200).json({personas})


        }catch (err) {
            console.log (err) 
            return res.status(500).json({msg:"Problemas no servidor"})
        }
    },
    async create (req,res) {
        try{
            const {owner, name, sex, age, role, where_works, scolarship, communication_means,dreams, problems, company_help, 
            company_workers, company_role, image} = req.body

            const persona = await Persona.create ({owner, name, sex, age, role, where_works, scolarship, communication_means,dreams, problems, company_help, 
            company_workers, company_role, image})
            return res.status(201).json ({persona})     
        } catch (err) {
            console.log (err)
            return res.status(500).json ({msg:"Problemas no serivor"})
        }
    
        
    },
    async update (req,res) {

        try{
            const {name, sex, age, role, where_works, scolarship, communication_means,dreams, problems, company_help, 
                company_workers, company_role, image} = req.body

            const {personaId} = req.params

            const personaeXist = await Persona.findById({_id: personaId})
            if (!personaeXist) {
                return res.status (401).json({error:"Não é possível atualizar uma persona não cadastrado"})
            } 
            const persona = await Persona.findByIdAndUpdate({
                _id: personaId
            },{
                name, sex, age, role, where_works, scolarship, communication_means,dreams, problems, company_help, 
            company_workers, company_role, image
            },{
                new : true
            })
            return res.status(200).json ({persona})     
        } catch (err) {
            console.log (err)
            return res.status(500).json ({msg:"Problemas no serivor"})
        }
    
        
    },
    async delete (req,res) {

        try{
            const {personaId} = req.params

                const personaeXist = await Persona.findById({_id: personaId})
                if (!personaeXist) {
                    return res.status (401).json({error:"Não é possível deletar uma persona não cadastrado"})
                } 
            const persona = await Persona.findByIdAndDelete({_id: personaId})
           return  res.json ({persona})     
        } catch (err) {
            console.log (err)
           return  res.status(500).json ({msg:"Problemas no serivor"})
        }
    
        
    },

}