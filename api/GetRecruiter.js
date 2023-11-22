

const responseGetRecruiterByUName = (db, req, res) => {
    const { u_name } = req.body;
    const query = 'SELECT * FROM recruiter WHERE u_name = \"' + u_name + '\";';
    const values = [u_name];
    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: 'error', data: err });
        } else {
            res.status(200).json({ message: 'success', data: result[0] });
        }
    });
};

module.exports = {
    responseGetRecruiterByUName
}