
const responseGetCompanyById = (db, req, res) => {
    if (req.body === undefined || req.body['id'] === undefined) {
        res.status(400).send({ 'message': 'id is required' });
    }
    query = 'SELECT * FROM company WHERE company.id = ' + req.body['id'];
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ 'message': 'error', 'error': err });
        } else {
            if (result.length === 0) {
                res.status(404).send({ 'message': 'company not found' });
            } else {
                data = result[0];
                query = 'SELECT job_posting.id FROM job_posting WHERE job_posting.company_id = ' + data['id'] + ' ORDER BY job_posting.id ASC;';
                db.query(query, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send({ 'message': 'error', 'error': err });
                    } else {
                        job_postings = [];
                        for (let i = 0; i < result.length; i++) {
                            job_postings.push(result[i]['id']);
                        }
                        data['job_postings'] = job_postings;
                        recruiters = []
                        query = 'SELECT recruiter.id FROM recruiter WHERE recruiter.company_id = ' + data['id'] + ' ORDER BY recruiter.id ASC;';
                        db.query(query, (err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send({ 'message': 'error', 'data': err });
                            } else {
                                for (let i = 0; i < result.length; i++) {
                                    recruiters.push(result[i]['id']);
                                }
                                data['recruiters'] = recruiters;
                                res.status(200).send({ 'message': 'success', 'data': data });
                            }
                        }
                        );
                    }
                });
            }
        }
    });
};

const responseGetAllCompanies = (db, req, res) => {
    query = 'SELECT * FROM company ORDER BY company.id ASC;';
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
    responseGetCompanyById,
    responseGetAllCompanies
};