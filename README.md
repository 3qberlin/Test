# clone

實現 JavaScrip 參考類型資料的深拷貝功能

## 使用者指南

透過 npm 下載安裝程式

```bash
$ npm install clone
```

如果使用 Node.js 環境

```js
var { clone } = require("clone");
clnone({ a: 1 });
```

如果使用 webpack 環境

```js
import { clone } from "clone";
clone({ a: 1 });
```

如果使用瀏覽器環境

```html
<script src="node_modules/clone/dist/index.aio.js"></script>
<script>
  clone({ a: 1 });
</script>
```

## 貢獻者指南

第一次執行需要先安裝相依

```bash
$ npm install
```

一鍵打包生成生產程式

```bash
$ npm run build
```

執行單元測試

```bash
$ npm test
```
