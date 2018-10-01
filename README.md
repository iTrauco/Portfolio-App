# Portfolio App
This is my portfolio website. It is a fairly simple one page react-app that showcases my skills, my work, and let's users contact me!

It is hosted on digital ocean - The static webpage is served by NGINX, and the API is ran by Docker.

![Screenshot of Site](https://github.com/quangogage/Portfolio-App/blob/master/screenshots/1.png?raw=true)

## Setup
1. Install Dependencies:  `npm install`
2. Create email credentials:  
    - Create the file `/api/email-credentials.js`
    - Write inside the file `module.exports = {EMAIL: 'email@address.com',PASS: 'password'}`

## Develop
* Run local server - `npm start`

* Run local API - `node index.js`

*Note: You may need to change the API address in `/src/App.js`*


## Deploy
* Deploy both the API *and* the React App: `./ops ship`
* Deploy *only* the React App: `./ops ship site`
* Deploy *only* the API: `./ops ship api`
