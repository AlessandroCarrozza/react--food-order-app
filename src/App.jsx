import MealsCardsList from "./components/Food/MealsCardsList";
import Header from "./components/Header";
import OrderContextProvider from "./store/food-order-context";
import { log } from "./log";

function App() {
  log("<App /> rendered");
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
