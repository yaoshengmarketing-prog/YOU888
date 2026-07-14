// 全站共用設定 —— 要改站名、標語、網域，改這裡就好
export const SITE = {
  name: 'YOU888 娛樂城',
  brand: 'YOU888',
  url: 'https://you888.netlify.app',
  blogTitle: 'YOU888 娛樂誌',
  blogDesc: 'YOU888 娛樂城官方部落格：平台指南、優惠活動、遊戲玩法、存款出金與安全查核，手把手教你玩得安心、領好領滿。',
  lang: 'zh-Hant-TW',
};

// 部落格分類（新增分類就加在這裡；slug 用英文、對應網址 /blog/categories/{slug}）
export const CATEGORIES: Record<string, string> = {
  'platform-guide': '平台指南',
  'promotions': '優惠活動',
  'game-guide': '遊戲玩法',
  'deposit-withdraw': '存款與出金',
  'security': '安全查核',
};
