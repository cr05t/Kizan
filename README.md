https://rdlp.jp/archives/otherdesign/lp/226067
※js使用の画像スライド表示機能の代わりに、画像一枚で表示してます。

# ダイニングで語れる憩うおしゃれで小さなキッチン| HIROMA

これは「Display HTML Code」のコードバンドルです。元のプロジェクトは https://www.figma.com/design/nIIvoulWovP5i5yOYHIU0d/Display-HTML-Code にあります。

## 実行手順

依存関係をインストールする:  
`npm i`

開発サーバーを起動する:  
`npm run dev`

## 同一LAN内で共有する方法（方法1）

1. すべてのインターフェースで開発サーバーを起動  
   ```bash
   npm run dev -- --host --port 5173
   ```
2. アクセスURL  
   - 自分のPC: `http://localhost:5173/`  
   - 同じLANの他端末: `http://<あなたのPCのIP>:5173/`（例: `http://192.168.0.12:5173/`）
3. Windowsファイアウォールなどで許可ダイアログが出たら「許可」する。  
4. VPNやセキュリティソフトでポート5173がブロックされる場合は例外許可するか、一時的に無効化して再試行する。  
5. 停止する場合はターミナルで `Ctrl + C`。
  
