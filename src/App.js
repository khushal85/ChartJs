import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';


function App() {
  return (
  
    <div className="App">
      <h2>BAR CHART</h2>
      <BarChart />
      <h2>DOUGHNUT CHART</h2>
      <DoughnutChart />
      <h2>LINE CHART</h2>
      <LineChart />
      <h2>PIE CHART</h2>
     <PieChart />    
    </div>
    
  );
}

export default App;
