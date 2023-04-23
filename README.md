Next.js, NextAuth, and MongoDB Fullstack Boilerplate

This boilerplate includes all the necessary files and configurations to start a new Next.js project with NextAuth and MongoDB for fullstack development. It's suitable for both beginners who want to learn about Next.js and NextAuth.js, as well as advanced developers who want to quickly set up a fullstack Next.js web app without all the unnecessary files that come with a new installation.

All pages and components have comments in the code, making it easy to understand and modify as needed.

Level: Suitable for beginners and advanced developers.

It allows you to focus on building your project by providing the following components and pages:

Pages:

Login page:
./login.js (includes a login form)

NextAuth page:
./api/auth/[...nextauth].js  
responsible for handling authentication requests between the login page and the API authentication page.

API authentication page:
./api/system/login.js 
verifies user authentication status

Landing page:
./index.js 
can only be accessed when authenticated and session is set, else you will be sent to login page

And all the other necessary pages for fullstack webapp with authentication

Components:
Header: ./components/general/Header.jsx
Footer: ./components/general/Footer.jsx

Getting Started:
To get started with the Next.js, NextAuth, and MongoDB Fullstack Boilerplate, follow these steps:

Clone the repository: https://github.com/MaxFowzi/nextjs-next_auth-mongodb-fullstack-boilerplate

Required Changes: Before running the boilerplate, create a .env.local file in the project root directory and add the appropriate MongoDB URI for your database.

If you're using MongoDB locally, add the following line to the .env.local file:
MONGODB_URI=mongodb://localhost:27017/"myDatabase", where "myDatabase" is the name of your database.

If you're using MongoDB on a web server, add the following line instead:
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority

Install dependencies by running npm install. If you want to install new dependencies, delete the package-lock.json file before running the install command. Note that new dependencies are not guaranteed to work with this boilerplate.

Usage:
Once you've made the required changes and installed the dependencies, you can start your development server by running npm run dev.

If you find this boilerplate helpful, please consider starring the repository and sharing it with others. The project is licensed under the MIT License. 
See the LICENSE file for more details.