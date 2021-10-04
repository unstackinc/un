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
import buttons from './stories/Components/Button/Button.variants';
import tags from './stories/Components/Tag/Tag.variants';

const theme = {
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

export default theme;
