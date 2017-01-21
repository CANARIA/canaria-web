const devConfig = require('./tasks/webpack/dev');
const prdConfig = require('./tasks/webpack/prd');

/**
 *  npm scriptから呼ばれる
 *  コマンドの引数によって開発環境かそうでないかを判断して設定ファイルを変える
 */
const DEBUG = !process.argv.includes('release');
const webpackConfig = DEBUG ? devConfig : prdConfig;

module.exports = webpackConfig;
