import axios from 'axios';
import type { Match, Standing, Team, News } from '../types/worldcup';
import { mockMatches, mockStandings, mockTeams, mockNews } from './mockData';

const API_BASE_URL = import.meta.env.VITE_FOOTBALL_API_BASE_URL || 'https://api.football-data.org/v4';
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Auth-Token': API_KEY,
    'Content-Type': 'application/json',
  },
});

// 2026世界杯竞赛ID
const WORLD_CUP_ID = 2018; // FIFA World Cup

// 获取世界杯比赛数据
export const getWorldCupMatches = async (matchday?: number): Promise<Match[]> => {
  try {
    const params: Record<string, string | number> = {};
    if (matchday) params.matchday = matchday;
    const response = await apiClient.get<{ matches: Match[] }>(`/competitions/${WORLD_CUP_ID}/matches`, { params });
    return response.data.matches;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return matchday ? mockMatches.filter(m => m.matchday === matchday) : mockMatches;
  }
};

// 获取世界杯积分榜
export const getWorldCupStandings = async (): Promise<Standing[]> => {
  try {
    const response = await apiClient.get<{ standings: Standing[] }>(`/competitions/${WORLD_CUP_ID}/standings`);
    return response.data.standings;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return mockStandings;
  }
};

// 获取世界杯球队
export const getWorldCupTeams = async (): Promise<Team[]> => {
  try {
    const response = await apiClient.get<{ teams: Team[] }>(`/competitions/${WORLD_CUP_ID}/teams`);
    return response.data.teams;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return mockTeams;
  }
};

// 获取世界杯比赛详情
export const getMatchDetails = async (matchId: number): Promise<Match | undefined> => {
  try {
    const response = await apiClient.get<Match>(`/matches/${matchId}`);
    return response.data;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return mockMatches.find(m => m.id === matchId);
  }
};

// 获取球队详情
export const getTeamDetails = async (teamId: number): Promise<Team | undefined> => {
  try {
    const response = await apiClient.get<Team>(`/teams/${teamId}`);
    return response.data;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return mockTeams.find(t => t.id === teamId);
  }
};

// 获取球队比赛
export const getTeamMatches = async (teamId: number): Promise<Match[]> => {
  try {
    const response = await apiClient.get<{ matches: Match[] }>(`/teams/${teamId}/matches`);
    return response.data.matches;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return mockMatches.filter(m => m.homeTeam.id === teamId || m.awayTeam.id === teamId);
  }
};

// 搜索球队
export const searchTeams = async (query: string): Promise<Team[]> => {
  try {
    const response = await apiClient.get<{ teams: Team[] }>('/teams', { params: { name: query } });
    return response.data.teams;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    const lowerQuery = query.toLowerCase();
    return mockTeams.filter(t => t.name.toLowerCase().includes(lowerQuery) || t.tla.toLowerCase().includes(lowerQuery));
  }
};

// 获取世界杯新闻
export const getWorldCupNews = async (): Promise<News[]> => {
  // 新闻需要单独的API，使用模拟数据
  return mockNews;
};

// 获取赛程表
export const getSchedule = async (matchday?: number): Promise<Match[]> => {
  return getWorldCupMatches(matchday);
};

// 获取实时比分
export const getLiveScores = async (): Promise<Match[]> => {
  try {
    const response = await apiClient.get<{ matches: Match[] }>(`/competitions/${WORLD_CUP_ID}/matches`, {
      params: { status: 'IN_PLAY,PAUSED,FINISHED' }
    });
    return response.data.matches;
  } catch (error) {
    console.warn('API请求失败，使用模拟数据:', error);
    return mockMatches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED' || m.status === 'FINISHED');
  }
};