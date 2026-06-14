import React, { useEffect, useState, useMemo } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import './Players.css';

const Players: React.FC = () => {
  const { players, loading, error, fetchPlayers } = useWorldCupStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  const filteredPlayers = useMemo(() => {
    let result = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedPosition !== 'all') {
      result = result.filter(player => player.positionShort === selectedPosition);
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'goals': return b.goals - a.goals;
        case 'assists': return b.assists - a.assists;
        case 'rating': return b.rating - a.rating;
        default: return b.rating - a.rating;
      }
    });

    return result;
  }, [players, searchTerm, selectedPosition, sortBy]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载球员数据...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{error}</p>
        <button onClick={() => fetchPlayers()}>重试</button>
      </div>
    );
  }

  return (
    <div className="players-page">
      <div className="container">
        <h1 className="page-title">
          <span className="title-emoji">⭐</span>
          球员中心
        </h1>

        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="搜索球员或国家..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
              <option value="all">全部位置</option>
              <option value="FW">前锋</option>
              <option value="MF">中场</option>
              <option value="DF">后卫</option>
              <option value="GK">门将</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="rating">评分</option>
              <option value="goals">进球</option>
              <option value="assists">助攻</option>
            </select>
          </div>
        </div>

        <div className="players-grid">
          {filteredPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-header">
                <div className="player-photo-container">
                  <img src={player.photo} alt={player.name} className="player-photo" />
                  <div className="player-rating">{player.rating}</div>
                </div>
                <div className="player-number">#{player.shirtNumber}</div>
              </div>
              <div className="player-info">
                <h3 className="player-name">{player.name}</h3>
                <p className="player-team">
                  <img src={player.team.crest} alt="" className="team-flag" />
                  {player.team.shortName}
                </p>
                <p className="player-position">{player.position}</p>
              </div>
              <div className="player-stats">
                <div className="stat">
                  <span className="stat-value">{player.goals}</span>
                  <span className="stat-label">进球</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{player.assists}</span>
                  <span className="stat-label">助攻</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{player.matchesPlayed}</span>
                  <span className="stat-label">场次</span>
                </div>
              </div>
              <div className="player-highlights">
                {player.highlights.slice(0, 2).map((highlight, idx) => (
                  <span key={idx} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;