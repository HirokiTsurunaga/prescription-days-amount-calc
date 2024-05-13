type props = {
  med: string;
};

export default function UsageDosage({ med }: props) {
  const checkMed = (med: string) => {
    switch (med) {
      case '':
        break;
      case 'insulin':
        return <p>インスリンの用法</p>;
      case 'xr':
        return <p>xrの用法</p>;
      case 'eyeDrops':
        return <p>点眼薬の用法</p>;
    }
  };

  return <div>{checkMed(med)}</div>;
}
