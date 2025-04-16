/**
 * Expressアプリケーションのエントリポイント
 *
 * ## 仕様
 * - ルートURL('/')へのGETリクエストにはテキストメッセージを返す
 * - '/api/users'へのGETリクエストにはユーザーデータのJSONを返す
 * - サーバーはポート3000で起動する
 *
 * ## 制限事項
 * - エラーハンドリングは基本的なもののみ
 * - データベース接続などはなし
 */
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 3000;

// ルートURL('/')へのGETリクエスト
app.get("/", (request: Request, response: Response) => {
  response.send("ようこそ！ExpressのルーティングとJSONの練習です。");
});

// '/api/users'へのGETリクエスト (JSONを返す)
app.get("/api/users", (request: Request, response: Response) => {
  // ダミーのユーザーデータ
  const users = [
    { id: 1, name: "田中 太郎" },
    { id: 2, name: "佐藤 花子" },
    { id: 3, name: "鈴木 一郎" },
    { id: 4, name: "高橋 二郎" },
  ];
  // res.json() を使うと、オブジェクトや配列を自動的にJSON文字列に変換して送ってくれる
  response.json(users);
});

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバー起動中... ポート ${port} でリクエスト待受中`);
  console.log(`ルート: http://localhost:${port}/`);
  console.log(`ユーザーAPI: http://localhost:${port}/api/users`);
}); 