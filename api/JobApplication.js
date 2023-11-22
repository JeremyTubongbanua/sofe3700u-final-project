

const responsePutJobApplicationRecruitApply = (db, req, res) => {
    /**
     * {
     *    "recruit_id": 0,
     *    "job_posting_id": 0
     * }
     */
    if(req.body === undefined || req.body['recruit_id'] === undefined || req.body['job_posting_id'] === undefined) {
        res.status(400).send({'message': 'error', error: 'recruit_id and job_posting_id are required'});
    } else {
        const recruit_id = req.body['recruit_id'];
        const job_posting_id = req.body['job_posting_id'];
        query = 'INSERT INTO job_application (recruit_id, job_posting_id, job_application_status_id) VALUES (' + recruit_id + ', ' + job_posting_id + ', 1);';
        db.query(query, (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send({'message': 'error', 'error': err});
            } else {
                res.status(200).send({'message': 'success', 'data': result});
            }
        });
    }
}

const responseGetJobApplicationsByRecruitId = (db, req, res) => {
    /**
     * {
     *    "id": 0
     * }
     */
    if(req.body === undefined || req.body['id'] === undefined) {
        res.status(400).send({'message': 'error', error: 'id is required'});
    } else {
        const id = req.body['id'];
        query = 'SELECT job_posting.id, job_posting.company_id, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type, profession.profession FROM job_application INNER JOIN job_posting ON job_application.job_posting_id = job_posting.id INNER JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id INNER JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id INNER JOIN profession ON job_posting.profession_id = profession.id WHERE job_application.recruit_id = ' + id + ';';
        db.query(query, (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send({'message': 'error', 'error': err});
            } else {
                data = result;
                for (let i = 0; i < data.length; i++) {
                    professions = [];
                    for(let j = 0; j < data.length; j++) {
                        if(data[i].id === data[j].id) {
                            professions.push(data[j].profession);
                        }
                    }
                    data[i].professions = professions;
                    delete data[i].profession;
                }
                res.status(200).send({'message': 'success', 'data': data});
            }
        });
    }
};

module.exports = {responsePutJobApplicationRecruitApply, responseGetJobApplicationsByRecruitId};