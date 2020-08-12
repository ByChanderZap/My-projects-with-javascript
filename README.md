# My projects with Javascript

MPWJ is a Javascript project that show you every repository that you have with that language on github.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```

## PRE CONFIGURATION
Im using mongoose on [mongodb atlas](https://cloud.mongodb.com/).

Steps to configurate mongodb atlas and get your db and connection: 
  - Create a project
  - Create a cluster
  - Create a new user
  - Clic on 'conect' option on your clusters view
  - Select 'connect your aplication'
  - You will see something like: "mongodb+srv://alexander-db-user:PASSWORD@cluster0.aewfe.mongodb.net/DBNAME?retryWrites=true&w=majority"
  - replace PASSWORD with the password for the db-user
  - Replace DBNAME with the name of the database that connections will use by default
  
### Now on the root of the project create a file with the name: 'dbkeys.js' and export that: 

```javascript
const dbURL = 'YOUR_URL_SHOULD_BE_HERE'

module.exports = {
    dbURL: dbURL
};
```
i recommend you hide this file on your .gitignore =D 

## USE

You have two options

1.- Run as dev with nodemon looking for changes.

```npm
npm run dev
```
2.- Run like a "production" enviroment.
```npm
npm run start
```

## Contributing
Pull requests are welcome.


## License
[MIT](https://choosealicense.com/licenses/mit/)
