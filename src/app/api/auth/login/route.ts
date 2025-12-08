import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body || {};

    // Simple placeholder login for development/testing only.
    // Replace with real verification against your database.
    if (!email || !password) {
      return NextResponse.json({ message: 'Missing credentials' }, { status: 400 });
    }

    // For testing: return a user object when password equals 'password'
    if (password !== 'password') {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const user = {
      id: email,
      name: email.split('@')[0],
      email,
      // attach any additional fields you need in the session
      role: 'user',
    };

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
