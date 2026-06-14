import React from 'react';
import type { Team } from '../types/worldcup';
import './TeamCard.css';

interface TeamCardProps {
  team: Team;
  onClick?: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  return (
    <div className="team-card" onClick={onClick}>
      <div className="team-card-header">
        <img 
          src={team.crest} 
          alt={team.name}
          className="team-card-crest"
        />
      </div>
      <div className="team-card-body">
        <h3 className="team-card-name">{team.name}</h3>
        <div className="team-card-details">
          <div className="detail-item">
            <span className="detail-label">成立年份</span>
            <span className="detail-value">{team.founded || '未知'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">主场</span>
            <span className="detail-value">{team.venue || '未知'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">球衣颜色</span>
            <span className="detail-value">{team.clubColors || '未知'}</span>
          </div>
        </div>
      </div>
      <div className="team-card-footer">
        <button className="team-card-button">查看详情</button>
      </div>
    </div>
  );
};

export default TeamCard;