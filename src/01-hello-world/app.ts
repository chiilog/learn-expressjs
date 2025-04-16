// 1. expressモジュールを読み込む (インストールしたExpressを使えるようにする)
import express, { Application, Request, Response } from "express";

// 2. expressアプリのインスタンスを作成 (Expressのお約束)
const app: Application = express();

// 3. サーバーが待ち受けるポート番号を設定 (PCのどの扉で待つか)
const port: number = 3000;

// 4. ルートURL('/')へのGETリクエストに対する処理を定義
//   ブラウザから http://localhost:3000/ にアクセスした時に実行される関数
app.get("/", (request: Request, response: Response) => {
  // response.send() でブラウザにテキストを送り返す
  response.send("はじめての TypeScript + Express サーバー！");
});

// 5. 指定したポートでサーバーを起動し、リクエスト待受状態にする
app.listen(port, () => {
  // サーバーが起動したら、ターミナルにメッセージを表示
  console.log(`サーバー起動中... ポート ${port} でリクエスト待受中`);
  console.log(`ブラウザで http://localhost:${port}/ を開いてください`);
});
