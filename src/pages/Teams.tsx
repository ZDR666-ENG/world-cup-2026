import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useWorldCupStore } from '../store/worldcupStore';
import './Teams.css';

const Teams: React.FC = () => {
  const { teams, loading, error, fetchTeams } = useWorldCupStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const filteredTeams = useMemo(() => {
    return teams.filter(team =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.tla.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [teams, searchTerm]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载球队数据...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{error}</p>
        <button onClick={() => fetchTeams()}>重试</button>
      </div>
    );
  }

  return (
    <div className="teams-page">
      <div className="container">
        <h1 className="page-title">
          <span className="title-emoji">🏆</span>
          参赛球队
        </h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="搜索球队..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredTeams.length > 0 ? (
          <div className="teams-grid">
            {filteredTeams.map((team) => (
              <Link to={`/team/${team.id}`} key={team.id} className="team-card">
                <div className="team-card-header">
                  <img src={team.crest} alt={team.name} className="team-card-crest" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{team.name}</h3>
                  <p className="team-card-tla">{team.tla}</p>
                  <div className="team-card-info">
                    <span>🏟️ {team.venue}</span>
                    <span>🎨 {team.clubColors}</span>
                  </div>
                </div>
                <div className="team-card-footer">
                  <span className="view-detail">查看详情 →</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-data">
            <p>{searchTerm ? '没有找到匹配的球队' : '暂无球队数据'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;