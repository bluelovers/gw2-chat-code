export interface IChatCode {
    type?: IType;
    id?: number;
}
export interface IChatCodeItem extends IChatCode {
    quantity?: number;
    skin?: number;
    upgrades?: number[];
}
export declare type IType = 'skill' | 'item' | 'skin' | 'trait' | 'map' | 'recipe' | 'outfit' | 'objective';
/**
 * Encode a type and id as a chat code
 * Valid types are item, map, skill, trait, recipe, skin, outfit & objective
 * You can pass an object as second parameter to also encode quantity, skin or upgrades
 *
 * @param {IType} type
 * @param {number | IChatCodeItem} info
 * @returns {string}
 *
 * @example
 * encode('skill', 5842)
 * // -> '[&BtIWAAA=]'
 *
 * encode('item', {id: 46762, quantity: 10, skin: 5807, upgrades: [24554, 24615]})
 * // -> '[&AgGqtgDgrxYAAOpfAAAnYAAA]'
 */
export declare function encode(type: IType, info: number | IChatCodeItem): string;
/**
 * Decode a chat code into type and id
 *
 * @param {string} chatcode
 * @param {number | IChatCodeItem} info
 * @returns {IChatCodeItem}
 *
 * @example
 * decode('[&BtIWAAA=]')
 * // -> {type: 'skin', id: 5842}
 */
export declare function decode(chatcode: string, info?: number | IChatCodeItem): IChatCodeItem;
/**
 * decode input chatcode then encode with overwrite info
 *
 * @param {string} chatcode
 * @param {number | IChatCodeItem} info
 * @returns {string}
 *
 * @example
 * overwrite('[&Avr2LQEA]', { quantity: 10 })
 * // -> [&Agr2LQEA]
 */
export declare function overwrite(chatcode: string, info?: number | IChatCodeItem): string;
declare const _default: {
    encode: (type: IType, info: number | IChatCodeItem) => string;
    decode: (chatcode: string, info?: number | IChatCodeItem) => IChatCodeItem;
    overwrite: (chatcode: string, info?: number | IChatCodeItem) => string;
};
export default _default;
