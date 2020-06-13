const database = require('../database');

module.exports = {
    async authenticate(req, res) {
        const { username, password  } = req.body;
        const user = await database('users')
        .column('id')
        .where( 'username' , username)
        .where('password', password)
        .select('username', 'password', 'id')
        .first()
        if(!user) {
            return res.status(400).json({err : 'user or password wrong'})
        }
        return res.json({token : user.id})
    }
}