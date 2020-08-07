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

                const finalData = repos
                    .filter(repo => repo.language === 'JavaScript')
                    .map(repo => {
                        const { id, name, owner: { login }, language } = repo
                        return [id, name, login, language]
                    })
                res.json(finalData)
                
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