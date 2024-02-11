'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="px-3 py-2 border border-stone-950 rounded-md bg-green-400 disabled:bg-red-400"
      type="submit"
    >
      {pending ? 'Loading...' : 'Shrink'}
    </button>
  );
}
