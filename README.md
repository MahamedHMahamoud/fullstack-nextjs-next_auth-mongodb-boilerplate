Fullstack: Next.js, NextAuth (with Mobile and Password), and MongoDB Boilerplate, with Tutorial for Beginners

This boilerplate serves as a tutorial to help beginners quickly set up and learn a Next.js with NextAuth and MongoDB for fullstack development. It includes all the necessary files and configurations, allowing you to focus on building your project. The boilerplate contains commented code for better understanding and easy modification.

Pages and Components

- Login page: ./login.js
  Includes a login form that collects the user's mobile number and password.
  If the user is not logged in or the session is not set, allows them to enter their credentials and log in. 
  If the user is logged in and the session is set, redirects them to the index page.
  When the user clicks the login button, the entered mobile number and password are sent to the [...nextauth].js page for authentication.

- NextAuth page: ./api/auth/[...nextauth].js
  Receives the entered mobile number and password from the login page when the user clicks the login button.
  Calls the API authentication page with the user's credentials.
  Awaits the response from the API authentication page, which includes the authentication status and user data.
  If the user is authenticated successfully, redirects them to the index page and sets the session.
  If the authentication fails, returns an error message and redirects the user back to the login page to try again.
  The boilerplate is initially set up to work with a hardcoded user object (John Doe, password: 123456789) for demonstration purposes. To connect to a MongoDB database, uncomment the API call section and comment out or remove the hardcoded user object section in the [...nextauth].js file.

- API authentication page: ./api/system/login.js
  Receives the user's mobile number and password from the NextAuth page.
  Connects to the MongoDB database and accesses the 'users' collection, where user credentials (mobile and password) are stored.
  Searches the 'users' collection for a matching user with the provided mobile number and password.
  If a matching user is found, verifies the user authentication status and sets it as authenticated.
  If no matching user is found or the provided credentials are incorrect, sets the user authentication status as not authenticated.
  Returns the authentication status (authenticated or not authenticated) and the user data (if authenticated) to the NextAuth page.
  Prerequisite: You have a MongoDB database and a collection called users, with user credentials (mobile and password) stored.

- Landing page: ./index.js
  Accessible only to authenticated users with an active session.
  Utilizes the getServerSideProps function to fetch data on the server-side before rendering the page.
  getServerSideProps checks the user's authentication status and session.
  If the user is authenticated and the session is set, the page is rendered.
  If the user is not authenticated or the session is not set, they are redirected to the login page.

Components
Header: ./components/general/Header.jsx
Footer: ./components/general/Footer.jsx

Getting Started
1: Clone the repository: https://github.com/MaxFowzi/nextjs-next_auth-mongodb-fullstack-boilerplate

2: The boilerplate works as is with a hardcoded user object for demonstration purposes. 
If you need to connect to a MongoDB database for user authentication, continue with step 2.1

2.1: Create a .env.local file in the project root directory and add the appropriate MongoDB URI for your database:

2.1.1: For a local MongoDB instance: 
MONGODB_URI=mongodb://localhost:27017/YourDatabaseName, where YourDatabaseName is the name of your database

2.1.2: For a MongoDB server instance: 
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority

2: Create a .env.local file in the project root directory and add the appropriate MongoDB URI for your database:

3: Install dependencies by running npm install. 
If you want to install new dependencies, delete the package-lock.json file before running the install command. 
PS! Note that new dependencies are not guaranteed to work with this boilerplate.

Usage
Once you've made the required changes and installed the dependencies, you can start your development server by running "npm run dev".

If you find this boilerplate helpful, please consider starring the repository and sharing it with others. 
The project is licensed under the MIT License. See the LICENSE file for more details.

