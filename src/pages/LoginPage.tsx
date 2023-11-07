// src/components/Login.js
import React from 'react';
import { LoginForm } from '@/features/auth/components/LoginForm';

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-6 bg-background rounded-md shadow-lg">
        <h2 className="text-2xl text-center text-foreground font-semibold mb-6">
          Login
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};
