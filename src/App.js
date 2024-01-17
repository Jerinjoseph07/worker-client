import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkerReg from "./admin/WorkerReg";
import Workerdetails from "./admin/Workerdetails";
import ClientReg from "./worker-client/ClientReg";
import Clientdetails from "./worker-client/Clientdetails";


function App() {
  return (
    <div>
         <BrowserRouter>
           <Routes>
            <Route path="/WorkerReg" element={<WorkerReg method="post"/>}></Route>
            <Route path="/Workerdetails" element={<Workerdetails method="get"/>}></Route>

            <Route path="/ClientReg" element={<ClientReg method="post"/>}></Route>
            <Route path="/Clientdetails" element={<Clientdetails method="get"/>}></Route>

           </Routes>
           </BrowserRouter>
           
    </div>
  );
}

export default App;
