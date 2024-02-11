import { findById } from '@/backend/actions';
import { redirect } from 'next/navigation';

export default async function Page({ params }) {
  'use server';

  const fullUrl = await findById(params.id);
  if (fullUrl) {
    redirect(fullUrl);
  }

  return <div>URL not found!</div>;
}
