const database = require('../database');



module.exports = {
    async index(req, res) {

        const user_id = req.headers.token

        if(!user_id) {
            return res.status(400).json({err : 'not permited '})
        }
        
        const tasks = await database('tasks')
        .where('user_id', user_id)
        .select('*')

        return res.json(tasks)
    }
}