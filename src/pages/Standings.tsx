import React, { useEffect } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import StandingsTable from '../components/StandingsTable';
import './Standings.css';

const Standings: React.FC = () => {
  const { standings, loading, error, fetchStandings } = useWorldCupStore();

  useEffect(() => {
    fetchStandings();
  }, [fetchStandings]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载积分榜数据...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{error}</p>
        <button onClick={() => fetchStandings()}>重试</button>
      </div>
    );
  }

  return (
    <div className="standings-page">
      <div className="container">
        <h1 className="page-title">积分榜</h1>
        
        {standings.length > 0 ? (
          <div className="standings-content">
            <StandingsTable standings={standings} showGroup />
          </div>
        ) : (
          <div className="no-data">
            <p>暂无积分榜数据</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Standings;