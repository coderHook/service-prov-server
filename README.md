# Service Provider APP
### TypesScript - NodeJs APP

 TS-NodeJs App that talks to a DB to get a list of matching Requests.

## To set up the project in your Machine

- 1. Clone the repository in your computer.
      #### `git clone https://github.com/coderHook/service-prov-server`

- 2. Install dependencies.
      #### `npm install`

- 3. If you are going to develope Install devDependencies
      #### `npm install --dev`

## List of Dependencies this App uses.
Local Dependencies.

| Name          | Description           | 
| ------------- |:---------------------:| 
| Express      | Node.js Framework to create fast servers, allowing the use of midlewares. | 
| superagent | Provides Call Api functionality.      | 
| eslint | Used to find problematic patterns or code that doesn't adhere to certain style guidelines.      | 


Dependencies in development.

| Name          | Description           | 
| ------------- |:---------------------:| 
| typescript      | Superset of Javascript that allows to write typed code | 
| ts-node      | Allows TypeScript to be used in Node.js enviroment. We can use *.ts files without compiling it to js.      |   
| nodemon | Utility to monitor the changes in the source code and restart the server.      |  

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.
It uses nodemon.

### `npm run build`

Compiles the TypeScript files '*.ts' into Javascript 'es6'.

### `npm start`
Runs the compiled js version of the app.


## API Endpoints
These are the available endpoints of the API `@root : http://mywebsite.com`.

* **POST @root/clients**:

    Returns an object with list of matching request according to the skills the user add to his/her profile.

## File Structure

The API will have the following file structure:
api
|-- /dist
|-- -- /controllers
|-- -- /routes
|-- -- /utils
|-- -- app.js

|-- /src
|-- -- /controllers
|-- -- /routes
|-- -- /utils
|-- -- app.ts
| package.json
| tsconfig.json
| README.md