# FIFA 世界杯 2026 数据网站

一个基于 React + TypeScript + Vite 构建的世界杯足球数据网站，提供实时比赛数据、积分榜、球队信息、赛程表和新闻功能。

## 功能特性

- **实时比分**：显示当前进行中的比赛比分
- **比赛数据**：查看所有比赛信息，支持按轮次和状态筛选
- **积分榜**：小组积分排名，显示球队详细数据
- **球队信息**：浏览所有参赛球队，支持搜索功能
- **赛程表**：按日期查看比赛安排，支持日期筛选
- **新闻资讯**：世界杯相关新闻和公告
- **响应式设计**：完美适配手机、平板和桌面设备

## 技术栈

- **前端框架**：React 19 + TypeScript
- **构建工具**：Vite
- **状态管理**：Zustand
- **数据获取**：React Query + Axios
- **路由**：React Router DOM
- **样式**：CSS3（响应式设计）
- **图标**：React Icons

## 项目结构

```
world-cup-website/
├── public/                # 静态资源
├── src/
│   ├── components/        # 可重用组件
│   ├── hooks/             # 自定义钩子
│   ├── pages/             # 页面组件
│   ├── services/          # API 服务
│   ├── store/             # 状态管理
│   ├── types/             # TypeScript 类型定义
│   ├── utils/             # 工具函数
│   ├── App.tsx            # 主应用组件
│   └── main.tsx           # 应用入口
├── .env.example           # 环境变量示例
├── package.json           # 项目配置
└── README.md              # 项目说明
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 文件为 `.env`，并填入你的 API 密钥：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
VITE_FOOTBALL_API_KEY=your_api_key_here
VITE_FOOTBALL_API_BASE_URL=https://api.football-data.org/v4
```

### 3. 获取 API 密钥

1. 访问 [Football-Data.org](https://www.football-data.org/client/register)
2. 注册账号并获取免费 API 密钥
3. 将密钥填入 `.env` 文件

### 4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看网站。

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建
- `npm run lint` - 运行代码检查
- `npm run type-check` - 运行 TypeScript 类型检查

## 数据来源

本项目使用 [Football-Data.org](https://www.football-data.org/) API 获取世界杯数据。该 API 提供：

- 实时比赛数据
- 球队信息
- 积分榜
- 赛程安排

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 在 `src/components/Navbar.tsx` 中添加导航链接

### 添加新组件

1. 在 `src/components/` 目录下创建新的组件
2. 使用 TypeScript 定义组件的 props 接口
3. 编写组件的 CSS 样式

### API 调用

所有 API 调用都在 `src/services/api.ts` 中统一管理。如需添加新的 API 端点：

1. 在 `src/types/worldcup.ts` 中定义数据类型
2. 在 `src/services/api.ts` 中添加 API 函数
3. 在相应的页面或组件中使用

## 许可证

MIT License