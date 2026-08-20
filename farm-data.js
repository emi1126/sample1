/**
 * 農園情報データ
 * GitHub Pages 公開時はこのファイルだけ更新すれば LP 全体に反映されます。
 * 確認できない項目は null のまま → LP 上では「要確認」と表示されます。
 *
 * FARM_INFO_AUDIT … 制作者向けチェックリスト（公開LPには表示しません）
 */

window.FARM_INFO_AUDIT = {
  confirmed: [
    "LPの目的：SNSから来店・購入・問い合わせにつなげる",
    "情報発信の主な媒体：Instagram・Threads（プロジェクト内にURL・投稿内容は未収録）",
    "プロジェクト内の写真：土・水やり・苗（asset/img/）",
  ],
  inferred: [],
  missing: [
    "正式な農園・農家名",
    "所在地・住所",
    "営業時間",
    "定休日",
    "電話番号",
    "支払い方法",
    "駐車場の有無",
    "商品・農産物の一覧",
    "購入方法の詳細",
    "価格",
    "問い合わせ先（メール・LINE等）",
    "営業期間（季節限定かどうか）",
    "予約の必要性",
    "Instagram URL",
    "Threads URL",
    "農業・栽培へのこだわり（無農薬等）",
    "写真素材",
  ],
};

window.FARM = {
  name: "●●農園",
  region: null,
  mainProducts: null,
  catchCopy: null,
  subCopy: null,
  about: null,
  commitments: [],
  products: [],
  purchaseMethods: [],
  address: null,
  mapQuery: null,
  hours: null,
  closedDays: null,
  phone: null,
  paymentMethods: [],
  parking: null,
  contactMethod: null,
  contactEmail: null,
  instagramUrl: null,
  threadsUrl: null,
  faq: [],
  photos: [
    { src: "./asset/img/土.jpg", alt: "土の写真" },
    { src: "./asset/img/水やり.jpg", alt: "水やりの様子" },
    { src: "./asset/img/苗.avif", alt: "苗" },
  ],
};
