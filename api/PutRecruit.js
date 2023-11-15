
function responsePutRecruit(db, req, res) {
    query = 'SELECT MAX(id) FROM recruit;';
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).send({ 'message': 'error', 'data': err });
        } else {
            const id = result[0]['MAX(id)'] + 1;
            if (req.body === undefined || req.body['u_name'] === undefined || req.body['pass_hash'] === undefined || req.body['full_name'] === undefined || req.body['recruit_location'] === undefined || req.body['bio'] === undefined || req.body['picture'] === undefined || req.body['recruit_resume'] === undefined || req.body['recruit_status_id'] === undefined) {
                res.status(400).send({ 'message': 'error', 'result': 'u_name, pass_hash, full_name, recruit_location, bio, picture, recruit_resume, and recruit_status_id are required' });
            } else {
                query = 'INSERT INTO recruit (id, u_name, pass_hash, full_name, recruit_location, bio, picture, recruit_resume, recruit_status_id) VALUES (' + id + ', \"' + req.body['u_name'] + '\", \"' + req.body['pass_hash'] + '\", \"' + req.body['full_name'] + '\", \"' + req.body['recruit_location'] + '\", \"' + req.body['bio'] + '\", \"' + req.body['picture'] + '\", \"' + req.body['recruit_resume'] + '\", ' + req.body['recruit_status_id'] + ');';
                db.query(query, (err, result) => {
                    if (err) {
                        res.status(400).send({ 'message': 'error', 'data': err });
                    } else {
                        res.status(200).send({ 'message': 'success', 'data': result });
                    }
                });
            }
        }
    });
}

module.exports = { responsePutRecruit };