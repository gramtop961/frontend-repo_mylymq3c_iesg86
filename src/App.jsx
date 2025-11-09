import Header from "./components/Header";
import Hero from "./components/Hero";
import ModulesGrid from "./components/ModulesGrid";
import Workflows from "./components/Workflows";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <ModulesGrid />
        <Workflows />
      </main>
      <footer className="py-8 border-t border-slate-200 text-center text-sm text-slate-600">
        Built for teachers and students in Karnataka — academic workflows first.
      </footer>
    </div>
  );
}

export default App;
