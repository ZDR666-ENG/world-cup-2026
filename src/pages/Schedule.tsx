import React, { useEffect, useState, useMemo } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import MatchCard from '../components/MatchCard';
import './Schedule.css';

const Schedule: React.FC = () => {
  const { matches, loading, error, fetchMatches } = useWorldCupStore();
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const filteredMatches = useMemo(() => {
    if (selectedDate) {
      return matches.filter(match => {
        const matchDate = new Date(match.utcDate).toISOString().split('T')[0];
        return matchDate === selectedDate;
      });
    }
    return matches;
  }, [matches, selectedDate]);

  // 获取所有唯一日期
  const uniqueDates = Array.from(new Set(
    matches.map(match => new Date(match.utcDate).toISOString().split('T')[0])
  )).sort();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载赛程数据...</p>
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
    <div className="schedule-page">
      <div className="container">
        <h1 className="page-title">赛程表</h1>
        
        {/* 日期选择器 */}
        <div className="date-selector">
          <label>选择日期:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-input"
          />
          {selectedDate && (
            <button 
              className="clear-date-button"
              onClick={() => setSelectedDate('')}
            >
              清除选择
            </button>
          )}
        </div>

        {/* 日期快捷选择 */}
        <div className="date-shortcuts">
          <button 
            className={`shortcut-button ${!selectedDate ? 'active' : ''}`}
            onClick={() => setSelectedDate('')}
          >
            全部日期
          </button>
          {uniqueDates.slice(0, 7).map(date => (
            <button
              key={date}
              className={`shortcut-button ${selectedDate === date ? 'active' : ''}`}
              onClick={() => setSelectedDate(date)}
            >
              {new Date(date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
            </button>
          ))}
        </div>

        {/* 赛程列表 */}
        {filteredMatches.length > 0 ? (
          <div className="schedule-grid">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} showDetails />
            ))}
          </div>
        ) : (
          <div className="no-data">
            <p>{selectedDate ? '该日期没有比赛' : '暂无赛程数据'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;