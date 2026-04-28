'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const TOPICS = [
  'Platform overview',
  'Technical integration',
  'Solutions & pricing',
  'Partnership enquiry',
  'Press / Media',
  'Other',
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.firstName?.trim()) next.firstName = 'Required';
    if (!data.lastName?.trim()) next.lastName = 'Required';
    if (!data.email?.trim()) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Invalid email';
    if (!data.company?.trim()) next.company = 'Required';
    if (!data.topic?.trim()) next.topic = 'Required';
    if (!data.message?.trim() || data.message.trim().length < 10) next.message = 'Tell us a bit more (10+ characters)';
    if (data.consent !== 'on') next.consent = 'Required';

    if (Object.keys(next).length) { setErrors(next); return; }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || 'Could not send message.');
      }
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      {status === 'sent' && (
        <div className="form-success">
          Thanks — we received your enquiry. Our team will get back to you within one business day.
        </div>
      )}
      {status === 'error' && errorMsg && (
        <div className="form-success" style={{ background: 'rgba(255,107,107,0.1)', borderColor: '#ff6b6b', borderLeftColor: '#ff6b6b' }}>
          {errorMsg}
        </div>
      )}

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" autoComplete="given-name" />
          {errors.firstName && <div className="form-error">{errors.firstName}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" autoComplete="family-name" />
          {errors.lastName && <div className="form-error">{errors.lastName}</div>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Work Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" />
          {errors.company && <div className="form-error">{errors.company}</div>}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="topic">What's this about?</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>Select a topic…</option>
          {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.topic && <div className="form-error">{errors.topic}</div>}
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your stack, current providers, and what you're trying to integrate." />
        {errors.message && <div className="form-error">{errors.message}</div>}
      </div>

      <div className="form-field" style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
        <input id="consent" name="consent" type="checkbox" style={{ width: 16, height: 16, marginTop: 4 }} />
        <label htmlFor="consent" style={{ letterSpacing: 0, textTransform: 'none', fontSize: 12, color: 'var(--text-mid)', fontWeight: 400 }}>
          I agree that Omnikeea LTD may contact me about my enquiry. See our <a href="/legal/privacy" style={{ color: 'var(--violet)' }}>Privacy Policy</a>.
        </label>
      </div>
      {errors.consent && <div className="form-error" style={{ marginTop: -10, marginBottom: 12 }}>{errors.consent}</div>}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ marginTop: 6 }}>
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  );
}
