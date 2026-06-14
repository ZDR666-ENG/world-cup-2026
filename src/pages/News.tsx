import React, { useEffect, useState } from 'react';
import { useWorldCupStore } from '../store/worldcupStore';
import './News.css';

const News: React.FC = () => {
  const { news, loading, error, fetchNews } = useWorldCupStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const filteredNews = news.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.source.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>加载新闻数据...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>加载失败</h2>
        <p>{error}</p>
        <button onClick={() => fetchNews()}>重试</button>
      </div>
    );
  }

  return (
    <div className="news-page">
      <div className="container">
        <h1 className="page-title">新闻</h1>
        
        {/* 分类筛选 */}
        <div className="category-filter">
          <button 
            className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            全部
          </button>
          <button 
            className={`category-button ${selectedCategory === 'FIFA' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('FIFA')}
          >
            FIFA官方
          </button>
          <button 
            className={`category-button ${selectedCategory === '体育' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('体育')}
          >
            体育新闻
          </button>
        </div>

        {/* 新闻列表 */}
        {filteredNews.length > 0 ? (
          <div className="news-list">
            {filteredNews.map((item) => (
              <div key={item.id} className="news-article">
                <div className="article-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="article-content">
                  <h2 className="article-title">{item.title}</h2>
                  <p className="article-description">{item.description}</p>
                  <div className="article-meta">
                    <span className="article-source">{item.source}</span>
                    <span className="article-date">
                      {new Date(item.publishedAt).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                    阅读更多
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">
            <p>{selectedCategory !== 'all' ? '该分类暂无新闻' : '暂无新闻'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;