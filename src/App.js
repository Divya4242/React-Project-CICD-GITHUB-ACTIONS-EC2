import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageReplacement from './Page_Replacement';
import SchedulingAlgo from './Scheduling_Algorithms';
import Memory_Partition from './Memory_Partition';
import Navbar from './Navbar';
import Homepage from './Homepage';
import FIFO_PR from './FIFO_Page_Replacement';
import LRU_PR from './LRU_Page_Replacement';
import FCFS from './FCFS';
import SJF from './SJF';
import Round_Robin from './Round_Robin';
import Priority_Scheduling from './Priority_Scheduling';
import Page404 from './Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/page_replacement' element={<PageReplacement />}></Route>
          <Route path='/pagereplacement' element={<PageReplacement />}></Route>
          <Route path='/scheduling_algorithms' element={<SchedulingAlgo />}></Route>
          <Route path='/schedulingalgorithms' element={<SchedulingAlgo />}></Route>
          <Route path='/memory_partition' element={<Memory_Partition />}></Route>
          <Route path='/memorypartition' element={<Memory_Partition />}></Route>
          <Route path='/fifo_page_replacement' element={<FIFO_PR />}></Route>
          <Route path='/lru_page_replacement' element={<LRU_PR />}></Route>
          <Route path='/sjf' element={<SJF />}></Route>
          <Route path='/priority_scheduling' element={<Priority_Scheduling />}></Route>
          <Route path='/round_robin' element={<Round_Robin />}></Route>
          <Route path='/fcfs' element={<FCFS />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
