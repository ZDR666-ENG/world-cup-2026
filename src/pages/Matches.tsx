import React, { useEffect, useState } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import MatchCard from '../components/MatchCard';
import './Matches.css';

const Matches: React.FC = () => {
  const { matches, loading, error, fetchMatches } = useWorldCupStore();
  const [selectedMatchday, setSelectedMatchday] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    fetchMatches(selectedMatchday || undefined);
  }, [fetchMatches, selectedMatchday]);

  const filteredMatches = matches.filter((match) => {
    if (filterStatus === 'all') return true;
    return match.status === filterStatus;
  });

  const matchdays = Array.from({ length: 8 }, (_, i) => i + 1);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载比赛数据...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{error}</p>
        <button onClick={() => fetchMatches()}>重试</button>
      </div>
    );
  }

  return (
    <div className="matches-page">
      <div className="container">
        <h1 className="page-title">比赛</h1>
        
        {/* 筛选器 */}
        <div className="filters">
          <div className="filter-group">
            <label>比赛轮次:</label>
            <select 
              value={selectedMatchday || ''} 
              onChange={(e) => setSelectedMatchday(e.target.value ? Number(e.target.value) : null)}
            >
              <option value="">全部轮次</option>
              {matchdays.map((day) => (
                <option key={day} value={day}>第 {day} 轮</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>比赛状态:</label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">全部状态</option>
              <option value="SCHEDULED">未开始</option>
              <option value="IN_PLAY">进行中</option>
              <option value="FINISHED">已结束</option>
            </select>
          </div>
        </div>

        {/* 比赛列表 */}
        {filteredMatches.length > 0 ? (
          <div className="matches-grid">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} showDetails />
            ))}
          </div>
        ) : (
          <div className="no-data">
            <p>没有找到匹配的比赛</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;