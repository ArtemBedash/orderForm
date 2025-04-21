import { Routes,Route } from 'react-router-dom';
import Steps from "./components/steps/Steps.tsx";
import ConfirmationStep from "./components/steps/ConfirmationStep.tsx";
import ConfirmationPage from "./components/pages/ConfirmationPage.tsx";


function App() {

  return (

        <Routes>
            <Route path="/" element={<Steps/>}/>
            <Route path="/confirmation" element={<ConfirmationPage/>}/>
            <Route path="/confirm" element={<ConfirmationStep/>}/>
        </Routes>

  );
}

export default App;