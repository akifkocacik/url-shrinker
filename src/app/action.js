'use server';

import { saveToDb } from '@/backend/actions';

async function sleep() {
  const prom = new Promise((res) => {
    setTimeout(() => {
      res('');
    }, 300);
  });

  return prom;
}

export async function shrinkUrl(previousState, formData) {
  const fullUrl = formData.get('fullUrl');

  if (!fullUrl.length) {
    previousState.error = 'Input must be provided';

    return previousState;
  }

  const res = saveToDb(fullUrl);

  await sleep();

  return {
    fullUrl: '',
    result: res,
  };
}
