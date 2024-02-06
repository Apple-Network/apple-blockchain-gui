import { type NFTInfo } from '@apple-network/api';

type NFTOnDemand = {
  nft?: NFTInfo;
  error?: Error;
  promise?: Promise<NFTInfo>;
};

export default NFTOnDemand;
