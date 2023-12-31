// src/components/Login.js
import { LoginForm } from '@/features/auth/components/LoginForm';
import { useLoginForm } from '@/features/auth/hooks/useLoginForm';
import TwootLogo from '@/components/Logo/TwootLogo';
export const LoginPage = () => {
  const { form, onSubmit } = useLoginForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-6 bg-background rounded-md shadow-lg  ">
        <div className="flex justify-center mb-4 ml-2">
          <TwootLogo />
        </div>

        <h2 className="text-2xl text-center text-foreground font-semibold mb-6">
          Login
        </h2>
        <LoginForm form={form} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
