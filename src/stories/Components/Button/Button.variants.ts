// Button.variants.ts

export const WarningStyles = {
  color: 'text.reversed',
  backgroundColor: 'warning',
  ':focus-visible': {
    boxShadow: 'focus.warning',
  },
};

const PrimaryVariant = {
  color: 'text.reversed',
  backgroundColor: 'button.background.primary',
  ':focus-visible': {
    boxShadow: 'focus.primary',
  },
  '&.warning': WarningStyles,
};

const SecondaryVariant = {
  color: 'text.reversed',
  backgroundColor: 'button.background.secondary',
  ':focus-visible': {
    boxShadow: 'focus.secondary',
  },
  '&.warning': WarningStyles,
};

const TertiaryVariant = {
  color: 'button.background.primary',
  backgroundColor: 'button.background.tertiary',
  ':hover': {
    opacity: 1,
    backgroundColor: 'button.background.tertiaryHover',
  },
  ':focus-visible': {
    boxShadow: 'focus.tertiary',
  },
  '&.warning': {
    color: 'warning',
    ':focus-visible': {
      boxShadow: 'focus.warning',
    },
  },
};

const OutlineVariant = {
  color: 'button.background.primary',
  backgroundColor: 'button.background.outline',
  ':focus-visible': {
    boxShadow: 'focus.color',
  },
  '&.warning': {
    color: 'warning',
    borderColor: 'warning',
    ':focus-visible': {
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
