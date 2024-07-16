// import { NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';
// import { createJWT } from '@/app/FrameWork/lib/jwt';
// // Adjust the import path as necessary

// export async function POST(req: NextRequest) {
//   const { email, password } = await req.json();

//   try {
//     const apiResponse = await axios.post('https://api.codeddesign.org.za/authenticate', {
//       email,
//       password,
//     });

//     const payload = apiResponse.data; // Assuming the API response contains user data
//     const token = await createJWT(payload);

//     const res = NextResponse.json({ success: true });
//     res.cookies.set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       path: '/',
//       maxAge: 60 * 60 * 2, // 2 hours
//     });

//     return res;
//   } catch (error) {
//     return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { createJWT } from '@/app/FrameWork/lib/jwt';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    const apiResponse = await axios.post('https://api.codeddesign.org.za/authenticate', {
      email,
      password,
    });
    const payload = apiResponse.data; // Assuming the API response contains user data
    const token = await createJWT(payload);
    const res = NextResponse.json({ success: true });
    res.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 2, // 2 hours
    });
    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
