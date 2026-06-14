import React, { useEffect } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import MatchCard from '../components/MatchCard';
import StandingsTable from '../components/StandingsTable';
import './Home.css';

const Home: React.FC = () => {
  const { 
    liveScores, 
    standings, 
    news, 
    loading, 
    error, 
    fetchLiveScores, 
    fetchStandings, 
    fetchNews 
  } = useWorldCupStore();

  useEffect(() => {
    fetchLiveScores();
    fetchStandings();
    fetchNews();
  }, [fetchLiveScores, fetchStandings, fetchNews]);

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
      {/* 英雄区域 */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">2026 FIFA 世界杯</h1>
          <p className="hero-subtitle">实时数据 · 精彩赛事 · 完整统计</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{liveScores.length}</span>
              <span className="stat-label">场比赛</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">48</span>
              <span className="stat-label">支球队</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">个小组</span>
            </div>
          </div>
        </div>
      </section>

      {/* 实时比分 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">⚡</span>
            实时比分
          </h2>
          {liveScores.length > 0 ? (
            <div className="matches-grid">
              {liveScores.slice(0, 6).map((match) => (
                <MatchCard key={match.id} match={match} showDetails />
              ))}
            </div>
          ) : (
            <div className="no-data">
              <p>暂无进行中的比赛</p>
            </div>
          )}
        </div>
      </section>

      {/* 积分榜 */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">📊</span>
            小组积分榜
          </h2>
          {standings.length > 0 ? (
            <StandingsTable standings={standings} showGroup />
          ) : (
            <div className="no-data">
              <p>暂无积分榜数据</p>
            </div>
          )}
        </div>
      </section>

      {/* 新闻 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">📰</span>
            最新新闻
          </h2>
          {news.length > 0 ? (
            <div className="news-grid">
              {news.map((item) => (
                <div key={item.id} className="news-card">
                  <div className="news-image">
                    <img src={item.imageUrl} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>
                    <div className="news-meta">
                      <span className="news-source">{item.source}</span>
                      <span className="news-date">
                        {new Date(item.publishedAt).toLocaleDateString('zh-CN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">
              <p>暂无新闻</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;