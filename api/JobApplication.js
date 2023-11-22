

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
        query = 'SELECT job_posting.id, job_posting.company_id, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type FROM job_application INNER JOIN job_posting ON job_application.job_posting_id = job_posting.id INNER JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id INNER JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id WHERE job_application.recruit_id = ' + id + ';';
        db.query(query, (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send({'message': 'error', 'error': err});
            } else {
                data = result;
                res.status(200).send({'message': 'success', 'data': data});
            }
        });
    }
};

const resposneGetRecruitsByJobPostingId = (db, req, res) => {
    let query = 'SELECT recruit.id, recruit.u_name, recruit.full_name, recruit.recruit_location, recruit.bio, recruit.picture, recruit.recruit_resume, recruit_status.recruit_status, profession.profession FROM (recruit LEFT JOIN recruit_status ON recruit.recruit_status_id = recruit_status.id) LEFT JOIN recruit_professions ON recruit.id = recruit_professions.recruit_id LEFT JOIN profession ON recruit_professions.profession_id = profession.id WHERE recruit.id IN (SELECT recruit_id FROM job_application WHERE job_posting_id = ' + req.body['id'] + ');';
    db.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send({'message': 'error', 'error': err});
        } else {
            data = [];
            for(let i = 0; i < result.length; i++) {
                for(let j = 0; j < data.length; j++) {
                    if(data[j]['id'] === result[i]['id']) {
                        continue;
                    }
                }
                data.push(result[i]);
                result[i]['professions'] = [];
            }
            for(let i = 0; i < result.length; i++) {
                for(let j = 0; j < data.length; j++) {
                    if(data[j]['id'] === result[i]['id']) {
                        if(result[i]['profession'] != null) {
                            data[j]['professions'].push(result[i]['profession']);
                        }
                    }
                }
            }
            for(let i = 0; i < data.length; i++) {
                delete data[i]['profession'];
            }
            res.status(200).send({'message': 'success', 'data': data});
        }
    });
};

module.exports = {responsePutJobApplicationRecruitApply, responseGetJobApplicationsByRecruitId, resposneGetRecruitsByJobPostingId};