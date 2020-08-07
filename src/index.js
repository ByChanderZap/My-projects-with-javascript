const API = 'https://api.github.com/users/ByChanderZap'
const express = require('express');
const fetchData = require('./utils/fetchData.js');

//  Initializations
app = express();

//  Server Settings
app.set('port', process.env.PORT || 4000);

//  routes
app.get('/', (req, res) => {
        const anotherFunction = async (url_api) => {
            try {
                const data = await fetchData(url_api);
                const repos = await fetchData(data.repos_url);

                let reposWithJs = [];
                repos.forEach(repo => {
                    if (repo.language === 'JavaScript'){
                        reposWithJs.push(repo);
                    }
                });

                let finalInfo = [];
                reposWithJs.forEach(repo => {
                    let temportaly = [];
                    temportaly.push(repo.id)
                    temportaly.push(repo.name)
                    temportaly.push(repo.owner.login)
                    temportaly.push(repo.language)
                    finalInfo.push(temportaly);
                })

                res.json(finalInfo);
            } catch (error) {
                console.error(error);
            }
        }
        anotherFunction(API);
})


//  initializing server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
    console.log('http://localhost:' + app.get('port'));
})