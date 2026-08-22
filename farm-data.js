/**
 * 農園情報データ — 篠田ぶどう園（@toyota_budou）
 * GitHub Pages 公開時はこのファイルだけ更新すれば LP 全体に反映されます。
 */

window.FARM_INFO_AUDIT = {
  confirmed: [
    "農園名：篠田ぶどう園（Instagramプロフィール）",
    "Instagram：https://www.instagram.com/toyota_budou/",
    "Threads：https://www.threads.net/@toyota_budou",
    "品種：シャインマスカット（主力）、巨峰、ピオーネ、富士の輝（Instagramプロフィール）",
    "所在地・営業時間・定休日：Instagram投稿（DbksDKTET5Y）",
    "支払い：現金のみ（Instagram投稿 DbpH-UBj0LM）",
    "駐車場：2〜3台程度（Instagram投稿 DbksDKTET5Y）",
  ],
  inferred: [],
  missing: [
    "電話番号",
    "通販・発送の有無（持ち帰り専用と記載）",
    "価格",
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
    "令和8年 愛知県農業会議会長賞（あいちのぶどうコンテスト）",
  ],
  products: [
    {
      name: "シャインマスカット",
      season: "主力品種",
      image: "./asset/img/shine-muscat.jpg",
      note: "Instagramプロフィールより。販売状況はInstagram・Threadsでご確認ください。",
    },
    {
      name: "巨峰",
      season: "直売開始時より販売",
      image: "./asset/img/kyoho.jpg",
      note: "Threads（2026年）より。最新の在庫はInstagram・Threadsでご確認ください。",
    },
    {
      name: "ピオーネ",
      season: "8月末頃から収穫開始予定",
      image: "./asset/img/pione.jpg",
      note: "Threads（2026年）の投稿より。",
    },
    {
      name: "富士の輝",
      season: "8月末頃から収穫開始予定",
      image: "./asset/img/fuji-no-kagayaki.jpg",
      note: "Threads（2026年）の投稿より。写真は紫ぶどうの代替イメージです。",
    },
  ],
  purchaseMethods: [
    "愛知県豊田市日之出町2丁目10-3（山本ビル1階西）の直売所で販売",
    "持ち帰り専用（発送はできません）",
    "お支払いは現金のみ",
    "品種・在庫・営業状況はInstagram・Threadsで随時お知らせ",
  ],
  address: "〒471-0075 愛知県豊田市日之出町2丁目10-3 山本ビル1階西",
  mapQuery: "篠田ぶどう園 愛知県豊田市日之出町2丁目10-3",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.7048323524346!2d137.1630123!3d35.0891071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a1bef9ff1393%3A0x81db01ba38a1772!2z56-g55Sw44G244Gp44GG5ZyS!5e0!3m2!1sja!2sjp!4v1787364332589!5m2!1sja!2sjp",
  hours: "10:00～17:00（12:00～13:00は休憩）",
  closedDays: "8月は無休、9月は毎週月曜定休（Instagram投稿より。変更時はInstagramで更新）",
  phone: null,
  paymentMethods: ["現金のみ"],
  parking: "2〜3台程度（空いているスペースを利用）",
  contactMethod: "Instagram（@toyota_budou）",
  instagramHandle: "@toyota_budou",
  contactEmail: null,
  instagramUrl: "https://www.instagram.com/toyota_budou/",
  threadsUrl: "https://www.threads.net/@toyota_budou",
  instagramNote: "ぶどうの収穫・直売情報",
  threadsNote: "農園の日常・直売のお知らせ",
  heroPhoto: {
    src: "./asset/img/hero-vineyard-morning.jpg",
    alt: "朝日が差し込むぶどう畑",
  },
  faq: [
    {
      q: "どこで購入できますか？",
      a: "愛知県豊田市日之出町2丁目10-3（山本ビル1階西）の直売所で販売しています。",
    },
    {
      q: "駐車場はありますか？",
      a: "2〜3台程度あります。空いているスペースをご利用ください（Instagram投稿より）。",
    },
    {
      q: "営業時間は？",
      a: "10:00～17:00です。12:00～13:00は休憩時間です。売り切れ次第終了になる場合もあります。",
    },
    {
      q: "定休日はありますか？",
      a: "8月は無休、9月は毎週月曜定休です（Instagram投稿より）。変更がある場合はInstagramで更新します。",
    },
    {
      q: "支払い方法は？",
      a: "現金のみです（Instagram投稿より）。",
    },
    {
      q: "最新の販売状況はどこで確認できますか？",
      a: "Instagram（@toyota_budou）・Threadsで随時更新しています。",
    },
  ],
  photos: [
    { src: "./asset/img/shop.jpg", alt: "直売用の巨峰ぶどう" },
    { src: "./asset/img/farm-field.jpg", alt: "袋掛け栽培のぶどう畑" },
    { src: "./asset/img/farm-vinyl.jpg", alt: "ぶどうの木に実る若い巨峰" },
  ],
};
