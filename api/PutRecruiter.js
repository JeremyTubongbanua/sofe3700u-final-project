

const responsePutRecruiter = (db, req, res) => {
    query = 'SELECT MAX(id) FROM recruiter;';
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).send({ 'message': 'error', 'data': err });
        } else {
            const id = result[0]['MAX(id)'] + 1;
            if (req.body === undefined) {
                res.status(400).send({ 'message': 'error', 'result': 'u_name, pass_hash, full_name, recruit_location, bio, picture, recruit_resume, and recruit_status_id are required' });
            } else {
                query = 'INSERT INTO recruiter (id, company_id, u_name, pass_hash, full_name, recruiter_location, bio, picture) VALUES (' + id + ', ' + req.body['company_id'] + ', \"' + req.body['u_name'] + '\", \"' + req.body['pass_hash'] + '\", \"' + req.body['full_name'] + '\", \"' + req.body['recruiter_location'] + '\", \"' + req.body['bio'] + '\", \"' + req.body['picture'] + '\");';
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

module.exports = { responsePutRecruiter };