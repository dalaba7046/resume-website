export const profile = {
  name: '劉昱坤',
  nameEn: 'Johnny Liu',
  title: 'Python 後端工程師｜全端開發實作中',
  titleSub: 'Python 後端／自動化開發 · Vue.js 全端實作中 · AWS',
  email: 'a27936343@gmail.com',
  github: 'https://github.com/dalaba7046',
  githubHandle: 'dalaba7046',
  location: 'Taiwan',
  intro: `具備 5 年以上 Python 開發、流程自動化與系統整合經驗，熟悉資料處理、資料庫操作、第三方 API 串接與 AWS 雲端部署。曾參與金融 RPA、文件自動化與跨系統整合專案，目前透過 Vue.js 搭配 FastAPI／Django 個人專案補齊全端開發能力，朝全端工程師方向發展。`,
}

export const skills = [
  {
    category: '後端開發',
    icon: '⚙️',
    color: '#64ffda',
    items: [
      { name: 'Python', note: '' },
      { name: 'FastAPI', note: '' },
      { name: 'FastAPI', note: '個人專案' },
      { name: 'Django', note: '個人專案' },
      { name: 'SQLAlchemy ORM', note: '' },
      { name: 'RESTful API', note: '' },
      { name: 'Docker', note: '' },
    ],
  },
  {
    category: '資料庫',
    icon: '🗄️',
    color: '#57cbff',
    items: [
      { name: 'MySQL', note: '' },
      { name: 'Oracle', note: '' },
      { name: 'MariaDB', note: '' },
      { name: 'MSSQL', note: '' },
      { name: 'PostgreSQL', note: '個人專案' },
    ],
  },
  {
    category: '雲端與部署',
    icon: '☁️',
    color: '#ff9f43',
    items: [
      { name: 'AWS ECS', note: '' },
      { name: 'AWS ECR', note: '' },
      { name: 'AWS S3', note: '' },
      { name: 'AWS EventBridge', note: '' },
      { name: 'AWS CloudWatch', note: '' },
      { name: 'Docker Compose', note: '' },
    ],
  },
  {
    category: 'AI 與 API 整合',
    icon: '🔗',
    color: '#a29bfe',
    items: [
      { name: 'Meta Ads API', note: '' },
      { name: 'LinkedIn API', note: '' },
      { name: 'TikTok Ads API', note: '' },
      { name: 'Twitter Ads API', note: '' },
      { name: 'FedEx / DHL / DGF', note: '' },
      { name: 'Google Translation API', note: '' },
      { name: 'Google BigQuery', note: '' },
      { name: 'OCR / LLM API', note: '企業內部' },
    ],
  },
  {
    category: '前端開發',
    icon: '🖥️',
    color: '#fd79a8',
    items: [
      { name: 'Vue.js 3', note: '實作中' },
      { name: 'HTML / CSS', note: '' },
      { name: 'JavaScript', note: '' },
      { name: 'Ajax', note: '實務使用' },
      { name: 'jQuery', note: '維護經驗' }
    ],
  },
]

