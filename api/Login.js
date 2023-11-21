

const responseLogin = (db, req, res) => {

    query = 'SELECT * FROM view12 WHERE u_name=\"' + req.body['u_name'] + '\";'
    db.query(query, (err, result) => {
        if(err) {
            res.status(400).json({'message': 'error', 'data': err});
        } else {
            if(result.length === 0) {
                res.status(400).json({'message': 'error', 'data': 'user not found'});
            } else {
                if(result[0]['pass_hash'] === req.body['pass_hash']) {
                    res.status(200).json({'message': 'success', 'data': result[0]});
                } else {
                    res.status(400).json({'message': 'error', 'data': 'password incorrect'});
                }
            }
        }

    })

};

module.exports = {responseLogin};