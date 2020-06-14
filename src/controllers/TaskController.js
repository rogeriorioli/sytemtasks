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
    },
    async update(req, res) {
        const user_id = req.headers.token
        const {id} = req.params;
        const { title, description, deadline, status } = req.body
        if(!user_id) {
            return res.status(400).json({err : 'not permited '})
        }
        const task = await database('tasks')
        .where({id})
        .update({
            title,
            description,
            deadline,
            status    
        })
      

        return res.json({message : `task :  ${title}  edited susseful`,})
    },
    async delete(req, res) {
        const user_id = req.headers.token
        const {id} = req.params;

        if(!user_id) {
            return res.status(400).json({err : 'not permited '})
        }
        const task = await database('tasks')
        .where({id}).delete()
      

        return res.json({message : `task :  ${id}  deleted susseful`,})
    }
}