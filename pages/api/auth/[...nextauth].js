// Import necessary packages
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Exported so pages can read the session on the server with getServerSession
export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // Hardcoded user object for demonstration purposes.
        // PS! Remove it before deploying, or anyone can log in with these credentials.
        const user = {
          id: "1",
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
        }

        // Returning null tells NextAuth the login failed
        return null;

        // To authenticate against MongoDB, replace everything above in this function with:

        // const response = await fetch(`${process.env.NEXTAUTH_URL}/api/system/login`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ mobile: credentials.mobile, password: credentials.password }),
        // });
        // if (!response.ok) return null;
        // const { user } = await response.json();
        // return user;
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
};

// Export a NextAuth instance
export default NextAuth(authOptions);
