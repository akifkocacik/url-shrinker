'use client';

import { shrinkUrl } from './action';
import { useFormState } from 'react-dom';
import SubmitButton from './submit-button';

export default function ShrinkUrlForm() {
  const [formState, formAction] = useFormState(shrinkUrl, {
    fullUrl: '',
    result: undefined,
    error: undefined,
  });

  return (
    <div>
      <form className="flex flex-col items-center mb-12" action={formAction}>
        <label htmlFor="fullUrl">Enter Your Full Url</label>
        <input
          className="text-stone-950 my-4 p-1 border border-stone-950 rounded-md outline-none focus:border-orange-300
          "
          type="text"
          name="fullUrl"
        />
        <SubmitButton />
      </form>
      {formState?.result ? (
        <a
          target="_blank"
          className="hover:text-blue-600 text-xl"
          href={`/${formState.result}`}
        >{`http://localhost:3000/${formState.result}`}</a>
      ) : null}

      {formState?.error ? <p>{formState.error}</p> : null}
    </div>
  );
}
