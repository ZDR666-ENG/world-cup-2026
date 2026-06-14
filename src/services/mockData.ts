import type { Match, Standing, Team, News } from '../types/worldcup';

export const mockTeams: Team[] = [
  { id: 1, name: '巴西', shortName: '巴西', tla: 'BRA', crest: 'https://flagcdn.com/w80/br.png', address: '', website: '', founded: 1914, clubColors: '黄/绿', venue: '马拉卡纳', lastUpdated: '' },
  { id: 2, name: '阿根廷', shortName: '阿根廷', tla: 'ARG', crest: 'https://flagcdn.com/w80/ar.png', address: '', website: '', founded: 1893, clubColors: '天蓝/白', venue: '纪念碑', lastUpdated: '' },
  { id: 3, name: '法国', shortName: '法国', tla: 'FRA', crest: 'https://flagcdn.com/w80/fr.png', address: '', website: '', founded: 1904, clubColors: '蓝/白/红', venue: '法兰西大球场', lastUpdated: '' },
  { id: 4, name: '德国', shortName: '德国', tla: 'GER', crest: 'https://flagcdn.com/w80/de.png', address: '', website: '', founded: 1900, clubColors: '黑/红/金', venue: '安联球场', lastUpdated: '' },
  { id: 5, name: '西班牙', shortName: '西班牙', tla: 'ESP', crest: 'https://flagcdn.com/w80/es.png', address: '', website: '', founded: 1909, clubColors: '红/黄', venue: '伯纳乌', lastUpdated: '' },
  { id: 6, name: '英格兰', shortName: '英格兰', tla: 'ENG', crest: 'https://flagcdn.com/w80/gb.png', address: '', website: '', founded: 1863, clubColors: '白', venue: '温布利', lastUpdated: '' },
  { id: 7, name: '葡萄牙', shortName: '葡萄牙', tla: 'POR', crest: 'https://flagcdn.com/w80/pt.png', address: '', website: '', founded: 1914, clubColors: '红/绿', venue: '光明球场', lastUpdated: '' },
  { id: 8, name: '荷兰', shortName: '荷兰', tla: 'NED', crest: 'https://flagcdn.com/w80/nl.png', address: '', website: '', founded: 1889, clubColors: '橙', venue: '克鲁伊夫球场', lastUpdated: '' },
  { id: 9, name: '日本', shortName: '日本', tla: 'JPN', crest: 'https://flagcdn.com/w80/jp.png', address: '', website: '', founded: 1921, clubColors: '蓝/白', venue: '国立竞技场', lastUpdated: '' },
  { id: 10, name: '韩国', shortName: '韩国', tla: 'KOR', crest: 'https://flagcdn.com/w80/kr.png', address: '', website: '', founded: 1928, clubColors: '红/蓝', venue: '首尔世界杯球场', lastUpdated: '' },
  { id: 11, name: '中国', shortName: '中国', tla: 'CHN', crest: 'https://flagcdn.com/w80/cn.png', address: '', website: '', founded: 1924, clubColors: '红/黄', venue: '工人体育场', lastUpdated: '' },
  { id: 12, name: '美国', shortName: '美国', tla: 'USA', crest: 'https://flagcdn.com/w80/us.png', address: '', website: '', founded: 1913, clubColors: '红/白/蓝', venue: '玫瑰碗', lastUpdated: '' },
  { id: 13, name: '墨西哥', shortName: '墨西哥', tla: 'MEX', crest: 'https://flagcdn.com/w80/mx.png', address: '', website: '', founded: 1927, clubColors: '绿/白/红', venue: '阿兹特克', lastUpdated: '' },
  { id: 14, name: '意大利', shortName: '意大利', tla: 'ITA', crest: 'https://flagcdn.com/w80/it.png', address: '', website: '', founded: 1898, clubColors: '蓝/白', venue: '圣西罗', lastUpdated: '' },
  { id: 15, name: '比利时', shortName: '比利时', tla: 'BEL', crest: 'https://flagcdn.com/w80/be.png', address: '', website: '', founded: 1895, clubColors: '红/黑', venue: '博杜安国王球场', lastUpdated: '' },
  { id: 16, name: '克罗地亚', shortName: '克罗地亚', tla: 'CRO', crest: 'https://flagcdn.com/w80/hr.png', address: '', website: '', founded: 1912, clubColors: '红/白/蓝', venue: '马克西米尔球场', lastUpdated: '' },
  { id: 17, name: '摩洛哥', shortName: '摩洛哥', tla: 'MAR', crest: 'https://flagcdn.com/w80/ma.png', address: '', website: '', founded: 1906, clubColors: '红/绿', venue: '穆莱阿卜杜拉球场', lastUpdated: '' },
  { id: 18, name: '澳大利亚', shortName: '澳大利亚', tla: 'AUS', crest: 'https://flagcdn.com/w80/au.png', address: '', website: '', founded: 1921, clubColors: '绿/金', venue: '悉尼球场', lastUpdated: '' },
  { id: 19, name: '加拿大', shortName: '加拿大', tla: 'CAN', crest: 'https://flagcdn.com/w80/ca.png', address: '', website: '', founded: 1912, clubColors: '红/白', venue: 'BMO球场', lastUpdated: '' },
  { id: 20, name: '塞内加尔', shortName: '塞内加尔', tla: 'SEN', crest: 'https://flagcdn.com/w80/sn.png', address: '', website: '', founded: 1960, clubColors: '绿/黄/红', venue: '戴高乐球场', lastUpdated: '' },
  { id: 21, name: '波兰', shortName: '波兰', tla: 'POL', crest: 'https://flagcdn.com/w80/pl.png', address: '', website: '', founded: 1919, clubColors: '白/红', venue: '华沙国家球场', lastUpdated: '' },
  { id: 22, name: '乌拉圭', shortName: '乌拉圭', tla: 'URU', crest: 'https://flagcdn.com/w80/uy.png', address: '', website: '', founded: 1900, clubColors: '天蓝/白', venue: '世纪球场', lastUpdated: '' },
  { id: 23, name: '瑞士', shortName: '瑞士', tla: 'SUI', crest: 'https://flagcdn.com/w80/ch.png', address: '', website: '', founded: 1895, clubColors: '红/白', venue: '圣雅各布球场', lastUpdated: '' },
  { id: 24, name: '哥伦比亚', shortName: '哥伦比亚', tla: 'COL', crest: 'https://flagcdn.com/w80/co.png', address: '', website: '', founded: 1926, clubColors: '黄/蓝/红', venue: '罗伯托·梅伦德斯球场', lastUpdated: '' },
];

const now = new Date();
const getDate = (daysOffset: number, hours: number) => {
  const d = new Date(now);
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hours, 0, 0, 0);
  return d.toISOString();
};

export const mockMatches: Match[] = [
  // 小组赛 A组
  { id: 1, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(0, 21), status: 'IN_PLAY', matchday: 1, stage: 'GROUP_STAGE', group: 'A', lastUpdated: '', homeTeam: mockTeams[0], awayTeam: mockTeams[8], score: { winner: null, duration: 'REGULAR', fullTime: { home: 2, away: 1 }, halfTime: { home: 1, away: 0 } }, referees: [] },
  { id: 2, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(0, 18), status: 'FINISHED', matchday: 1, stage: 'GROUP_STAGE', group: 'A', lastUpdated: '', homeTeam: mockTeams[11], awayTeam: mockTeams[12], score: { winner: 'HOME_TEAM', duration: 'REGULAR', fullTime: { home: 3, away: 1 }, halfTime: { home: 2, away: 0 } }, referees: [] },
  // 小组赛 B组
  { id: 3, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(1, 21), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'B', lastUpdated: '', homeTeam: mockTeams[2], awayTeam: mockTeams[9], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 4, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(1, 18), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'B', lastUpdated: '', homeTeam: mockTeams[3], awayTeam: mockTeams[10], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  // 小组赛 C组
  { id: 5, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(2, 21), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'C', lastUpdated: '', homeTeam: mockTeams[4], awayTeam: mockTeams[13], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 6, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(2, 18), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'C', lastUpdated: '', homeTeam: mockTeams[5], awayTeam: mockTeams[14], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  // 小组赛 D组
  { id: 7, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(3, 21), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'D', lastUpdated: '', homeTeam: mockTeams[6], awayTeam: mockTeams[15], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 8, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(3, 18), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'D', lastUpdated: '', homeTeam: mockTeams[7], awayTeam: mockTeams[16], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  // 更多比赛...
  { id: 9, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 2 }, utcDate: getDate(4, 21), status: 'SCHEDULED', matchday: 2, stage: 'GROUP_STAGE', group: 'A', lastUpdated: '', homeTeam: mockTeams[17], awayTeam: mockTeams[18], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 10, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 2 }, utcDate: getDate(4, 18), status: 'SCHEDULED', matchday: 2, stage: 'GROUP_STAGE', group: 'A', lastUpdated: '', homeTeam: mockTeams[19], awayTeam: mockTeams[20], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 11, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 2 }, utcDate: getDate(5, 21), status: 'SCHEDULED', matchday: 2, stage: 'GROUP_STAGE', group: 'B', lastUpdated: '', homeTeam: mockTeams[21], awayTeam: mockTeams[22], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 12, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 2 }, utcDate: getDate(5, 18), status: 'SCHEDULED', matchday: 2, stage: 'GROUP_STAGE', group: 'B', lastUpdated: '', homeTeam: mockTeams[23], awayTeam: mockTeams[1], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
];

