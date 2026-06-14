export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface Match {
  id: number;
  competition: {
    id: number;
    name: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
  };
  utcDate: string;
  status: 'SCHEDULED' | 'TIMED' | 'IN_PLAY' | 'PAUSED' | 'FINISHED' | 'POSTPONED' | 'CANCELLED' | 'AWARDED';
  matchday: number;
  stage: string;
  group: string | null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: {
    winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null;
    duration: string;
    fullTime: {
      home: number | null;
      away: number | null;
    };
    halfTime: {
      home: number | null;
      away: number | null;
    };
  };
  referees: Array<{
    id: number;
    name: string;
    type: string;
    nationality: string;
  }>;
}

export interface Standing {
  stage: string;
  type: string;
  group: string | null;
  table: Array<{
    position: number;
    team: Team;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  }>;
}

export interface Player {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  position: string;
  shirtNumber: number;
  lastUpdated: string;
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: Team | null;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

export interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  source: string;
  url: string;
}

export interface WorldCupData {
  competition: Competition;
  matches: Match[];
  standings: Standing[];
  teams: Team[];
}