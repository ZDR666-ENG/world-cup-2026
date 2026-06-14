import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import Players from './pages/Players';
import GoalScorers from './pages/GoalScorers';
import Schedule from './pages/Schedule';
import News from './pages/News';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/world-cup-2026">
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/standings" element={<Standings />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/team/:id" element={<TeamDetail />} />
              <Route path="/players" element={<Players />} />
              <Route path="/goals" element={<GoalScorers />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2026 FIFA 世界杯数据网站</p>
              <p>数据来源: Football-Data.org</p>
            </div>
          </footer>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;