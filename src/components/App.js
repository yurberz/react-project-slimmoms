import Layout from "./layout/Layout";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

const App = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <Registration />
      <Login />
    </Layout>
  );
};

export default App;
