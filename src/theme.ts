import {
  borders,
  breakpoints,
  colors,
  opacities,
  radii,
  shadows,
  sizes,
  space,
  styles,
  transitions,
  typography,
} from './utils';
import buttons from './components/Button/Button.variants';
import tags from './components/Tag/Tag.variants';

export const theme = {
  config: {
    useLocalStorage: false,
  },
  ...borders,
  ...breakpoints,
  ...colors,
  ...opacities,
  radii,
  shadows,
  sizes,
  ...space,
  ...transitions,
  ...typography,
  styles,
  buttons,
  tags,
};
