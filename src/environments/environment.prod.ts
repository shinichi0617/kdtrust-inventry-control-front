import { Log } from 'ng2-logger/client';

Log.setProductionMode();

export const environment = {
  production: true,
  headerClassName: 'prod',
};
