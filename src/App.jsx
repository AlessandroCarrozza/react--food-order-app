import MealsCardsList from "./components/Food/MealsCardsList";
import Header from "./components/Header";
import OrderContextProvider from "./store/food-order-context";

function App() {
  return (
    <OrderContextProvider>
      <Header />
      <main>
        <MealsCardsList />
      </main>
    </OrderContextProvider>
  );
}

export default App;
