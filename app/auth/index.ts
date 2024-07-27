import NextAuth, { User, NextAuthConfig } from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
 
export const BASE_PATH = '/api/auth';

export const graphqlConfig = {
  graphqlEndpoint: "https://api.fabric.microsoft.com/v1/workspaces/8986808f-6c68-4a91-b3c4-1a38bfa8d7e1/graphqlapis/0c5175ba-3eb0-4e16-ba31-120722369a4b/graphql"
};


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      return {
        ...session,
        accessToken: token.accessToken as string
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET as string,
});

export const loginRequest = {
  scopes: ["https://analysis.windows.net/powerbi/api/Item.Execute.All","https://analysis.windows.net/powerbi/api/Datamart.ReadWrite.All"]
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
