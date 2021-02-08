import _mutations from './mutations'
import _queries from './queries'
import _schems from './schema/schems'

export const mutations = { ..._mutations };
export const queries = { ..._queries };
export const schems = _schems;