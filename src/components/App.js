// import HomePageDecoration from "./decoration/HomePageDecoration";
// import LoginPageDecoration from "./decoration/LoginPageDecoration";
import CalculatorPageDecoration from "./decoration/CalculatorPageDecoration";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      {/* <CalculatorPage /> */}
      {/* <HomePageDecoration /> */}
      {/* <LoginPageDecoration /> */}
      <CalculatorPageDecoration />
    </Layout>
  );
};

export default App;
