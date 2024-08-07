import { useMemo } from 'react';

import { MSGPORT_URL } from '@/config/site';
import { getChainById } from '@/utils';

import { useIsConnectedToSupportedChain } from './useIsConnectedToSupportedChain'; // 调整路径以匹配您的项目结构

function useHistoryLink() {
  const { isConnected, isChainSupported, address, currentChainId } =
    useIsConnectedToSupportedChain();

  const historyLink = useMemo(() => {
    if (isConnected && isChainSupported && address) {
      const currentChain = getChainById(currentChainId);
      return `${MSGPORT_URL}/sender/${address}?network=${currentChain?.testnet ? 'testnet' : 'mainnet'}`;
    }
    return '';
  }, [isConnected, isChainSupported, address, currentChainId]);

  return historyLink;
}

export default useHistoryLink;
