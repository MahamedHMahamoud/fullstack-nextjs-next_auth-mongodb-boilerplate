import axios from 'axios';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // Replace 'API_ADDRESS' with the actual API endpoint
          const response = await axios.post('API address', credentials);
          const { user } = response.data;
          
          if (user) {
            return {
              id: user.id,
              name: user.name,
              status: user.status,
            };
          } else {
            throw new Error('Invalid mobile or password');
          }

        } catch (error) {
          throw new Error('Internal server error');
        }
      },
    }),
  ],

  callbacks: {
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
