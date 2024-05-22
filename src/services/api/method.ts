import _ from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

export const returnNotFoundIfMethodDifferentThan = (
	method: string | string[] | undefined,
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const methods = _.isArray(method) ? method : [method];
	if (!methods.includes(req.method)) res.status(404).json('');
};
