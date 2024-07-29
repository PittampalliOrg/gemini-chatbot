// import { google } from 'googleapis';
// import { OAuth2Client } from 'google-auth-library';
import { auth, EnrichedSession } from 'auth';
import { Client } from '@microsoft/microsoft-graph-client';


export async function GET(request: Request) {
  const session = (await auth()) as EnrichedSession;

  console.log('Session inside the route ', session);

  if (!session) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  const clientId = process.env.AUTH_GOOGLE_ID;
  const clientSecret = process.env.AUTH_GOOGLE_SECRET;
  const accessToken = session?.accessToken;
  const refreshToken = session?.refreshToken;


  const client = Client.init({
    authProvider: (done) =>
      done(
        null,
        accessToken // WHERE DO WE GET THIS FROM?
      ),
  });
  
    const response = await client
        .api('/me/todo/lists/AAMkADhmYjY3M2VlLTc3YmYtNDJhMy04MjljLTg4NDI0NzQzNjJkMAAuAAAAAAAqiN_iXOf5QJoancmiEuQzAQAVAdL-uyq-SKcP7nACBA3lAAAAO9QQAAA=/tasks')
        .top(5)
        .get();

    const tasks = response.value;

  return new Response(JSON.stringify(tasks));
}
