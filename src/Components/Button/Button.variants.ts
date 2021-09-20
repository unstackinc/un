// Button.variants.ts

export const WarningStyles = {
  color: 'text.reversed',
  backgroundColor: 'warning',
  '&:focus': {
    boxShadow: 'focus.warning',
  },
};

const PrimaryVariant = {
  color: 'text.reversed',
  backgroundColor: 'button.background.primary',
  '&:focus': {
    boxShadow: 'focus.primary',
  },
  '&.warning': WarningStyles,
};

const SecondaryVariant = {
  color: 'text.reversed',
  backgroundColor: 'button.background.secondary',
  '&:focus': {
    boxShadow: 'focus.secondary',
  },
  '&.warning': WarningStyles,
};

const TertiaryVariant = {
  color: 'button.background.primary',
  backgroundColor: 'button.background.tertiary',
  '&:hover': {
    opacity: 1,
    backgroundColor: 'button.background.tertiaryHover',
  },
  '&:focus': {
    boxShadow: 'focus.tertiary',
  },
  '&.warning': {
    color: 'warning',
    '&:focus': {
      boxShadow: 'focus.warning',
    },
  },
};

const OutlineVariant = {
  color: 'button.background.primary',
  backgroundColor: 'button.background.outline',
  '&:focus': {
    boxShadow: 'focus.color',
  },
  '&.warning': {
    color: 'warning',
    borderColor: 'warning',
    '&:focus': {
      boxShadow: 'focus.warning',
    },
  },
};

const buttons = {
  primary: PrimaryVariant,
  secondary: SecondaryVariant,
  tertiary: TertiaryVariant,
  outline: OutlineVariant,
};

export default buttons;
