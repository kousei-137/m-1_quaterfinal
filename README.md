# M-1グランプリ準々決勝ネタ採点アプリ
https://m-1-quaterfinal.vercel.app/

## 開発環境
| カテゴリー | 技術スタック |
| ---- | ---- |
| フロントエンド | Nuxt.js, TypeScript, Tailwind CSS, daisyUI, Zod |
| バックエンド | Nuxt.js, TypeScript, Prisma, Sidebase, bcrypt |
| DB | MongoDB |
| インフラ | Vercel |

## なぜ作成したか
### 効率的に無名で面白い芸人を見つけたい
M-1グランプリ準々決勝は100組以上の芸人が出場します。
去年までは、3回戦も準々決勝もほぼ全てのネタを見ていましたが、今年から社会人になった私にとってネタを100個以上見ることはかなり厳しいです。
しかし、ネタが面白い無名の芸人を見つけたい。
そのため、このアプリにユーザーが採点した点数を投稿してもらうことで、忙しい人でも面白いネタと出会えることを目指してこのアプリを作成しました。

## こだわり
### Twitterログイン
現状、Twitter(X)でM-1グランプリの感想を述べている人が多く、Twitter(X)で宣伝を行い、Twitterを動線としてユーザーが増えることを目指した。
### 得点順ソート機能
上記のように効率的に面白いネタを探したいと考えていたため、得点順で芸人をソートできる機能は必要不可欠な要素です。