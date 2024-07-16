// // pages/api/logout.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed - LOG OUT' });
//   }

//   res.setHeader('Set-Cookie', `token=; HttpOnly; Secure; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);
//   res.json({ message: 'Logout successful' });
// }


import { NextRequest, NextResponse } from 'next/server';

export async function POST() {

  const res = NextResponse.json({ success: true });
  res.cookies.set('token', "LOGGED OUT", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 2, // 2 hours
  });
  return res;
}

