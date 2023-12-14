import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" bg-gray-900 min-w-screen min-h-screen laptop:px-7 text-gray-300">
      <div className="container mx-auto h-full max-w-7xl">
        <Header />

        <Home />

        <Footer />
      </div>
    </div>
  );
}

export default App;
