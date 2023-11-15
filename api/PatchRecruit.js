
const responsePatchRecruit = (db, req, res) => {
    if(req.body === undefined) {
        res.status(400).send({ 'message': 'body is required' });
    }
    query = 'UPDATE recruit SET ';
    let first = true;
    for (let key in req.body) {
        if (first) {
            first = false;
        } else {
            query += ', ';
        }
        query += key + ' = "' + req.body[key] + '"';
    }
    query += ' WHERE id = ' + req.body['id'] + ';';
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).send({ 'message': 'error', 'result': err });
        } else {
            res.status(200).send({ 'message': 'success', 'result': result });
        }
    });
}

module.exports = {
    responsePatchRecruit
}