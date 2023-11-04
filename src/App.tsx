import { Button } from './components/ui/button';

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-20">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Vite, React, Tailwind minimal starter
      </h1>
      <Button variant="secondary" size="lg">
        Click here
      </Button>
    </main>
  );
}

export default App;
