import '../style/App.css';
import Layout from "./Layout";
// import Home from './pages/Home';
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Quix from "./pages/Quiz";

function App() {
  return (
    <Layout>
        {/*<Home/>*/}
        {/*<Signup/>*/}
        {/*<Login/>*/}
        <Quix/>
    </Layout>
  );
}

export default App;
