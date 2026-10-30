'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
function Submit() { const { pending } = useFormStatus(); return <Button type="submit" disabled={pending}>{pending ? 'Sending...' : 'Send message'}</Button>; }
export function EnglishContact() {
  const [state, action] = useActionState(submitContactForm, { success: false, message: '', errors: undefined });
  return <form action={action} className="mt-6 space-y-4"><input type="hidden" name="locale" value="en" /><div><label htmlFor="en-name" className="text-sm font-medium">Name</label><Input id="en-name" name="name" minLength={2} required /></div><div><label htmlFor="en-email" className="text-sm font-medium">Email</label><Input id="en-email" name="email" type="email" required /></div><div><label htmlFor="en-message" className="text-sm font-medium">Message</label><Textarea id="en-message" name="message" minLength={10} required /></div><Submit />{state.message && <p role="status" className="text-sm">{state.message}</p>}</form>;
}
