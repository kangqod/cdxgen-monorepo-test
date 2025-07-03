import { ThemeProvider, Input, Button } from '@comp/ui';
// import { Button as AntdButton } from 'antd';
import './App.css';
import "@comp/ui/index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Web App with Custom Theme & Sizes</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
          {/* <Button type="primary" vSize="xs">Extra Small</Button>
          <Button type="primary" vSize="sm">Small</Button>
          <Button type="primary" vSize="md">Medium (Default)</Button>
          <Button type="primary" vSize="lg">Large</Button>
          <Button type="primary" vSize="xl">Extra Large</Button> */}
          <Button type="primary" vSize="xl">Extra Large</Button>
          <Input placeholder="Antd Input" vSize="xl" />
          {/* <AntdButton type="primary">Antd</AntdButton> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
