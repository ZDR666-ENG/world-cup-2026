import type { Match, Standing, Team, News, Player, GoalScorer } from '../types/worldcup';
import { mockMatches, mockStandings, mockTeams, mockNews, mockPlayers, mockGoalScorers } from './mockData';

export const getWorldCupMatches = async (matchday?: number): Promise<Match[]> => {
  return matchday ? mockMatches.filter(m => m.matchday === matchday) : mockMatches;
};

export const getWorldCupStandings = async (): Promise<Standing[]> => mockStandings;

export const getWorldCupTeams = async (): Promise<Team[]> => mockTeams;

export const getMatchDetails = async (matchId: number): Promise<Match | undefined> => mockMatches.find(m => m.id === matchId);

export const getTeamDetails = async (teamId: number): Promise<Team | undefined> => mockTeams.find(t => t.id === teamId);

export const getTeamMatches = async (teamId: number): Promise<Match[]> => mockMatches.filter(m => m.homeTeam.id === teamId || m.awayTeam.id === teamId);

export const searchTeams = async (query: string): Promise<Team[]> => {
  const lowerQuery = query.toLowerCase();
  return mockTeams.filter(t => t.name.toLowerCase().includes(lowerQuery) || t.tla.toLowerCase().includes(lowerQuery));
};

export const getWorldCupNews = async (): Promise<News[]> => mockNews;

export const getSchedule = async (matchday?: number): Promise<Match[]> => getWorldCupMatches(matchday);

export const getLiveScores = async (): Promise<Match[]> => mockMatches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED' || m.status === 'FINISHED');

export const getPlayers = async (): Promise<Player[]> => mockPlayers;

export const getGoalScorers = async (): Promise<GoalScorer[]> => mockGoalScorers;