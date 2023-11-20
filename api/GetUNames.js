

const responseGetAllUNames = (db, req, res) => {
    query = 'SELECT u_name FROM view5;'
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).json({ 'message': 'error', 'data': err });
        } else {
            res.status(200).json({ 'message': 'success', 'data': result });
        }
    });
};

module.exports = {
    responseGetAllUNames
};