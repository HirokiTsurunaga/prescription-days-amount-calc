import { FC } from 'react';
import './App.css';
import Contents from './components/ui/contents';

const App: FC = () => {
  return (
    <div className="container px-0 bg-slate-400">
      <Contents></Contents>
    </div>
  );
};

export default App;
