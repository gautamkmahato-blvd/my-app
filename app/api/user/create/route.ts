import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import createOrUpdateUser from '@/app/service/supabase/user/createOrUpdateUser';


export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, result: {}, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();

    const res = await createOrUpdateUser({
      clerk_id: userId,
      name: body.name,
      username: body.username,
      email: body.email,
      image: body.img_url,
    });

    if (!res.success) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: res.error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        result: res.result,
        message: 'User created/updated successfully',
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Route error:', err);
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
