'use client';

import { LoginForm } from '@/components/LoginForm';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#FFE8CC] flex items-center justify-center py-12 px-4">
      <LoginForm />
    </div>
  );
}