import FoodCardsList from "./components/Food/FoodCardsList";
import Header from "./components/Header";
import OrderContextProvider from "./store/food-order-context";

function App() {
  return (
    <OrderContextProvider>
      <Header />
      <main>
        <FoodCardsList />
      </main>
    </OrderContextProvider>
  );
}

export default App;
