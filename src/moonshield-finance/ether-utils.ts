import Web3 from 'web3';
import { defaultBscConfig, BscConfig } from './config';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

export function web3ProviderFrom(endpoint: string, config?: BscConfig): any {
  const ethConfig = Object.assign(defaultBscConfig, config || {});

  const providerClass = endpoint.includes('wss') ? Web3.providers.WebsocketProvider : Web3.providers.HttpProvider;

  return new providerClass(endpoint, {
    timeout: ethConfig.bscNodeTimeout,
  });
}

export function balanceToDecimal(s: string): string {
  return formatUnits(s);
}

export function decimalToBalance(d: string | number, decimals = 18): BigNumber {
  return parseUnits(String(d), decimals);
}
