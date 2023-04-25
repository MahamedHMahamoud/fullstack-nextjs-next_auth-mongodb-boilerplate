// Import necessary packages
import axios from 'axios';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Export a NextAuth instance
export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // Hardcoded user object for demonstration purposes
          const user = {
            id: 1,
            name: "John Doe",
            mobile: "123456789",
            status: "Admin",
            password: "password"
          };
  
          // Check if the provided mobile and password match the hardcoded user's information
          if (
            credentials.mobile === user.mobile &&
            credentials.password === user.password
          ) {
            // If the credentials match, return the user object
            return {
              id: user.id,
              name: user.name,
              status: user.status,
            };
          } else {
            // If the credentials don't match, throw an error
            throw new Error("Invalid mobile or password");
          }
  
          // Uncomment the following section to enable API calls for authentication
  
          // const response = await axios.post('./api/system/login', credentials);
          // const { user } = response.data;
  
          // if (user) {
          //   return {
          //     id: user.id,
          //     name: user.name,
          //     status: user.status,
          //   };
          // } else {
          //   throw new Error('Invalid mobile or password');
          // }
        } catch (error) {
          throw new Error("Internal server error");
        }
      },
    }),
  ],  

  callbacks: {
    // Define callbacks to handle the JWT and session objects
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
    
    async session({ session, token }) {
      session.user = token.user
      return session
    }
  },
});
