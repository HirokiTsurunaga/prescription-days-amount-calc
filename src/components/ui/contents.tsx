import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AmountCard from './amountCard';
import { Button } from './button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Contents() {
  const [cardList, setCardList] = useState(['a']);

  const addCard = () => {
    setCardList((prev) => {
      const newCardList = [...prev, uuidv4()];
      return newCardList;
    });
  };

  const deleteCard = (key: string) => {
    setCardList((prev) => {
      const newCardList = prev.filter((ele) => {
        return !(ele == key);
      });
      return newCardList;
    });
  };

  return (
    <>
      <Tabs
        defaultValue="amount"
        className="container flex flex-wrap px-1 py-1"
      >
        <TabsList className="">
          <TabsTrigger value="amount">処方量から日数</TabsTrigger>
          <TabsTrigger value="days">日数から処方量</TabsTrigger>
        </TabsList>
        <TabsContent className="w-full flex" value="amount">
          <div>
            {cardList.map((ele) => {
              return (
                <div key={ele} className=" my-7 mx-1 w-full bg-red-400">
                  <AmountCard
                    id={ele}
                    className=""
                    deleteCard={deleteCard}
                  ></AmountCard>
                </div>
              );
            })}
            <Button onClick={addCard}>+</Button>
          </div>
        </TabsContent>
        <TabsContent className="w-full flex" value="days">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            laudantium necessitatibus fuga incidunt, labore pariatur iusto,
            cumque qui quia provident numquam earum inventore animi repellat
            placeat vel id tempore ipsam!
          </p>
        </TabsContent>
      </Tabs>
    </>
  );
}
