// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  sisngUrl: 'https://ix-nautilus-lab.lab.mfeed.ad.jp',
  apiBaseUrl: '/api/v2',
  liveStatusUrl: 'https://knd-test-ixops1.lab.mfeed.ad.jp/dashboard-configgem/api',
  pingerMapping: {
    IX0: [
      { name: 'knd-test-pin3', isDesignated: true, isPicug: false },
      { name: 'knd-test-pin4', isDesignated: false, isPicug: false },
      { name: 'knd-test-pin7', isDesignated: false, isPicug: false },
      { name: 'knd-test-pin8', isDesignated: false, isPicug: false },
      { name: 'knd-test-pin11', isDesignated: false, isPicug: false },
      { name: 'knd-test-pin12', isDesignated: false, isPicug: false },
    ]
  },
  mrtgUrlMapping: {
    IX0: [
      { host: 'knd-test-mrtg7.lab.mfeed.ad.jp', isMain: true },
      { host: 'knd-test-mrtg8.lab.mfeed.ad.jp', isMain: false }
    ]
  },
  mrtgBackupImageUrl: 'https://knd-test-ixops1.lab.mfeed.ad.jp/mrtg-backup',
  headerClassName: 'development',
};