export const experiences = [
  {
    company: '玉山銀行',
    employer: '緯創軟體股份有限公司（派駐）',
    role: '軟體開發資深工程師',
    period: '2024.05 — 至今',
    current: true,
    description:
      '派駐玉山銀行，負責海外分行 Python RPA 與金融流程自動化開發，維護 22 項自動化系統，涵蓋美國、新加坡、越南、緬甸、柬埔寨等分行作業。',
    highlights: [
      '開發門檻交易申報、Fedwire ISO 20022 訊息產製、銀行文件 OCR 分類、信用卡付款整合等流程',
      '整合 T24 Core Banking、NCS、OCR／LLM API，降低跨系統人工操作風險',
      '透過自動化將每日 4–8 小時人工流程縮短逾 90%',
      '部署於 AWS（ECR / ECS / S3 / EventBridge / CloudWatch）production 環境',
    ],
    tags: ['Python', 'AWS', 'Docker', 'OCR', 'LLM API', 'RPA', 'T24'],
  },
  {
    company: 'Google（板橋）',
    employer: '印度商威普羅股份有限公司台灣分公司（派駐）',
    role: '專案測試工程師',
    period: '2023.09 — 2024.05',
    current: false,
    description:
      '維護 Android 系統穩定度自動化測試專案，負責問題追蹤、root-cause analysis 與 issue 修正，使 Failed Rate 穩定維持於 7~10%。',
    highlights: [
      '使用 Kotlin、ADB Shell 與 Linux 環境維護測試流程',
      '跨國團隊協作環境，進行問題定位與修復',
    ],
    tags: ['Kotlin', 'ADB Shell', 'Linux', 'Android Testing'],
  },
  {
    company: '宏碁股份有限公司',
    employer: '干城數碼有限公司（派駐）',
    role: 'Python 工程師',
    period: '2020.10 — 2023.06',
    current: false,
    description:
      '開發與維護多個資料擷取與商業 API 整合系統，支援廣告平台資料蒐集、物流追蹤、Google 服務整合，並主導資料擷取雲端 POC 建置。',
    highlights: [
      '串接廣告平台 API：Meta、LinkedIn、TikTok、Twitter Ads',
      '串接物流追蹤 API：FedEx、DHL、DGF、Morrison',
      '串接 Google 服務：Translation API、BigQuery',
      '主導 Docker + AWS ECR / ECS / S3 / EventBridge / CloudWatch 雲端 POC',
      '使用 SQLAlchemy ORM + Oracle Stored Procedure 進行資料模型設計與資料轉置',
    ],
    tags: ['Python', 'SQLAlchemy', 'AWS', 'Docker', 'Meta API', 'Google API'],
  },
  {
    company: '悠由數據應用股份有限公司',
    employer: '',
    role: '資料／後端實習生',
    period: '2019.12 — 2020.08',
    current: false,
    description:
      '開發農產品資料擷取流程與 Flask Line Bot，協助網站後台功能開發，具備 MySQL／MariaDB 資料儲存實作經驗。',
    highlights: [
      '使用 Python + Selenium + BeautifulSoup 開發農產品價格與氣象資料爬蟲',
      '維護 Flask Line Bot，支援每日農作物價格查詢',
      '協助後台功能開發：Java Spring Boot + Ajax + MariaDB',
    ],
    tags: ['Python', 'Flask', 'MySQL', 'MariaDB', 'Selenium'],
  },
]

export const projects = [
  {
    name: 'Crawler Data Management API',
    description:
      '使用 FastAPI + MySQL 建立爬蟲資料管理 API，涵蓋 SQLAlchemy ORM、Pydantic Schema、SKU／review／rating 資料管理，以及 Docker／Uvicorn 執行環境。',
    tech: ['FastAPI', 'MySQL', 'SQLAlchemy', 'Pydantic', 'Docker', 'Uvicorn'],
    github: 'https://github.com/dalaba7046/crawler-data-management-api',
    color: '#64ffda',
  },
  {
    name: 'Taiwan Workplace Transparency',
    description:
      '基於 Django 5.2 + PostgreSQL 的職場透明平台，涵蓋公司、評論、薪資、工時、面試經驗等資料模型設計，並建立內容審核流程與風險政策文件。',
    tech: ['Django 5.2', 'PostgreSQL', 'Python', 'Admin', 'Tests'],
    github: 'https://github.com/dalaba7046/taiwan-workplace-transparency',
    color: '#57cbff',
  },
  {
    name: 'Resume Website',
    description:
      '本站。使用 Vue.js 3 + Vite 開發的個人履歷網站，透過 GitHub Actions 自動部署至 GitHub Pages，為全端開發實作練習的起點。',
    tech: ['Vue.js 3', 'Vite', 'GitHub Actions', 'GitHub Pages'],
    github: 'https://github.com/dalaba7046/resume-website',
    color: '#fd79a8',
  },
]
