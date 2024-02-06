type OfferBuilderData = {
  offered: {
    apple: {
      amount: string;
    }[];
    tokens: {
      amount: string;
      assetId: string;
      crCat?: {
        flags: string[];
        authorizedProviders: string[];
      };
    }[];
    nfts: {
      nftId: string;
    }[];
    fee: {
      amount: string;
    }[];
  };
  requested: {
    apple: {
      amount: string;
    }[];
    tokens: {
      amount: string;
      assetId: string;
      crCat?: {
        flags: string[];
        authorizedProviders: string[];
      };
    }[];
    nfts: {
      nftId: string;
    }[];
    fee: {
      amount: string;
    }[];
  };
};

export default OfferBuilderData;
