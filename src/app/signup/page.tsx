'use client';

import { SignupForm } from '@/components/SignupForm';
import React from 'react';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#FFE8CC] flex items-center justify-center py-12 px-4">
      <SignupForm />
    </div>
  );
}