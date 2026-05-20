export const profile = {
  name: '劉昱坤',
  nameEn: 'Johnny Liu',
  title: 'Python 後端工程師｜系統整合與全端實作',
  titleSub: 'Python 後端／系統整合 · FastAPI + Vue 3 · AWS / GCP',
  email: 'a27936343@gmail.com',
  github: 'https://github.com/dalaba7046',
  githubHandle: 'dalaba7046',
  location: 'Taiwan',
  intro: `五年以上 Python 後端與系統整合經驗。近兩年在緯創軟體派駐玉山銀行做海外分行 RPA，將 6 個銀行系統的共通基礎設施抽象成可重用的 Python 自動化框架，並完成 T24 + NCS 信用卡資料整合。更早在宏碁負責跨區域電商資料管線與 8 家商業 API 整合，獨立主導 AWS 容器化 POC。個人專案以 FastAPI + Vue 3 + Docker 實作完整管線。`,
}

export const skills = [
  {
    category: 'Back End',
    icon: '⚙️',
    color: '#64ffda',
    items: [
      { name: 'Python', note: '5 年生產經驗' },
      { name: 'FastAPI / Pydantic / SQLAlchemy', note: '個人專案' },
      { name: 'RESTful API / OFS 介面整合', note: '' },
      { name: 'Oracle / MSSQL / MySQL / BigQuery', note: '生產使用' },
      { name: 'Selenium / pywinauto / pyautogui', note: 'RPA' },
      { name: 'pandas / openpyxl', note: '文件處理' },
      { name: 'OCR / LLM API', note: '企業內部整合' },
    ],
  },
  {
    category: 'Cloud / DevOps',
    icon: '☁️',
    color: '#57cbff',
    items: [
      { name: 'GCP BigQuery / GCS', note: '生產系統' },
      { name: 'AWS ECR / ECS / S3', note: '主導 POC' },
      { name: 'AWS EventBridge / CloudWatch', note: '主導 POC' },
      { name: 'Docker / Docker Compose', note: '長期使用' },
      { name: 'GitHub Actions', note: '排程與部署' },
      { name: 'Git / Linux CLI', note: '日常工具' },
    ],
  },
  {
    category: 'Front End',
    icon: '🖥️',
    color: '#ff9f43',
    items: [
      { name: 'Vue 3 + Vite', note: '作品集網站' },
      { name: 'HTML / CSS / JavaScript', note: '' },
      { name: '表單互動與資料顯示', note: '' },
      { name: '前後端串接', note: '個人專案' },
    ],
  },
  {
    category: '系統整合與架構',
    icon: '🔗',
    color: '#a29bfe',
    items: [
      { name: 'T24 / NCS / ABS / GIB / GTS / ROD', note: '銀行系統' },
      { name: 'Fedwire ISO 20022 pacs.008 / pacs.009', note: '金融訊息' },
      { name: 'LinkedIn / Meta / TikTok / Twitter Ads', note: '廣告 API' },
      { name: 'DHL / FedEx / DGF / Morrison', note: '物流 API' },
      { name: '登入狀態 / locator / 平台驗證', note: 'RPA 框架' },
      { name: '重試 / 截圖除錯 / RPALogger', note: 'RPA 框架' },
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
      '派駐玉山銀行期間，負責海外分行 Python RPA 與金融系統自動化專案，支援美國、新加坡、越南、緬甸、柬埔寨等海外分行作業，累計參與開發與維護 22 項流程自動化系統。',
    highlights: [
      '將 T24、NCS、ABS、GIB、GTS、ROD 等 6 個銀行系統的共通基礎設施抽象成可重用 Python RPA 框架，包含登入狀態、Selenium locator、模板化平台驗證、重試、截圖除錯與 RPALogger 紀錄',
      '整合 T24 Core Banking（Selenium + OFS）、NCS 信用卡系統（pywinauto + pyautogui + 字串解析）、Excel／PDF 文件與企業內部 OCR／LLM API，降低跨系統人工轉錄與比對風險',
      '主導 Fedwire ISO 20022 pacs.008／pacs.009 金融訊息產製與 T24 OFS 資料整合，建立批次處理、CSV 稽核紀錄、錯誤隔離與資料驗證流程',
      '設計 OCR／LLM 輔助文件處理流程，支援高棉文 Deika 文件辨識與翻譯、Excel 報表產製及截圖稽核留存，將每日約 8 小時文件分類作業導入自動化',
      '完成柬埔寨分行 T24 + NCS 信用卡付款資料擷取、比對、去重與整合，將原本每日最少 2 小時起的人工流程改為自動化處理；另完成緬甸門檻交易申報流程自動化',
    ],
    tags: ['Python', 'RPA', 'T24', 'NCS', 'Fedwire ISO 20022', 'OCR / LLM'],
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
      '開發與維護海外電商平台資料擷取與商業 API 整合系統，支援廣告平台資料蒐集、物流追蹤與 Google 服務整合，並主導 Docker 化爬蟲的 AWS 雲端部署 POC。',
    highlights: [
      '開發與維護涵蓋歐洲 80+ 科技媒體、美國 Amazon／Newegg／Best Buy、中國微博／知乎／百度／京東／天貓等 30+ 資料源擷取系統，月處理評論 5 萬+',
      '串接 8 家商業 API：LinkedIn、Meta、TikTok、Twitter Ads 廣告平台，以及 DHL、FedEx、DGF、Morrison Express 物流追蹤 API',
      '參與美國電商評論爬蟲 GCP 遷移，負責資料管線實作，將寫入端由地端 Oracle 改寫為 GCP BigQuery + GCS',
      '獨立主導 AWS 容器化 POC，規劃並建置 ECR / ECS / S3 / EventBridge / CloudWatch 架構；離職後得知該 POC 成為公司其他爬蟲上雲的基礎方案',
      '使用 Oracle Stored Procedure / Package、MSSQL、SQLAlchemy 與資料品質檢核流程處理資料轉置與落地',
    ],
    tags: ['Python', 'Oracle', 'MSSQL', 'BigQuery', 'AWS', 'Docker'],
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
    name: '個人作品集網站',
    description:
      '本站。以 Vue 3 + Vite 開發的個人履歷網站，元件涵蓋 Hero、About、Experience、Projects、Skills，並加入 Dragon Cursor 互動效果、深色模式切換與 GitHub Actions 自動部署。',
    tech: ['Vue 3', 'Vite', 'GitHub Actions', 'GitHub Pages'],
    github: 'https://github.com/dalaba7046/resume-website',
    color: '#64ffda',
  },
  {
    name: '爬蟲資料管理 API',
    description:
      '以 FastAPI 建立爬蟲落地資料的後端管理 API，重點放在 API 與 ORM 架構。採 routers / schemas / models / services / config 分層，實作查詢全部 SKU、查詢單筆、新增與軟刪除等 endpoint。',
    tech: ['FastAPI', 'Pydantic', 'SQLAlchemy', 'MySQL', 'Docker'],
    github: 'https://github.com/dalaba7046/crawler-data-management-api',
    color: '#57cbff',
  },
  {
    name: '肉品身價計算機',
    description:
      '結合台灣即時肉品批發價格與個人薪資的計算工具。Python 爬蟲透過 GitHub Actions 每日自動爬取中央畜產會行情並輸出 JSON，前端以純 HTML / CSS / JavaScript 即時換算，不儲存使用者輸入。',
    tech: ['Python', 'GitHub Actions', 'JavaScript', 'JSON Pipeline'],
    github: 'https://github.com/dalaba7046/meat-price-calculator',
    color: '#fd79a8',
  },
]
