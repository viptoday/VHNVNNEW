# Vietnam Travel Guide / 越南旅游指南

A modern web application for exploring Vietnam's travel destinations and planning your perfect trip. / 一个现代化的网页应用，用于探索越南旅游目的地并规划完美旅程。

## Features / 功能特点

- 🌍 Interactive map of Vietnam / 越南交互式地图
- 📍 Detailed destination information / 详细的目的地信息
- 🗺️ Travel route planning / 旅行路线规划
- 📱 Responsive design / 响应式设计
- 🌙 Dark/Light mode / 深色/浅色模式
- 🌐 Bilingual support (English/Chinese) / 双语支持（英文/中文）

## Tech Stack / 技术栈

- Frontend / 前端:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Wouter (Routing)
  - React Query
  - Framer Motion

- Backend / 后端:
  - Node.js
  - Express
  - TypeScript
  - Drizzle ORM
  - PostgreSQL
  - WebSocket

## Getting Started / 开始使用

### Prerequisites / 前置要求

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation / 安装

1. Clone the repository / 克隆仓库
```bash
git clone https://github.com/yourusername/vietnam-travel-guide.git
cd vietnam-travel-guide
```

2. Install dependencies / 安装依赖
```bash
npm install
```

3. Set up environment variables / 设置环境变量
```bash
cp .env.example .env
# Edit .env with your configuration / 编辑 .env 文件配置
```

4. Start the development server / 启动开发服务器
```bash
# Start backend / 启动后端
npm run dev

# Start frontend / 启动前端
npm run client:dev
```

## Available Scripts / 可用脚本

- `npm run dev` - Start backend server / 启动后端服务器
- `npm run client:dev` - Start frontend development server / 启动前端开发服务器
- `npm run build` - Build for production / 构建生产版本
- `npm run start` - Start production server / 启动生产服务器
- `npm run check` - Type check / 类型检查
- `npm run db:push` - Push database schema changes / 推送数据库架构更改

## Contributing / 贡献

Contributions are welcome! Please feel free to submit a Pull Request. / 欢迎贡献！请随时提交 Pull Request。

## License / 许可证

This project is licensed under the MIT License - see the LICENSE file for details. / 本项目采用 MIT 许可证 - 详见 LICENSE 文件。 