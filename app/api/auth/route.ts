import { jwtVerify } from "jose";
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const secret = new TextEncoder().encode('123');
export async function  GET(req:NextResponse){

  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    
    return NextResponse.json({ success:true });
  } catch (error) {
    return NextResponse.json({ error: token }, { status: 401 });
  }

// return NextResponse.json({token:token})

}