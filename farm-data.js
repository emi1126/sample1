/**
 * 農園情報データ — 篠田ぶどう園（@toyota_budou）
 * GitHub Pages 公開時はこのファイルだけ更新すれば LP 全体に反映されます。
 * 確認できない項目は null のまま → LP 上では「要確認」と表示されます。
 */

window.FARM_INFO_AUDIT = {
  confirmed: [
    "農園名：篠田ぶどう園（Instagramプロフィール）",
    "所在地：〒471-0075 愛知県豊田市日之出町2丁目10-3 山本ビル1階西（Google Maps・Threads）",
    "Instagram：https://www.instagram.com/toyota_budou/",
    "Threads：https://www.threads.net/@toyota_budou",
    "営業時間：10:00～17:00（Google Maps）",
    "品種：シャインマスカット（主力）、巨峰、ピオーネ、富士の輝（Instagramプロフィール）",
    "販売形態：直売（Instagram・Threads）",
    "駐車場：あり（Threads）",
  ],
  inferred: [],
  missing: [
    "電話番号",
    "定休日",
    "支払い方法",
    "価格",
    "予約の要否",
    "通販・発送の有無",
  ],
};

window.FARM = {
  name: "篠田ぶどう園",
  region: "豊田市",
  mainProducts: "ぶどう",
  catchCopy: null,
  subCopy: null,
  about:
    "愛知県豊田市で令和5年からぶどう栽培に取り組む農園です。愛知県立農業大学校を卒業後、大府市のぶどう農家で2年9ヶ月の研修を経て就農しました。簡易雨除け10a・露地20aで、主力のシャインマスカットをはじめ、巨峰・ピオーネ・富士の輝などを栽培しています。令和6年より販売を開始し、令和8年には愛知県農業会議会長賞を受賞しました。",
  commitments: [
    "愛知県立農業大学校卒業後、大府市のぶどう農家で2年9ヶ月の研修を経て就農",
    "簡易雨除け10a・露地20aで栽培",
    "主力品種はシャインマスカット（巨峰・ピオーネ・富士の輝も栽培）",
    "令和8年 愛知県農業会議会長賞",
  ],
  products: [
    {
      name: "シャインマスカット",
      season: "主力品種",
      note: "Instagramプロフィールより。販売状況はInstagram・Threadsでご確認ください。",
    },
    {
      name: "巨峰",
      season: "販売中",
      note: "Threads（2026年）より。最新の在庫はInstagram・Threadsでご確認ください。",
    },
    {
      name: "ピオーネ",
      season: "8月末頃から収穫開始予定",
      note: "Threads（2026年）の投稿より。",
    },
    {
      name: "富士の輝",
      season: "8月末頃から収穫開始予定",
      note: "Threads（2026年）の投稿より。",
    },
  ],
  purchaseMethods: [
    "愛知県豊田市日之出町2丁目10-3（山本ビル1階西）の直売所で販売",
    "品種・在庫・営業状況はInstagram・Threadsで随時お知らせ",
  ],
  address: "〒471-0075 愛知県豊田市日之出町2丁目10-3 山本ビル1階西",
  mapQuery: "篠田ぶどう園 愛知県豊田市日之出町2丁目10-3",
  hours: "10:00～17:00",
  closedDays: null,
  phone: null,
  paymentMethods: [],
  parking: true,
  contactMethod: "Instagram（@toyota_budou）",
  contactEmail: null,
  instagramUrl: "https://www.instagram.com/toyota_budou/",
  threadsUrl: "https://www.threads.net/@toyota_budou",
  instagramNote: "ぶどうの収穫・直売情報",
  threadsNote: "農園の日常・直売のお知らせ",
  faq: [
    {
      q: "どこで購入できますか？",
      a: "愛知県豊田市日之出町2丁目10-3（山本ビル1階西）の直売所で販売しています。",
    },
    {
      q: "駐車場はありますか？",
      a: "駐車場があります（Threadsより）。",
    },
    {
      q: "営業時間は？",
      a: "10:00～17:00（Google Mapsより）。時期により変更がある場合はInstagramでご確認ください。",
    },
    {
      q: "定休日はありますか？",
      a: "詳細はInstagramをご確認ください。",
    },
    {
      q: "支払い方法は？",
      a: "詳細はInstagramをご確認ください。",
    },
    {
      q: "最新の販売状況はどこで確認できますか？",
      a: "Instagram（@toyota_budou）・Threadsで随時更新しています。",
    },
  ],
  photos: [
    { src: "./asset/img/土.jpg", alt: "ぶどう畑の土" },
    { src: "./asset/img/水やり.jpg", alt: "ぶどうへの水やり" },
    { src: "./asset/img/苗.avif", alt: "ぶどうの苗" },
  ],
};
