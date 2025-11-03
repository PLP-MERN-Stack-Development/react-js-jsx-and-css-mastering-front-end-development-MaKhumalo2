import Header from "../vite-project/components/Header";
import Home from "../vite-project/components/Home";
import Footer from "../vite-project/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow: 1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}