import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <p className="font-display text-6xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">Página não encontrada</h1>
        <p className="mt-2 text-muted-foreground">O endereço que você acessou não existe ou foi movido.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
