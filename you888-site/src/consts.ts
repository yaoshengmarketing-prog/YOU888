// 全站共用設定 —— 要改站名、標語、網域，改這裡就好
export const SITE = {
  name: 'YOU888 娛樂城',
  brand: 'YOU888',
  url: 'https://you888.netlify.app',
  blogTitle: 'YOU888 娛樂誌',
  blogDesc: 'YOU888 娛樂城官方部落格：平台指南、註冊與帳號、APP與手機版、優惠活動、存款與出金、遊戲玩法、安全查核、客服與常見問題，手把手教你玩得安心、領好領滿。',
  lang: 'zh-Hant-TW',
  // 登入／註冊的目標網址（引流 CTA）—— 之後換成正式網址
  loginUrl: '#',
  registerUrl: '#',
};

// 標準 8 大分類（順序 = 導覽列順序）。可原封不動複製到其他娛樂城站。
// slug 為固定英文，網址 = /blog/categories/{slug}
export const CATEGORY_ORDER = [
  'platform-guide',
  'register-account',
  'app-mobile',
  'promotions',
  'deposit-withdraw',
  'game-guide',
  'security',
  'customer-service',
] as const;

export const CATEGORIES: Record<string, string> = {
  'platform-guide': '平台指南',
  'register-account': '註冊與帳號',
  'app-mobile': 'APP與手機版',
  'promotions': '優惠活動',
  'deposit-withdraw': '存款與出金',
  'game-guide': '遊戲玩法',
  'security': '安全查核',
  'customer-service': '客服與常見問題',
};

// 每個分類頁的「介紹段落」（100~200 字，說清楚這類解決什麼、包含什麼、從哪看起）
export const CATEGORY_INTRO: Record<string, string> = {
  'platform-guide': '第一次玩 YOU888？這裡帶你認識平台怎麼運作、有哪些遊戲與服務、新手該從哪裡開始。看完就能快速上手，知道每個功能在哪、怎麼用。',
  'register-account': '從註冊、手機驗證到帳號安全設定，這裡把「開戶到管理帳號」的每一步講清楚。含註冊教學、忘記密碼、身分驗證與帳號安全，第一次也不卡關。',
  'app-mobile': '想在手機上玩得順？這裡整理 APP 下載、手機版網頁、iOS／Android 安裝與常見閃退、卡頓、無法開啟的排除方式，讓你全裝置都暢玩。',
  'promotions': '新會員 88 體驗金、每日簽到、首存加碼、返水回饋…這裡教你把 YOU888 的優惠領好領滿，並看懂流水（打碼量）規則，避免領了卻用不到。',
  'deposit-withdraw': '存款怎麼最快、出金怎麼最順？這裡涵蓋 EXpay、虛擬幣、ATM 等各種存取款方式的流程、到帳時間、限額與驗證，並教你避開出金卡關。',
  'game-guide': '體育、真人、電子、捕魚、棋牌…各類遊戲怎麼玩、規則與術語、新手入門與實用技巧，這裡一次教會你，玩得懂也玩得聰明。',
  'security': '這家平台可不可信？怎麼辨識官方入口與仿冒／黑網？這裡教你確認平台合法性、保護帳號與個資交易安全、評估平台信用，玩得安心不踩雷。',
  'customer-service': '登入失敗、優惠沒收到、存款未到帳、出金延遲、交易被銀行攔截、帳號凍結…這裡專門處理「異常與疑難排解」，並整理客服聯絡方式與常見錯誤解法。',
};

// 分類底下的「支柱／Hub 頁」入口（目前只有存款與出金有兩個）
export const CATEGORY_HUBS: Record<string, { label: string; href: string; desc: string }[]> = {
  'deposit-withdraw': [
    { label: '存款教學總整理', href: '/deposit-guide/', desc: '各種存款方式、到帳時間、限額與驗證，一頁看懂。' },
    { label: '出金／提款問題總整理', href: '/withdraw-guide/', desc: '出金流程、提款時間、流水條件與提款延遲、銀行攔截處理。' },
  ],
};
