const API = 'https://api.github.com/users/'
const express = require('express');
const router = express.Router();
const fetchData = require('../utils/fetchData.js')


router.get('/', (req, res) => {
    res.render('show/launch')
})

router.get('/githubProfile', (req, res) => {
    const { githubProfile } = req.query.githubProfile
    let apiWithUser = `${API}${githubProfile}`

    const anotherFunction = async (url_api) => {
        try {
            const data = await fetchData(url_api);
            const repos = await fetchData(data.repos_url);
            //const finalData = repos.filter(repo => repo.language === 'JavaScript');
            console.log(repos);
            res.render('show/list.hbs', repos)
            
        } catch (error) {
            console.error(error);
        }
    }
    anotherFunction(apiWithUser);
})

module.exports = router;