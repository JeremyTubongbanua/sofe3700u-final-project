
function responseGetAllRecruits(db, req, res) {
    query = 'SELECT recruit.id, recruit.u_name, recruit.pass_hash, recruit.full_name, recruit.recruit_location, recruit.bio, recruit.picture, recruit.recruit_resume, recruit_status.recruit_status, profession.profession FROM recruit LEFT JOIN recruit_status ON recruit.recruit_status_id = recruit_status.id JOIN recruit_professions ON recruit.id = recruit_professions.recruit_id JOIN profession ON recruit_professions.profession_id = profession.id;';
    db.query(query, (err, result) => {
        if(err) {
            res.status(400).send({'message': 'error'});
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
                        data[j]['professions'].push(result[i]['profession']);
                    }
                }
            }
            for(let i = 0; i < data.length; i++) {
                delete data[i]['profession'];
            }
            res.status(200).send({'message': 'success', 'data': data});
        }
    });
}


function responseGetRecruitById(db, req, res, id) {
    query = 'SELECT recruit.id, recruit.u_name, recruit.pass_hash, recruit.full_name, recruit.recruit_location, recruit.bio, recruit.picture, recruit.recruit_resume, recruit_status.recruit_status, profession.profession FROM (recruit JOIN recruit_status ON recruit.recruit_status_id = recruit_status.id) LEFT JOIN recruit_professions ON recruit.id = recruit_professions.recruit_id LEFT JOIN profession ON recruit_professions.profession_id = profession.id WHERE recruit.id = ' + id + ';';
    db.query(query, (err, result) => {
        if(err) {
            res.status(400).send({'message': 'error'});
        } else {
            console.log('==================\n\nQUERY:\n' + query + '\n\nRECV:\n\n' + JSON.stringify(result) + '\n\n\n===========================');
            data = result[0];
            data['professions'] = [];
            for(var i = 0; i < result.length; i++) {
                if(data['profession'] != null) {
                    data['professions'].push(result[i]['profession']);
                }
            }
            delete data['profession'];
            res.status(200).send({'message': 'success', 'data': data});
        }
    });
}

function responseGetRecruitByUName(db, req, res, u_name) {
    query = 'SELECT recruit.id, recruit.u_name, recruit.pass_hash, recruit.full_name, recruit.recruit_location, recruit.bio, recruit.picture, recruit.recruit_resume, recruit_status.recruit_status, profession.profession FROM (recruit JOIN recruit_status ON recruit.recruit_status_id = recruit_status.id) LEFT JOIN recruit_professions ON recruit.id = recruit_professions.recruit_id LEFT JOIN profession ON recruit_professions.profession_id = profession.id WHERE recruit.u_name = \"' + u_name + '\";';
    db.query(query, (err, result) => {
        if(err) {
            res.status(400).send({'message': 'error, no such user'});
        } else {
            console.log('==================\n\nQUERY:\n' + query + '\n\nRECV:\n\n' + JSON.stringify(result) + '\n\n\n===========================');
            if(result.length === 0) {
                res.status(400).send({'message': 'error, no such user'});
                return;
            }
            data = result[0];
            data['professions'] = [];
            for(var i = 0; i < result.length; i++) {
                if(data['profession'] != null) {
                    data['professions'].push(result[i]['profession']);
                }
            }
            delete data['profession'];
            res.status(200).send({'message': 'success', 'data': data});
        }
    });
}

module.exports = {responseGetAllRecruits, responseGetRecruitById, responseGetRecruitByUName};