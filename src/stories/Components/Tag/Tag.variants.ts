// Tag.variants.ts

const PrimaryVariant = {
  color: 'text.reversed',
  backgroundColor: 'tag.default.purple',
};

const YellowVariant = {
  color: 'text.reversed',
  backgroundColor: 'tag.default.yellow',
};

const GreenVariant = {
  color: 'text.reversed',
  backgroundColor: 'tag.default.green',
};

const OutlineVariant = {
  color: 'tag.outline.default',
  backgroundColor: 'tag.outline.background',
};

const OutlineBlueVariant = {
  color: 'tag.outline.blue',
  backgroundColor: 'tag.outline.background',
};

const tags = {
  primary: PrimaryVariant,
  yellow: YellowVariant,
  green: GreenVariant,
  outline: OutlineVariant,
  outlineBlue: OutlineBlueVariant,
};

export default tags;
