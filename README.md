# hexo-generator-custom-index

[![NPM version](https://img.shields.io/npm/v/hexo-generator-custom-index.svg?style=flat)](https://npmjs.org/package/hexo-generator-custom-index)
[![NPM downloads](http://img.shields.io/npm/dm/hexo-generator-custom-index.svg?style=flat)](https://npmjs.org/package/hexo-generator-custom-index)

A Hexo plugin with typescript

## Usage

> `_config.yml`

```yaml
# 增加的属性
index_generator:
  # 根据更新日期排序
  sortBy: updated
  # 如果存在该值，将根据该值决定从哪天开始排序
  startSortDate: 2024-05
```

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

```

## LICENSE

MIT

# form

> [hexo-generator-index-pin-top](https://www.npmjs.com/package/hexo-generator-index-pin-top)
