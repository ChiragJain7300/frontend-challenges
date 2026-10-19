import BackImg from "../components/BackImg";
import CardsCont from "../components/CardsCont";
import Header from "../components/Header";

function App() {
  return (
    <main className="relative w-full min-h-screen font-Primary">
      <BackImg />
      <Header />
      <CardsCont />
    </main>
  );
}

export default App;
