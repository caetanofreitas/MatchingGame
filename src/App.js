import { useState } from 'react';
import GlobalStyle from './globalStyle';
import Table from './components/Table';

const App = () => {
  const [level, setLevel] = useState('medium');
  const [customValue, setCustomValue] = useState(0);

  return (
    <>
      <GlobalStyle />
      <main>
        <h1>Matching Game</h1>
        <select value={level} onChange={({ target: { value } }) => setLevel(value)}>
          <option value="easy">Easy</option>
          <option value="medium" defaultValue>Medium</option>
          <option value="hard">Hard</option>
          <option value="custom">Custom</option>
        </select>
        {level === 'custom' && (
          <>
            <h2>Number of pairs</h2>
            <input value={customValue} type="number" onChange={({ target: { value } }) => setCustomValue(Number(value))} />
          </>
        )}
        <Table level={level} customValue={customValue} />
      </main>
    </>
  )
}

export default App;
