

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

module.exports = {responsePutJobApplicationRecruitApply};