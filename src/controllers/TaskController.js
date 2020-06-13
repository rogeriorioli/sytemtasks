const database = require('../database');


module.exports = {
    async create(req, res) {
        const user_id = req.headers.token
        const { title, description, deadline } = req.body
        if(!user_id) {
            return res.status(400).json({err : 'not permited '})
        }

        const [id] = await database('tasks').insert({
            title,
            description,
            deadline,
            user_id
            
        })    

        return res.json({id})
    }
}