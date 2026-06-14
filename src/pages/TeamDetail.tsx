import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWorldCupStore } from '../store/worldcupStore';
import './TeamDetail.css';

const TeamDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { teams, matches, players, loading, fetchTeams, fetchMatches, fetchPlayers } = useWorldCupStore();
  const [activeTab, setActiveTab] = useState<'roster' | 'matches'>('roster');

  useEffect(() => {
    fetchTeams();
    fetchMatches();
    fetchPlayers();
  }, [fetchTeams, fetchMatches, fetchPlayers]);

  const team = teams.find(t => t.id === Number(id));
  const teamMatches = matches.filter(m => m.homeTeam.id === Number(id) || m.awayTeam.id === Number(id));
  const teamPlayers = players.filter(p => p.team.id === Number(id));

  const recentMatches = teamMatches.slice(-5).reverse();

  const getMatchResult = (match: typeof teamMatches[0]) => {
    if (match.status !== 'FINISHED') return 'pending';
    if (match.homeTeam.id === Number(id)) {
      return match.score.fullTime.home! > match.score.fullTime.away! ? 'win' :
             match.score.fullTime.home! < match.score.fullTime.away! ? 'loss' : 'draw';
    } else {
      return match.score.fullTime.away! > match.score.fullTime.home! ? 'win' :
             match.score.fullTime.away! < match.score.fullTime.home! ? 'loss' : 'draw';
    }
  };

  if (loading) {
    return <div className="loading-container"><div className="loading-spinner"></div><p>加载中...</p></div>;
  }

  if (!team) {
    return <div className="error-container"><h2>未找到球队</h2><Link to="/teams">返回球队列表</Link></div>;
  }

  return (
    <div className="team-detail-page">
      <div className="team-hero" style={{background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`}}>
        <Link to="/teams" className="back-btn">← 返回</Link>
        <div className="team-hero-content">
          <img src={team.crest} alt={team.name} className="team-crest-large" />
          <h1 className="team-name-large">{team.name}</h1>
          <p className="team-tla-large">{team.tla}</p>
          <div className="team-quick-stats">
            <div className="quick-stat">
              <span className="quick-stat-value">{teamPlayers.length}</span>
              <span className="quick-stat-label">球员</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-value">{teamMatches.length}</span>
              <span className="quick-stat-label">比赛</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-value">{teamMatches.filter(m => getMatchResult(m) === 'win').length}</span>
              <span className="quick-stat-label">胜场</span>
            </div>
          </div>
        </div>
      </div>

      <div className="team-info-bar">
        <div className="info-item">
          <span className="info-label">成立年份</span>
          <span className="info-value">{team.founded}</span>
        </div>
        <div className="info-item">
          <span className="info-label">主场</span>
          <span className="info-value">{team.venue}</span>
        </div>
        <div className="info-item">
          <span className="info-label">球衣颜色</span>
          <span className="info-value">{team.clubColors}</span>
        </div>
      </div>

      <div className="container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'roster' ? 'active' : ''}`}
            onClick={() => setActiveTab('roster')}
          >
            球队阵容 ({teamPlayers.length})
          </button>
          <button
            className={`tab ${activeTab === 'matches' ? 'active' : ''}`}
            onClick={() => setActiveTab('matches')}
          >
            近期战绩 ({recentMatches.length})
          </button>
        </div>

        {activeTab === 'roster' && (
          <div className="roster-grid">
            {teamPlayers.length > 0 ? (
              teamPlayers.map(player => (
                <Link to="/players" key={player.id} className="player-roster-card">
                  <div className="player-roster-header">
                    <span className="player-number">#{player.shirtNumber}</span>
                    <img src={player.photo} alt={player.name} className="player-roster-photo" />
                  </div>
                  <div className="player-roster-info">
                    <h3>{player.name}</h3>
                    <p className="player-position">{player.position}</p>
                    <div className="player-roster-stats">
                      <span>⚽ {player.goals}</span>
                      <span>🅰️ {player.assists}</span>
                      <span>⭐ {player.rating}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="no-data">暂无球员数据</p>
            )}
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="recent-matches">
            {recentMatches.length > 0 ? (
              recentMatches.map(match => {
                const result = getMatchResult(match);
                const isHome = match.homeTeam.id === Number(id);
                return (
                  <div key={match.id} className={`match-result-card ${result}`}>
                    <div className="match-result-teams">
                      <div className={`team-side ${isHome ? 'home' : 'away'}`}>
                        <img src={isHome ? match.homeTeam.crest : match.awayTeam.crest} alt="" />
                        <span>{isHome ? match.homeTeam.shortName : match.awayTeam.shortName}</span>
                      </div>
                      <div className="match-result-score">
                        <span>{match.score.fullTime.home}</span>
                        <span className="score-sep">-</span>
                        <span>{match.score.fullTime.away}</span>
                      </div>
                      <div className={`team-side ${isHome ? 'away' : 'home'}`}>
                        <img src={isHome ? match.awayTeam.crest : match.homeTeam.crest} alt="" />
                        <span>{isHome ? match.awayTeam.shortName : match.homeTeam.shortName}</span>
                      </div>
                    </div>
                    <div className="match-result-info">
                      <span className={`result-badge ${result}`}>
                        {result === 'win' ? '胜' : result === 'loss' ? '负' : '平'}
                      </span>
                      <span className="match-date">{new Date(match.utcDate).toLocaleDateString('zh-CN')}</span>
                      <span className="match-group">{match.group}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="no-data">暂无比赛记录</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamDetail;