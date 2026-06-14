import axios from 'axios';
import type { Match, Standing, Team, News, Player, GoalScorer } from '../types/worldcup';
import { mockMatches, mockStandings, mockTeams, mockNews, mockPlayers, mockGoalScorers } from './mockData';

const API_BASE_URL = import.meta.env.VITE_FOOTBALL_API_BASE_URL || 'https://api.football-data.org/v4';
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'X-Auth-Token': API_KEY, 'Content-Type': 'application/json' },
});

const WORLD_CUP_ID = 2018;

export const getWorldCupMatches = async (matchday?: number): Promise<Match[]> => {
  try {
    const params: Record<string, string | number> = {};
    if (matchday) params.matchday = matchday;
    const response = await apiClient.get<{ matches: Match[] }>(`/competitions/${WORLD_CUP_ID}/matches`, { params });
    return response.data.matches;
  } catch {
    return matchday ? mockMatches.filter(m => m.matchday === matchday) : mockMatches;
  }
};

export const getWorldCupStandings = async (): Promise<Standing[]> => {
  try {
    const response = await apiClient.get<{ standings: Standing[] }>(`/competitions/${WORLD_CUP_ID}/standings`);
    return response.data.standings;
  } catch {
    return mockStandings;
  }
};

export const getWorldCupTeams = async (): Promise<Team[]> => {
  try {
    const response = await apiClient.get<{ teams: Team[] }>(`/competitions/${WORLD_CUP_ID}/teams`);
    return response.data.teams;
  } catch {
    return mockTeams;
  }
};

export const getMatchDetails = async (matchId: number): Promise<Match | undefined> => {
  try {
    const response = await apiClient.get<Match>(`/matches/${matchId}`);
    return response.data;
  } catch {
    return mockMatches.find(m => m.id === matchId);
  }
};

export const getTeamDetails = async (teamId: number): Promise<Team | undefined> => {
  try {
    const response = await apiClient.get<Team>(`/teams/${teamId}`);
    return response.data;
  } catch {
    return mockTeams.find(t => t.id === teamId);
  }
};

export const getTeamMatches = async (teamId: number): Promise<Match[]> => {
  try {
    const response = await apiClient.get<{ matches: Match[] }>(`/teams/${teamId}/matches`);
    return response.data.matches;
  } catch {
    return mockMatches.filter(m => m.homeTeam.id === teamId || m.awayTeam.id === teamId);
  }
};

export const searchTeams = async (query: string): Promise<Team[]> => {
  try {
    const response = await apiClient.get<{ teams: Team[] }>('/teams', { params: { name: query } });
    return response.data.teams;
  } catch {
    const lowerQuery = query.toLowerCase();
    return mockTeams.filter(t => t.name.toLowerCase().includes(lowerQuery) || t.tla.toLowerCase().includes(lowerQuery));
  }
};

export const getWorldCupNews = async (): Promise<News[]> => mockNews;

export const getSchedule = async (matchday?: number): Promise<Match[]> => getWorldCupMatches(matchday);

export const getLiveScores = async (): Promise<Match[]> => {
  try {
    const response = await apiClient.get<{ matches: Match[] }>(`/competitions/${WORLD_CUP_ID}/matches`, {
      params: { status: 'IN_PLAY,PAUSED,FINISHED' }
    });
    return response.data.matches;
  } catch {
    return mockMatches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED' || m.status === 'FINISHED');
  }
};

export const getPlayers = async (): Promise<Player[]> => mockPlayers;

export const getGoalScorers = async (): Promise<GoalScorer[]> => mockGoalScorers;