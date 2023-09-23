import { backendUrl } from '@/config';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const name = searchParams.get('name');

  const res = await fetch(
    `${backendUrl}/characters?page=${page}&name=${name}`,
    {
      cache: 'no-cache',
    }
  );
  const {
    data: { characters },
  } = await res.json();

  return NextResponse.json({ characters });
}
