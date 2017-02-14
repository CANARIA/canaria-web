export default (html, preloadedState) => `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="デスクリプションが入ります">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no, email=no, address=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:title" content="タイトルが入ります">
    <meta property="og:description" content="デスクリプションが入ります">
    <meta property="og:url" content="URLが入ります">
    <meta property="og:site_name" content="サイト名が入ります">
    <meta property="og:image" content="画像が入ります">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:description" content="デスクリプションが入ります">
    <meta name="twitter:title" content="タイトルが入ります">
    <meta name="twitter:site" content="TwitterIDが入ります">
    <meta name="twitter:image" content="画像が入ります">

    <link rel="canonical" href="URLが入ります">
    <link rel="icon" type="image/vnd.microsoft.icon" href="icoファビコンが入ります">
    <link rel="icon" type="image/png" sizes="48x48" href="pngファビコンが入ります">
    <link rel="apple-touch-icon" sizes="180x180" href="pngアイコンがはいります">
    <link rel="stylesheet" href="/bundle.css">
    <title>タイトルが入ります</title>
  </head>
  <body>

  <div id="root">${html}</div>

  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
  </script>
  <script src="/bundle.js"></script>
  </body>
  </html>
`;
