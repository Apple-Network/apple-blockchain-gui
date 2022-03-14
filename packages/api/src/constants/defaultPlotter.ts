import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Apple Proof of Space',
  options: optionsForPlotter(PlotterName.APPLEPOS),
  defaults: defaultsForPlotter(PlotterName.APPLEPOS),
  installInfo: { installed: true },
};
