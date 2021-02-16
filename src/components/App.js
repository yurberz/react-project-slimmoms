import { Provider } from "react-redux";
import store from "../redux/store";
import CalculatorPage from "../pages/CalculatorPage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <h1>Hello!</h1>
        <CalculatorPage />
      </Layout>
    </Provider>
  );
};

export default App;
