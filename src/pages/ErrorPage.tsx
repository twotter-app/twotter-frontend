import TwootLogo from '@/components/Logo/TwootLogo';
import errorBG from '../../public/image/errorpage_bg.png';
import { Button } from '../../src/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="cursor-pointer" onClick={redirectToHome}>
        <TwootLogo />
      </div>
      <div className="relative m-6">
        <img
          src={errorBG}
          alt="error"
          className="rounded-full mx-auto block w-1/3 h-1/3 mt-4 "
        />
        <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-foreground">
          That page doesn't exist!
        </h1>
      </div>
      <Button
        variant="default"
        className="font-semibold rounded-md"
        onClick={redirectToHome}
      >
        Home!
      </Button>
    </div>
  );
};

export default ErrorPage;
