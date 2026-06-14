import React from 'react';
import type { Match } from '../types/worldcup';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import './MatchCard.css';

interface MatchCardProps {
  match: Match;
  showDetails?: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, showDetails = false }) => {
  const matchDate = new Date(match.utcDate);
  const formattedDate = format(matchDate, 'yyyy年MM月dd日 HH:mm', { locale: zhCN });
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'SCHEDULED':
        return '未开始';
      case 'TIMED':
        return '已定时';
      case 'IN_PLAY':
        return '进行中';
      case 'PAUSED':
        return '中场休息';
      case 'FINISHED':
        return '已结束';
      case 'POSTPONED':
        return '推迟';
      case 'CANCELLED':
        return '取消';
      case 'AWARDED':
        return '判定';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN_PLAY':
        return '#e53e3e';
      case 'PAUSED':
        return '#dd6b20';
      case 'FINISHED':
        return '#38a169';
      case 'SCHEDULED':
      case 'TIMED':
        return '#3182ce';
      default:
        return '#718096';
    }
  };

  return (
    <div className="match-card">
      <div className="match-header">
        <div className="competition-info">
          <img 
            src={match.competition.emblem} 
            alt={match.competition.name}
            className="competition-emblem"
          />
          <span className="competition-name">{match.competition.name}</span>
        </div>
        <div className="match-status" style={{ backgroundColor: getStatusColor(match.status) }}>
          {getStatusText(match.status)}
        </div>
      </div>

      <div className="match-teams">
        <div className="team home-team">
          <img 
            src={match.homeTeam.crest} 
            alt={match.homeTeam.name}
            className="team-crest"
          />
          <div className="team-info">
            <span className="team-name">{match.homeTeam.shortName || match.homeTeam.name}</span>
            <span className="team-tla">{match.homeTeam.tla}</span>
          </div>
        </div>

        <div className="match-score">
          {match.status === 'IN_PLAY' || match.status === 'PAUSED' || match.status === 'FINISHED' ? (
            <div className="score">
              <span className="home-score">{match.score.fullTime.home}</span>
              <span className="score-divider">-</span>
              <span className="away-score">{match.score.fullTime.away}</span>
            </div>
          ) : (
            <div className="match-time">
              <span className="time">{format(matchDate, 'HH:mm')}</span>
            </div>
          )}
        </div>

        <div className="team away-team">
          <div className="team-info">
            <span className="team-name">{match.awayTeam.shortName || match.awayTeam.name}</span>
            <span className="team-tla">{match.awayTeam.tla}</span>
          </div>
          <img 
            src={match.awayTeam.crest} 
            alt={match.awayTeam.name}
            className="team-crest"
          />
        </div>
      </div>

      {showDetails && (
        <div className="match-details">
          <div className="match-info">
            <span className="match-date">{formattedDate}</span>
            <span className="match-venue">比赛场地</span>
          </div>
          {match.score.halfTime.home !== null && (
            <div className="half-time-score">
              <span>半场比分: {match.score.halfTime.home} - {match.score.halfTime.away}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MatchCard;