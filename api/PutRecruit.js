
function responsePutRecruit(db, req, res) {
    query = 'SELECT MAX(id) FROM recruit;';
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).send({ 'message': 'error', 'result': err });
        } else {
            const id = result[0]['MAX(id)'] + 1;
            query = 'INSERT INTO recruit (id, u_name, pass_hash, full_name, recruit_location, bio, picture, recruit_resume, recruit_status_id) VALUES (' + id + ', \"' + req.body['u_name'] + '\", \"' + req.body['pass_hash'] + '\", \"' + req.body['full_name'] + '\", \"' + req.body['recruit_location'] + '\", \"' + req.body['bio'] + '\", \"' + req.body['picture'] + '\", \"' + req.body['recruit_resume'] + '\", ' + req.body['recruit_status_id'] + ');';
            db.query(query, (err, result) => {
                if (err) {
                    res.status(400).send({ 'message': 'error', 'result': err });
                } else {
                    res.status(200).send({ 'message': 'success', 'result': result });
                }
            });
        }
    });
}

module.exports = { responsePutRecruit };