import type { Match, Standing, Team, News } from '../types/worldcup';
import { mockMatches, mockStandings, mockTeams, mockNews } from './mockData';

// 模拟网络延迟
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 获取世界杯比赛数据
export const getWorldCupMatches = async (matchday?: number): Promise<Match[]> => {
  await delay(300);
  if (matchday) {
    return mockMatches.filter(m => m.matchday === matchday);
  }
  return mockMatches;
};

// 获取世界杯积分榜
export const getWorldCupStandings = async (): Promise<Standing[]> => {
  await delay(300);
  return mockStandings;
};

// 获取世界杯球队
export const getWorldCupTeams = async (): Promise<Team[]> => {
  await delay(300);
  return mockTeams;
};

// 获取世界杯比赛详情
export const getMatchDetails = async (matchId: number): Promise<Match | undefined> => {
  await delay(200);
  return mockMatches.find(m => m.id === matchId);
};

// 获取球队详情
export const getTeamDetails = async (teamId: number): Promise<Team | undefined> => {
  await delay(200);
  return mockTeams.find(t => t.id === teamId);
};

// 获取球队比赛
export const getTeamMatches = async (teamId: number): Promise<Match[]> => {
  await delay(300);
  return mockMatches.filter(m => m.homeTeam.id === teamId || m.awayTeam.id === teamId);
};

// 搜索球队
export const searchTeams = async (query: string): Promise<Team[]> => {
  await delay(200);
  const lowerQuery = query.toLowerCase();
  return mockTeams.filter(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.tla.toLowerCase().includes(lowerQuery)
  );
};

// 获取世界杯新闻
export const getWorldCupNews = async (): Promise<News[]> => {
  await delay(300);
  return mockNews;
};

// 获取赛程表
export const getSchedule = async (matchday?: number): Promise<Match[]> => {
  await delay(300);
  if (matchday) {
    return mockMatches.filter(m => m.matchday === matchday);
  }
  return mockMatches;
};

// 获取实时比分
export const getLiveScores = async (): Promise<Match[]> => {
  await delay(300);
  return mockMatches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED' || m.status === 'FINISHED');
};