import CompanionForm from '@/components/ui/CompanionForm';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const NewCompanion = async () => {
  const user = await currentUser(); 
  if (!user) redirect('/sign-in');

  return (
    <main className="min-lg:w-1/3 min-md:w2/3 flex items-center justify-center">
      <article className="w-full flex flex-col gap-4">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
