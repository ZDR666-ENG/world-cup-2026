import { format, parseISO, isToday, isTomorrow, isYesterday } from 'date-fns';
import { zhCN } from 'date-fns/locale';

// 格式化日期
export const formatDate = (dateString: string, formatStr: string = 'yyyy年MM月dd日'): string => {
  try {
    const date = parseISO(dateString);
    return format(date, formatStr, { locale: zhCN });
  } catch {
    return dateString;
  }
};

// 格式化时间
export const formatTime = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'HH:mm');
  } catch {
    return dateString;
  }
};

// 获取相对日期描述
export const getRelativeDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    if (isToday(date)) return '今天';
    if (isTomorrow(date)) return '明天';
    if (isYesterday(date)) return '昨天';
    return formatDate(dateString, 'MM月dd日');
  } catch {
    return dateString;
  }
};

// 获取比赛状态文本
export const getMatchStatusText = (status: string): string => {
  const statusMap: Record<string, string> = {
    'SCHEDULED': '未开始',
    'TIMED': '已定时',
    'IN_PLAY': '进行中',
    'PAUSED': '中场休息',
    'FINISHED': '已结束',
    'POSTPONED': '推迟',
    'CANCELLED': '取消',
    'AWARDED': '判定',
  };
  return statusMap[status] || status;
};

// 获取比赛状态颜色
export const getMatchStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    'IN_PLAY': '#e53e3e',
    'PAUSED': '#dd6b20',
    'FINISHED': '#38a169',
    'SCHEDULED': '#3182ce',
    'TIMED': '#3182ce',
    'POSTPONED': '#718096',
    'CANCELLED': '#718096',
    'AWARDED': '#805ad5',
  };
  return colorMap[status] || '#718096';
};

// 获取获胜方文本
export const getWinnerText = (winner: string | null): string => {
  if (!winner) return '平局';
  const winnerMap: Record<string, string> = {
    'HOME_TEAM': '主队获胜',
    'AWAY_TEAM': '客队获胜',
    'DRAW': '平局',
  };
  return winnerMap[winner] || '未知';
};

// 截断文本
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// 生成唯一ID
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// 防抖函数
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 节流函数
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// 本地存储操作
export const localStorage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set: <T>(key: string, value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  remove: (key: string): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },
};