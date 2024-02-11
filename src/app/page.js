'use client';

import ShrinkUrlForm from './shrink-url-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-36">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <ShrinkUrlForm />
      </div>
    </main>
  );
}
