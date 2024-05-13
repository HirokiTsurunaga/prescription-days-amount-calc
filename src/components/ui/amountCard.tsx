import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './button';
import { useState } from 'react';
import UsageDosage from './usage-dosage';

type props = {
  className: string;
  deleteCard: (key: string) => void;
  id: string;
};

export default function AmountCard({ className, deleteCard, id }: props) {
  const [selectedMed, setSelectedMed] = useState('');

  const listHandler = (med: string) => {
    setSelectedMed(med);
  };

  return (
    <div className={className}>
      <Select onValueChange={listHandler}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="薬剤選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="insulin">インスリン</SelectItem>
          <SelectItem value="xr">ランタスXR</SelectItem>
          <SelectItem value="eyeDrops">点眼薬</SelectItem>
        </SelectContent>
      </Select>
      <UsageDosage med={selectedMed} />
      <Button onClick={() => deleteCard(id)}>-</Button>
    </div>
  );
}
