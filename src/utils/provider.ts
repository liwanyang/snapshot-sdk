import {
  JsonRpcBatchProvider,
  StaticJsonRpcProvider
} from '@ethersproject/providers';
import { broviderUrl } from '../contant';

const providers = {};
const batchedProviders = {};

export default function getProvider(network) {
  const url = `${broviderUrl}/${network}`;
  if (!providers[network])
    providers[network] = new StaticJsonRpcProvider({ url, timeout: 25000 });
  return providers[network];
}

export function getBatchedProvider(network) {
  const url = `${broviderUrl}/${network}`;
  if (!batchedProviders[network])
    batchedProviders[network] = new JsonRpcBatchProvider({
      url,
      timeout: 25000
    });
  return batchedProviders[network];
}
