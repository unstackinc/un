import namor from 'namor';

const range = (len: any) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newData = () => {
  const statusChance = Math.random();
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    visits: Math.floor(Math.random() * 100),
    status: statusChance > 0.5 ? 'Live' : 'Draft',
  };
};

export default function makeData(...lens: any[]) {
  const makeDataLevel: any = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newData(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
