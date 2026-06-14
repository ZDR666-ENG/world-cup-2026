import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWorldCupStore } from '../store/worldcupStore';
import MatchCard from '../components/MatchCard';
import StandingsTable from '../components/StandingsTable';
import './Home.css';

const Home: React.FC = () => {
  const {
    liveScores,
    standings,
    news,
    goalScorers,
    loading,
    error,
    fetchLiveScores,
    fetchStandings,
    fetchNews,
    fetchGoalScorers
  } = useWorldCupStore();

  useEffect(() => {
    fetchLiveScores();
    fetchStandings();
    fetchNews();
    fetchGoalScorers();
  }, [fetchLiveScores, fetchStandings, fetchNews, fetchGoalScorers]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>出错了</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>重试</button>
      </div>
    );
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">2026 FIFA</div>
          <h1 className="hero-title">世界杯</h1>
          <p className="hero-subtitle">实时数据 · 精彩赛事 · 球星风采</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{liveScores.length}</span>
              <span className="stat-label">场比赛</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">支球队</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{goalScorers[0]?.goals || 0}</span>
              <span className="stat-label">最高进球</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">实时比分</h2>
            <Link to="/matches" className="see-all">查看全部 →</Link>
          </div>
          {liveScores.length > 0 ? (
            <div className="matches-grid">
              {liveScores.slice(0, 4).map((match) => (
                <MatchCard key={match.id} match={match} showDetails />
              ))}
            </div>
          ) : (
            <div className="no-data">暂无进行中的比赛</div>
          )}
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">射手榜 TOP 5</h2>
            <Link to="/goals" className="see-all">查看全部 →</Link>
          </div>
          <div className="top-scorers">
            {goalScorers.slice(0, 5).map((scorer, index) => (
              <Link to="/goals" key={scorer.player.id} className="scorer-item">
                <div className="scorer-rank">{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}`}</div>
                <img src={scorer.player.photo} alt="" className="scorer-photo" />
                <div className="scorer-info">
                  <span className="scorer-name">{scorer.player.name}</span>
                  <span className="scorer-team">{scorer.player.team.shortName}</span>
                </div>
                <div className="scorer-goals">{scorer.goals} 球</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">积分榜</h2>
            <Link to="/standings" className="see-all">查看全部 →</Link>
          </div>
          {standings.length > 0 ? (
            <StandingsTable standings={standings} showGroup />
          ) : (
            <div className="no-data">暂无积分榜数据</div>
          )}
        </div>
      </section>

      <section className="section section-news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">最新新闻</h2>
            <Link to="/news" className="see-all">查看全部 →</Link>
          </div>
          {news.length > 0 ? (
            <div className="news-grid">
              {news.slice(0, 3).map((item) => (
                <div key={item.id} className="news-card">
                  <div className="news-image">
                    <img src={item.imageUrl} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>
                    <div className="news-meta">
                      <span className="news-source">{item.source}</span>
                      <span className="news-date">{new Date(item.publishedAt).toLocaleDateString('zh-CN')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">暂无新闻</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;