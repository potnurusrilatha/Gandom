import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[theme(colors.grayLight)]">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow w-full max-w-[1440px] px-8 mx-auto">
        {/* Main content goes here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
