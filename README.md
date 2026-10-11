# SSR Experiments Nuxt Version

Nuxt SSR での挙動を見るためだけの実験場です。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- Nuxt 4.6.0

- Prisma 7.10.0
- Vue Ref
- Nano Stores

## Experiments

この実験場では以下を行いました。

- Nuxt + Prisma での CRUD 処理
- 自作グローバルストア機構は理論上でなく SSR 状態汚染を防ぐのか安全性検証

## Related Articles

- [各 JS フレームワークのみでの DB 連携探訪記](https://wings.hatenablog.com/entry/withoutLaravelFestival)
- [Astro 上の Solid / Svelte / Vue にグローバルストアを持たせたい](https://wings.hatenablog.com/entry/AstroGlobalStores)
- [自作のストア機構が理論上でなく実質として SSR で安全なのか確認祭](https://wings.hatenablog.com/entry/ssrUnsafeStoresFestival)
