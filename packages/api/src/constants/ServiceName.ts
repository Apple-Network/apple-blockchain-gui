const ServiceName = {
  WALLET: 'apple_wallet',
  FULL_NODE: 'apple_full_node',
  FARMER: 'apple_farmer',
  HARVESTER: 'apple_harvester',
  SIMULATOR: 'apple_full_node_simulator',
  DAEMON: 'daemon',
  PLOTTER: 'chia_plotter',
  TIMELORD: 'apple_timelord',
  INTRODUCER: 'apple_introducer',
  EVENTS: 'wallet_ui',
  DATALAYER: 'apple_data_layer',
  DATALAYER_SERVER: 'apple_data_layer_http',
} as const;

type ObjectValues<T> = T[keyof T];

export type ServiceNameValue = ObjectValues<typeof ServiceName>;

export default ServiceName;
