# gw2-chat-code

> Encode and decode guildwars2 chat codes, fork from [gw2e-chat-codes](https://github.com/gw2efficiency/chat-codes)

## Install

```
npm install gw2-chat-code
```

## Usage

```js
import { encode, decode, overwrite } from 'gw2-chat-code';

// type IType = 'skill' | 'item' | 'skin' | 'trait' | 'map' | 'recipe' | 'outfit' | 'objective';

encode('skill', 5842)
// -> '[&BtIWAAA=]'

encode('item', {id: 46762, quantity: 10, skin: 5807, upgrades: [24554, 24615]})
// -> '[&AgGqtgDgrxYAAOpfAAAnYAAA]'

decode('[&BtIWAAA=]')
// -> {type: 'skin', id: 5842}

overwrite('[&Avr2LQEA]', { quantity: 10 })
// -> [&Agr2LQEA]
```

## Tests

```
npm test
```
