import PlotterName from '../constants/PlotterName';
import { PlotterDefaults } from '../@types/Plotter';
import { bladebitDefaults, madmaxDefaults, appleposDefaults } from '../constants/Plotters';

export default function defaultsForPlotter(plotterName: PlotterName): PlotterDefaults {
  switch (plotterName) {
    case PlotterName.BLADEBIT:
      return bladebitDefaults;
    case PlotterName.MADMAX:
      return madmaxDefaults;
    case PlotterName.APPLEPOS: // fallthrough
    default:
      return appleposDefaults;
  }
}
