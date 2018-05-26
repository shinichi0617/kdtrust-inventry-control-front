import { Log } from 'ng2-logger/client';

Log.setProductionMode();

export const environment = {
  production: true,
  baseUrl: 'https://www.googleapis.com/fusiontables/v2/query',
  apiKey: 'AIzaSyAw3agkZGXhtiKDuSoxtG4Km2v_LKRYifg',
  tableId: '1Ah_7TW-dskYsF3E1XTFvz3GchgiVQ8X7UBFk-PBn',
  headerClassName: 'prod',
};
