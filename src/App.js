import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import Dashboard from './Components/Dashboard';
import ResetPassord from './Components/ResetPassord';

function App() {
  // const [intialState, finalState] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     //---------------------------------------------

  //     var xhr = new XMLHttpRequest();
  //     xhr.withCredentials = true;

  //     xhr.addEventListener('readystatechange', function () {
  //       if (this.readyState === 4) {
  //         console.log(this.responseText);
  //         finalState(this.responseText);
  //       }
  //     });
  //     xhr.open('GET', 'http://127.0.0.1:5000/data');
  //     xhr.send();
  //     // ----------------------------------------------
  //   }, 4000);
  //   return () => clearInterval(interval);
  // });
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>{<Login />}</h1>}></Route>
        <Route path="/signin" element={<h1>{<SignIn />}</h1>}></Route>
        <Route path="/signup" element={<h1>{<SignUp />}</h1>}></Route>
        <Route path="/dashboard" element={<h1>{<Dashboard />}</h1>}></Route>
        <Route path="/contact" element={<h1>{<ResetPassord />}</h1>}></Route>
      </Routes>
    </>
  );
  // return (
  //   <Container maxWidth="lg" className="app-container">
  //     <Typography variant="h4" gutterBottom>
  //       Dashboard
  //     </Typography>
  //     <ContainerComponent />
  //   </Container>
  // );
}

export default App;
