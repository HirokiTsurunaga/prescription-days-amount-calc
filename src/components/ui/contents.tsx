import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Contents() {
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum
            harum maxime. Exercitationem perferendis illo laboriosam ut, quidem
            quis eaque ad libero dolorem odit voluptates nostrum aliquid culpa
            fugiat architecto!
          </p>
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
