import React, { useEffect } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import './GoalScorers.css';

const GoalScorers: React.FC = () => {
  const { goalScorers, loading, error, fetchGoalScorers } = useWorldCupStore();

  useEffect(() => {
    fetchGoalScorers();
  }, [fetchGoalScorers]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载射手榜...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{error}</p>
        <button onClick={() => fetchGoalScorers()}>重试</button>
      </div>
    );
  }

  const topThree = goalScorers.slice(0, 3);
  const rest = goalScorers.slice(3);

  return (
    <div className="goalkers-page">
      <div className="container">
        <h1 className="page-title">
          <span className="title-emoji">⚽</span>
          射手榜
        </h1>

        <div className="podium">
          {topThree.map((scorer, index) => (
            <div key={scorer.player.id} className={`podium-item rank-${index + 1}`}>
              <div className="podium-player">
                <img src={scorer.player.photo} alt={scorer.player.name} className="podium-photo" />
                <div className="podium-crown">👑</div>
              </div>
              <div className="podium-info">
                <h3 className="podium-name">{scorer.player.name}</h3>
                <p className="podium-team">{scorer.player.team.shortName}</p>
                <div className="podium-goals">
                  <span className="goals-number">{scorer.goals}</span>
                  <span className="goals-label">进球</span>
                </div>
              </div>
              <div className={`podium-rank rank-badge-${index + 1}`}>
                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </div>
            </div>
          ))}
        </div>

        <div className="scorers-table">
          <table>
            <thead>
              <tr>
                <th>排名</th>
                <th>球员</th>
                <th>国家</th>
                <th>进球</th>
                <th>助攻</th>
                <th>点球</th>
                <th>场次</th>
                <th>分钟</th>
              </tr>
            </thead>
            <tbody>
              {rest.map((scorer) => (
                <tr key={scorer.player.id}>
                  <td className="rank-cell">{scorer.rank}</td>
                  <td className="player-cell">
                    <img src={scorer.player.photo} alt="" className="player-thumb" />
                    <span>{scorer.player.name}</span>
                  </td>
                  <td>
                    <img src={scorer.player.team.crest} alt="" className="team-flag" />
                  </td>
                  <td className="goals-cell">{scorer.goals}</td>
                  <td>{scorer.assists}</td>
                  <td>{scorer.penalties}</td>
                  <td>{scorer.matchesPlayed}</td>
                  <td>{scorer.minutesPlayed}'</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoalScorers;