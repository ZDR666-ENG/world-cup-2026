import type { Match, Standing, Team, News, Player, GoalScorer } from '../types/worldcup';

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
];

const now = new Date();
const getDate = (daysOffset: number, hours: number) => {
  const d = new Date(now);
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hours, 0, 0, 0);
  return d.toISOString();
};

export const mockMatches: Match[] = [
  { id: 1, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(0, 21), status: 'IN_PLAY', matchday: 1, stage: 'GROUP_STAGE', group: 'A', lastUpdated: '', homeTeam: mockTeams[0], awayTeam: mockTeams[8], score: { winner: null, duration: 'REGULAR', fullTime: { home: 2, away: 1 }, halfTime: { home: 1, away: 0 } }, referees: [] },
  { id: 2, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(0, 18), status: 'FINISHED', matchday: 1, stage: 'GROUP_STAGE', group: 'A', lastUpdated: '', homeTeam: mockTeams[11], awayTeam: mockTeams[12], score: { winner: 'HOME_TEAM', duration: 'REGULAR', fullTime: { home: 3, away: 1 }, halfTime: { home: 2, away: 0 } }, referees: [] },
  { id: 3, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(1, 21), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'B', lastUpdated: '', homeTeam: mockTeams[2], awayTeam: mockTeams[9], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 4, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(1, 18), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'B', lastUpdated: '', homeTeam: mockTeams[3], awayTeam: mockTeams[10], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 5, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(2, 21), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'C', lastUpdated: '', homeTeam: mockTeams[4], awayTeam: mockTeams[5], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
  { id: 6, competition: { id: 2000, name: 'FIFA 世界杯 2026', emblem: '' }, season: { id: 2026, startDate: '2026-06-11', endDate: '2026-07-19', currentMatchday: 1 }, utcDate: getDate(2, 18), status: 'SCHEDULED', matchday: 1, stage: 'GROUP_STAGE', group: 'C', lastUpdated: '', homeTeam: mockTeams[6], awayTeam: mockTeams[7], score: { winner: null, duration: 'REGULAR', fullTime: { home: null, away: null }, halfTime: { home: null, away: null } }, referees: [] },
];

export const mockStandings: Standing[] = [
  { stage: 'GROUP_STAGE', type: 'TOTAL', group: 'A', table: [
    { position: 1, team: mockTeams[11], playedGames: 1, won: 1, draw: 0, lost: 0, points: 3, goalsFor: 3, goalsAgainst: 1, goalDifference: 2 },
    { position: 2, team: mockTeams[0], playedGames: 1, won: 1, draw: 0, lost: 0, points: 3, goalsFor: 2, goalsAgainst: 1, goalDifference: 1 },
    { position: 3, team: mockTeams[12], playedGames: 1, won: 0, draw: 0, lost: 1, points: 0, goalsFor: 1, goalsAgainst: 3, goalDifference: -2 },
    { position: 4, team: mockTeams[8], playedGames: 1, won: 0, draw: 0, lost: 1, points: 0, goalsFor: 1, goalsAgainst: 2, goalDifference: -1 },
  ]},
  { stage: 'GROUP_STAGE', type: 'TOTAL', group: 'B', table: [
    { position: 1, team: mockTeams[2], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
    { position: 2, team: mockTeams[3], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
    { position: 3, team: mockTeams[9], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
    { position: 4, team: mockTeams[10], playedGames: 0, won: 0, draw: 0, lost: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  ]},
];

export const mockPlayers: Player[] = [
  { id: 1, name: '内马尔', firstName: 'Neymar', lastName: 'Jr', dateOfBirth: '1992-02-05', nationality: '巴西', position: '前锋', positionShort: 'FW', shirtNumber: 10, team: { id: 1, name: '巴西', shortName: '巴西', tla: 'BRA', crest: 'https://flagcdn.com/w80/br.png' }, goals: 5, assists: 3, matchesPlayed: 4, rating: 8.5, photo: 'https://ui-avatars.com/api/?name=Neymar&background=0D8ABC&color=fff&size=200', highlights: ['世界杯历史射手榜前10', '桑巴足球代表人物', '2022年重伤后强势回归'] },
  { id: 2, name: '梅西', firstName: 'Lionel', lastName: 'Messi', dateOfBirth: '1987-06-24', nationality: '阿根廷', position: '前锋', positionShort: 'FW', shirtNumber: 10, team: { id: 2, name: '阿根廷', shortName: '阿根廷', tla: 'ARG', crest: 'https://flagcdn.com/w80/ar.png' }, goals: 4, assists: 5, matchesPlayed: 4, rating: 9.2, photo: 'https://ui-avatars.com/api/?name=Messi&background=75AADB&color=fff&size=200', highlights: ['8座金球奖得主', '世界杯冠军', '历史最伟大球员之一'] },
  { id: 3, name: '姆巴佩', firstName: 'Kylian', lastName: 'Mbappé', dateOfBirth: '1998-12-20', nationality: '法国', position: '前锋', positionShort: 'FW', shirtNumber: 10, team: { id: 3, name: '法国', shortName: '法国', tla: 'FRA', crest: 'https://flagcdn.com/w80/fr.png' }, goals: 6, assists: 2, matchesPlayed: 4, rating: 9.0, photo: 'https://ui-avatars.com/api/?name=Mbappe&background=002654&color=fff&size=200', highlights: ['2018年世界杯冠军', '世界杯决赛帽子戏法', '速度型前锋典范'] },
  { id: 4, name: '哈兰德', firstName: 'Erling', lastName: 'Haaland', dateOfBirth: '2000-07-21', nationality: '挪威', position: '前锋', positionShort: 'FW', shirtNumber: 9, team: { id: 4, name: '德国', shortName: '德国', tla: 'GER', crest: 'https://flagcdn.com/w80/de.png' }, goals: 4, assists: 1, matchesPlayed: 4, rating: 8.8, photo: 'https://ui-avatars.com/api/?name=Haaland&background=DD0000&color=fff&size=200', highlights: ['德甲历史最快50球', '禁区杀手', '身体素质顶级'] },
  { id: 5, name: '维尼修斯', firstName: 'Vinícius', lastName: 'Júnior', dateOfBirth: '2000-07-12', nationality: '巴西', position: '前锋', positionShort: 'FW', shirtNumber: 20, team: { id: 1, name: '巴西', shortName: '巴西', tla: 'BRA', crest: 'https://flagcdn.com/w80/br.png' }, goals: 3, assists: 4, matchesPlayed: 4, rating: 8.7, photo: 'https://ui-avatars.com/api/?name=Vinicius&background=009739&color=fff&size=200', highlights: ['皇马核心', '速度与技术兼备', '欧冠决赛MVP'] },
  { id: 6, name: '贝林厄姆', firstName: 'Jude', lastName: 'Bellingham', dateOfBirth: '2003-06-29', nationality: '英格兰', position: '中场', positionShort: 'MF', shirtNumber: 5, team: { id: 6, name: '英格兰', shortName: '英格兰', tla: 'ENG', crest: 'https://flagcdn.com/w80/gb.png' }, goals: 2, assists: 3, matchesPlayed: 4, rating: 8.4, photo: 'https://ui-avatars.com/api/?name=Bellingham&background=C8102E&color=fff&size=200', highlights: ['皇马新星', '全能中场', '大赛表现出色'] },
  { id: 7, name: '佩德里', firstName: 'Pedri', lastName: 'González', dateOfBirth: '2002-11-25', nationality: '西班牙', position: '中场', positionShort: 'MF', shirtNumber: 8, team: { id: 5, name: '西班牙', shortName: '西班牙', tla: 'ESP', crest: 'https://flagcdn.com/w80/es.png' }, goals: 1, assists: 4, matchesPlayed: 4, rating: 8.6, photo: 'https://ui-avatars.com/api/?name=Pedri&background=AA151D&color=fff&size=200', highlights: ['巴萨核心', '中场指挥官', '传球大师'] },
  { id: 8, name: 'C罗', firstName: 'Cristiano', lastName: 'Ronaldo', dateOfBirth: '1985-02-05', nationality: '葡萄牙', position: '前锋', positionShort: 'FW', shirtNumber: 7, team: { id: 7, name: '葡萄牙', shortName: '葡萄牙', tla: 'POR', crest: 'https://flagcdn.com/w80/pt.png' }, goals: 3, assists: 1, matchesPlayed: 4, rating: 8.1, photo: 'https://ui-avatars.com/api/?name=Ronaldo&background=006600&color=fff&size=200', highlights: ['国家队历史射手王', '欧洲杯冠军', '5座金球奖'] },
  { id: 9, name: '孙兴慜', firstName: 'Son', lastName: 'Heung-min', dateOfBirth: '1992-07-08', nationality: '韩国', position: '前锋', positionShort: 'FW', shirtNumber: 7, team: { id: 10, name: '韩国', shortName: '韩国', tla: 'KOR', crest: 'https://flagcdn.com/w80/kr.png' }, goals: 2, assists: 2, matchesPlayed: 4, rating: 8.3, photo: 'https://ui-avatars.com/api/?name=Son&background=003478&color=fff&size=200', highlights: ['亚洲足球骄傲', '英超金靴', '左右脚均衡'] },
  { id: 10, name: '久保建英', firstName: 'Kubo', lastName: 'Takefusa', dateOfBirth: '2001-06-04', nationality: '日本', position: '中场', positionShort: 'MF', shirtNumber: 10, team: { id: 9, name: '日本', shortName: '日本', tla: 'JPN', crest: 'https://flagcdn.com/w80/jp.png' }, goals: 2, assists: 3, matchesPlayed: 4, rating: 8.2, photo: 'https://ui-avatars.com/api/?name=Kubo&background=BC002D&color=fff&size=200', highlights: ['日本足球天才', '巴萨青训出身', '技术细腻'] },
];

export const mockGoalScorers: GoalScorer[] = [
  { rank: 1, player: mockPlayers[2], goals: 6, assists: 2, penalties: 2, matchesPlayed: 4, minutesPlayed: 360 },
  { rank: 2, player: mockPlayers[0], goals: 5, assists: 3, penalties: 1, matchesPlayed: 4, minutesPlayed: 340 },
  { rank: 3, player: mockPlayers[1], goals: 4, assists: 5, penalties: 1, matchesPlayed: 4, minutesPlayed: 380 },
  { rank: 3, player: mockPlayers[3], goals: 4, assists: 1, penalties: 0, matchesPlayed: 4, minutesPlayed: 350 },
  { rank: 5, player: mockPlayers[4], goals: 3, assists: 4, penalties: 0, matchesPlayed: 4, minutesPlayed: 330 },
  { rank: 5, player: mockPlayers[7], goals: 3, assists: 1, penalties: 1, matchesPlayed: 4, minutesPlayed: 300 },
  { rank: 7, player: mockPlayers[5], goals: 2, assists: 3, penalties: 0, matchesPlayed: 4, minutesPlayed: 360 },
  { rank: 7, player: mockPlayers[8], goals: 2, assists: 2, penalties: 0, matchesPlayed: 4, minutesPlayed: 350 },
  { rank: 7, player: mockPlayers[9], goals: 2, assists: 3, penalties: 0, matchesPlayed: 4, minutesPlayed: 340 },
  { rank: 10, player: mockPlayers[6], goals: 1, assists: 4, penalties: 0, matchesPlayed: 4, minutesPlayed: 370 },
];

export const mockNews: News[] = [
  { id: 1, title: '梅西宣布最后一届世界杯：这是我的告别演出', description: '阿根廷球星梅西确认2026年世界杯将是他职业生涯的最后一届世界杯，他希望用一座冠军奖杯为自己的国家队生涯画上完美句号。', content: '', imageUrl: 'https://picsum.photos/seed/football1/800/400', publishedAt: new Date().toISOString(), source: 'FIFA官方', url: 'https://www.fifa.com' },
  { id: 2, title: '姆巴佩vs哈兰德：新一代球王之争', description: '法国巨星姆巴佩与挪威杀手哈兰德的对决已成为当今足坛最热门的话题，两人在世界杯赛场上的表现将决定谁是下一代球王。', content: '', imageUrl: 'https://picsum.photos/seed/football2/800/400', publishedAt: new Date(Date.now() - 86400000).toISOString(), source: '体育新闻', url: 'https://www.sports.com' },
  { id: 3, title: '巴西新10号维尼修斯：桑巴足球的未来', description: '维尼修斯在本届世界杯上展现出惊人的状态，他的速度和突破让对手防不胜防，被誉为内马尔接班人。', content: '', imageUrl: 'https://picsum.photos/seed/football3/800/400', publishedAt: new Date(Date.now() - 172800000).toISOString(), source: 'FIFA官方', url: 'https://www.fifa.com' },
  { id: 4, title: '亚洲足球崛起：日本韩国创造历史', description: '日本和韩国在本届世界杯上表现出色，多场胜利让亚洲足球在世界舞台上闪耀，证明亚洲足球已经达到世界顶级水平。', content: '', imageUrl: 'https://picsum.photos/seed/football4/800/400', publishedAt: new Date(Date.now() - 259200000).toISOString(), source: '足球周刊', url: 'https://www.footballweekly.com' },
  { id: 5, title: '世界杯进球集锦：十大精彩进球', description: '本届世界杯已诞生多个精彩进球，从远射到任意球，从头球到倒钩，每个进球都让球迷热血沸腾。', content: '', imageUrl: 'https://picsum.photos/seed/football5/800/400', publishedAt: new Date(Date.now() - 345600000).toISOString(), source: '体育新闻', url: 'https://www.sports.com' },
];