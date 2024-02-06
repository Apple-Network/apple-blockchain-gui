import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';

import PlotterName from './PlotterName';

export default {
  displayName: 'Apple Proof of Space',
  options: optionsForPlotter(PlotterName.APPLEPOS),
  defaults: defaultsForPlotter(PlotterName.APPLEPOS),
  installInfo: { installed: true },
};
