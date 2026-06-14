import React from 'react';
import type { Standing } from '../types/worldcup';
import './StandingsTable.css';

interface StandingsTableProps {
  standings: Standing[];
  showGroup?: boolean;
}

const StandingsTable: React.FC<StandingsTableProps> = ({ standings, showGroup = true }) => {
  const groupedStandings = standings.reduce((acc, standing) => {
    const group = standing.group || 'default';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(standing);
    return acc;
  }, {} as Record<string, Standing[]>);

  return (
    <div className="standings-container">
      {showGroup ? (
        Object.entries(groupedStandings).map(([group, groupStandings]) => (
          <div key={group} className="group-standings">
            <h3 className="group-title">{group}</h3>
            {groupStandings.map((standing, index) => (
              <div key={index} className="standings-table-wrapper">
                <table className="standings-table">
                  <thead>
                    <tr>
                      <th className="position">#</th>
                      <th className="team">球队</th>
                      <th className="played">场</th>
                      <th className="won">胜</th>
                      <th className="drawn">平</th>
                      <th className="lost">负</th>
                      <th className="goals-for">进</th>
                      <th className="goals-against">失</th>
                      <th className="goal-difference">净</th>
                      <th className="points">分</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standing.table.map((row) => (
                      <tr key={row.team.id} className={row.position <= 2 ? 'qualified' : ''}>
                        <td className="position">{row.position}</td>
                        <td className="team">
                          <div className="team-cell">
                            <img 
                              src={row.team.crest} 
                              alt={row.team.name}
                              className="team-crest"
                            />
                            <span className="team-name">{row.team.shortName || row.team.name}</span>
                          </div>
                        </td>
                        <td className="played">{row.playedGames}</td>
                        <td className="won">{row.won}</td>
                        <td className="drawn">{row.draw}</td>
                        <td className="lost">{row.lost}</td>
                        <td className="goals-for">{row.goalsFor}</td>
                        <td className="goals-against">{row.goalsAgainst}</td>
                        <td className="goal-difference">{row.goalDifference > 0 ? '+' : ''}{row.goalDifference}</td>
                        <td className="points"><strong>{row.points}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="standings-table-wrapper">
          <table className="standings-table">
            <thead>
              <tr>
                <th className="position">#</th>
                <th className="team">球队</th>
                <th className="played">场</th>
                <th className="won">胜</th>
                <th className="drawn">平</th>
                <th className="lost">负</th>
                <th className="goals-for">进</th>
                <th className="goals-against">失</th>
                <th className="goal-difference">净</th>
                <th className="points">分</th>
              </tr>
            </thead>
            <tbody>
              {standings[0]?.table.map((row) => (
                <tr key={row.team.id} className={row.position <= 2 ? 'qualified' : ''}>
                  <td className="position">{row.position}</td>
                  <td className="team">
                    <div className="team-cell">
                      <img 
                        src={row.team.crest} 
                        alt={row.team.name}
                        className="team-crest"
                      />
                      <span className="team-name">{row.team.shortName || row.team.name}</span>
                    </div>
                  </td>
                  <td className="played">{row.playedGames}</td>
                  <td className="won">{row.won}</td>
                  <td className="drawn">{row.draw}</td>
                  <td className="lost">{row.lost}</td>
                  <td className="goals-for">{row.goalsFor}</td>
                  <td className="goals-against">{row.goalsAgainst}</td>
                  <td className="goal-difference">{row.goalDifference > 0 ? '+' : ''}{row.goalDifference}</td>
                  <td className="points"><strong>{row.points}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StandingsTable;