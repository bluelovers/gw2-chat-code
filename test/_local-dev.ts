/**
 * Created by user on 2017/10/25/025.
 */

import * as path from 'path';
import * as chai from 'chai';

export function path_relative(to)
{
	return path.relative(__dirname + '/../', to);
}

export const expect = chai.expect;

export default exports;
