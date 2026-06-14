import { create } from 'zustand';
import type { Match, Standing, Team, News, Player, GoalScorer } from '../types/worldcup';
import {
  getWorldCupMatches,
  getWorldCupStandings,
  getWorldCupTeams,
  getWorldCupNews,
  getLiveScores,
  getPlayers,
  getGoalScorers
} from '../services/api';

interface WorldCupState {
  matches: Match[];
  standings: Standing[];
  teams: Team[];
  news: News[];
  liveScores: Match[];
  players: Player[];
  goalScorers: GoalScorer[];
  loading: boolean;
  error: string | null;
  currentMatchday: number | null;

  fetchMatches: (matchday?: number) => Promise<void>;
  fetchStandings: () => Promise<void>;
  fetchTeams: () => Promise<void>;
  fetchNews: () => Promise<void>;
  fetchLiveScores: () => Promise<void>;
  fetchPlayers: () => Promise<void>;
  fetchGoalScorers: () => Promise<void>;
  setCurrentMatchday: (matchday: number | null) => void;
  clearError: () => void;
}

export const useWorldCupStore = create<WorldCupState>((set) => ({
  matches: [],
  standings: [],
  teams: [],
  news: [],
  liveScores: [],
  players: [],
  goalScorers: [],
  loading: false,
  error: null,
  currentMatchday: null,

  fetchMatches: async (matchday?: number) => {
    set({ loading: true, error: null });
    try {
      const matches = await getWorldCupMatches(matchday);
      set({ matches, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取比赛数据失败', loading: false });
    }
  },

  fetchStandings: async () => {
    set({ loading: true, error: null });
    try {
      const standings = await getWorldCupStandings();
      set({ standings, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取积分榜失败', loading: false });
    }
  },

  fetchTeams: async () => {
    set({ loading: true, error: null });
    try {
      const teams = await getWorldCupTeams();
      set({ teams, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取球队数据失败', loading: false });
    }
  },

  fetchNews: async () => {
    set({ loading: true, error: null });
    try {
      const news = await getWorldCupNews();
      set({ news, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取新闻失败', loading: false });
    }
  },

  fetchLiveScores: async () => {
    set({ loading: true, error: null });
    try {
      const liveScores = await getLiveScores();
      set({ liveScores, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取实时比分失败', loading: false });
    }
  },

  fetchPlayers: async () => {
    set({ loading: true, error: null });
    try {
      const players = await getPlayers();
      set({ players, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取球员数据失败', loading: false });
    }
  },

  fetchGoalScorers: async () => {
    set({ loading: true, error: null });
    try {
      const goalScorers = await getGoalScorers();
      set({ goalScorers, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : '获取射手榜失败', loading: false });
    }
  },

  setCurrentMatchday: (matchday: number | null) => {
    set({ currentMatchday: matchday });
  },

  clearError: () => {
    set({ error: null });
  },
}));