export const mockStandings: Standing[] = [
  {
    stage: 'GROUP_STAGE', type: 'TOTAL', group: 'A',
    table: [
      { position: 1, team: mockTeams[11], playedGames: 1, won: 1, draw: 0, lost: 0, points: 3, goalsFor: 3, goalsAgainst: 1, goalDifference: 2 },
      { position: 2, team: mockTeams[0], playedGames: 1, won: 1, draw: 0, lost: 0, points: 3, goalsFor: 2, goalsAgainst: 1, goalDifference: 1 },
      { position: 3, team: mockTeams[12], playedGames: 1, won: 0, draw: 0, lost: 1, points: 0, goalsFor: 1, goalsAgainst: 3, goalDifference: -2 },
      { position: 4, team: mockTeams[8], playedGames: 1, won: 0, draw: 0, lost: 1, points: 0, goalsFor: 1, goalsAgainst: 2, goalDifference: -1 },
    ]
  },
  {
    stage: 'GROUP_STAGE', type: 'TOTAL', group: 'B',
    table: [
      { position: 1, team: mockTeams[2], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 2, team: mockTeams[3], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 3, team: mockTeams[9], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 4, team: mockTeams[10], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
    ]
  },
  {
    stage: 'GROUP_STAGE', type: 'TOTAL', group: 'C',
    table: [
      { position: 1, team: mockTeams[4], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 2, team: mockTeams[5], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 3, team: mockTeams[13], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 4, team: mockTeams[14], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
    ]
  },
  {
    stage: 'GROUP_STAGE', type: 'TOTAL', group: 'D',
    table: [
      { position: 1, team: mockTeams[6], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 2, team: mockTeams[7], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 3, team: mockTeams[15], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
      { position: 4, team: mockTeams[16], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
    ]
  },
];

export const mockNews: News[] = [
  { id: 1, title: '2026世界杯倒计时：赛事筹备进入冲刺阶段', description: '随着世界杯开幕临近，各主办城市场馆建设已全部完工，安保、交通等配套设施准备就绪。', content: '', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', publishedAt: new Date().toISOString(), source: 'FIFA官方', url: 'https://www.fifa.com' },
  { id: 2, title: '巴西队公布世界杯35人初选名单', description: '巴西主帅公布了参加2026世界杯的35人初选名单，多名年轻球员入选。', content: '', imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800', publishedAt: new Date(Date.now() - 86400000).toISOString(), source: '体育新闻', url: 'https://www.sports.com' },
  { id: 3, title: '世界杯门票销售创历史新高', description: '2026世界杯门票第一阶段销售已结束，总销售额突破10亿美元，创下世界杯历史纪录。', content: '', imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800', publishedAt: new Date(Date.now() - 172800000).toISOString(), source: 'FIFA官方', url: 'https://www.fifa.com' },
  { id: 4, title: '阿根廷队卫冕之路：梅西最后一届世界杯', description: '梅西确认将参加2026世界杯，这将是他职业生涯的最后一届世界杯。', content: '', imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800', publishedAt: new Date(Date.now() - 259200000).toISOString(), source: '足球周刊', url: 'https://www.footballweekly.com' },
  { id: 5, title: '世界杯用球正式发布：融合科技与传统', description: '阿迪达斯正式发布2026世界杯官方用球，采用最新的温度感应技术。', content: '', imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800', publishedAt: new Date(Date.now() - 345600000).toISOString(), source: '体育新闻', url: 'https://www.sports.com' },
];