

const responsePatchRecruiter = (db, req, res) => {
    if (req.body === undefined) {
        res.status(400).send({ 'message': 'error', 'data': 'body is undefined' });
    } else {
        const id = req.body['id'];
        query = 'UPDATE recruiter SET ';
        for (key in req.body) {
            if (key == 'profession') {
                continue;
            }
            if (isNaN(req.body[key])) {
                query += key + ' = "' + req.body[key] + '", ';
            } else {
                query += key + ' = ' + req.body[key] + ', ';
            }
        }
        query = query.slice(0, -2);
        query += ' WHERE id = ' + id + ';';
        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send({ 'message': 'error', 'data': err });
            } else {
                res.status(200).send({ 'message': 'success', 'data': result })
            }
        });
    }
}

module.exports = { responsePatchRecruiter };