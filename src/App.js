// src/App.js
// 앱의 구조와 Layout 담당
import Layout from "./components/Layout";
import "./styles/globals.scss";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
      <Layout>
        <AppRoutes />
      </Layout>
  );
};

export default App;
