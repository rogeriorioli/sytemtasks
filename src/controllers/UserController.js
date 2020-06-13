const database = require('../database');

const crypto = require('crypto')


module.exports = {
    async create(req, res) {
        const { username, password } = req.body
        const id = crypto.randomBytes(10).toString('HEX');

        const user = await database('users')
        .column('id')
        .where( 'username' , username)
        .select('username')
        .first()
        if(!user){
            await database('users').insert({
                id,
                username,
                password
                
            })
            return res.json({id})
        }
        return res.status(400).json({err : "user exist in our base"})
    }
}