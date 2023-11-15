
const responseGetAllProfessions = (db, req, res) => {
    query = 'SELECT * FROM profession';
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ 'message': 'error', 'data': err });
        } else {
            res.status(200).send({ 'message': 'success', 'data': result });
        }
    });
}

module.exports = {
    responseGetAllProfessions
};