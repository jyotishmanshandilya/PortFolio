import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions={
  site:process.env.NEXTAUTH_URL,
  providers: [    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
    // async session({ session, user, token }) {
    //   console.log(session)
    //   return session
    // },
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(email)
    //   return true
    // },
  },
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
