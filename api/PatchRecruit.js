
const responsePatchRecruit = (db, req, res) => {
    if(req.body === undefined) {
        res.status(400).send({ 'message': 'error', 'data': 'body is required' });
    }
    query = 'UPDATE recruit SET ';
    let first = true;
    for (let key in req.body) {
        if(key === 'id') continue;
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
            res.status(400).send({ 'message': 'error', 'data': err });
        } else {
            res.status(200).send({ 'message': 'success', 'data': result });
        }
    });
}

module.exports = {
    responsePatchRecruit
}