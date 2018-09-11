import './shim.js'

import eos from 'eosjs'

const KEY = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const RPC_API_URL = "http://167.99.181.173:8888";

export function get_net(){
  config = {
    keyProvider: KEY, // WIF string or array of keys..
    httpEndpoint: RPC_API_URL
  }

  local_net = eos(config);
  return local_net
}


export function get_info(){
	let net = get_net();
	return net.getInfo({}).then(info => {
		return info;
	});
}