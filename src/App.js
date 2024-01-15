import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkerReg from "./admin/WorkerReg";
import Workerdetails from "./admin/Workerdetails";


function App() {
  return (
    <div>
         <BrowserRouter>
           <Routes>
            <Route path="/WorkerReg" element={<WorkerReg method="post"/>}></Route>
            <Route path="/Workerdetails" element={<Workerdetails method="get"/>}></Route>


           </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
