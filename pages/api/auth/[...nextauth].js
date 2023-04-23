// Import necessary packages
import axios from 'axios';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Export a NextAuth instance
export default NextAuth({
  providers: [
    // Use the CredentialsProvider from next-auth/providers/credentials to provide custom login functionality
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // Send a POST request to the login API page with the provided credentials
          const response = await axios.post('./api/system/login', credentials);
          const { user } = response.data;
          
          if (user) {
            // If the API returns a valid user, return an object with the user's information
            return {
              id: user.id,
              name: user.name,
              status: user.status,
            };
          } else {
            // If the API returns an invalid user, throw an error
            throw new Error('Invalid mobile or password');
          }

        } catch (error) {
          // If there is an error, throw an error
          throw new Error('Internal server error');
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
