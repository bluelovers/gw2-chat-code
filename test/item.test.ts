/**
 * Created by user on 2017/10/25/025.
 */

import codes from '../index';
import { path_relative, expect } from './_local-dev';

const itemTestCases = [
	{
		desc: `Legendary Insight (item #77302)`,

		info: { type: 'item', id: 77302, quantity: 250 },
		code: '[&Avr2LQEA]',

		info2: { quantity: 10 },
		code2: '[&Agr2LQEA]',
	},
];

describe(path_relative(__filename), () =>
{
	const type = 'item';

	itemTestCases.map(test =>
	{
		it(`${test.desc}`, () =>
		{
			//console.log(codes.decode(test.code));

			let code = codes.encode(type, test.info);

			expect(code).to.deep.equal(test.code);

			let code2 = codes.overwrite(code, test.info2);

			expect(code2).to.deep.equal(test.code2);

			expect(codes.decode(code2)).to.deep.equal(Object.assign({}, test.info, test.info2));

			console.log(test.desc, test.info2, code2);
		});
	});
});
