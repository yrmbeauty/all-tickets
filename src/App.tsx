import '@twa-dev/sdk';
import Mytickets from './pages/Mytickets';
import './App.css';
import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';

function App() {
  const { network } = useTonConnect();

  return (
    <>
      <header className="flex gap-4 items-center p-2">
        <TonConnectButton className="ml-auto" />
        {network
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
            network === CHAIN.MAINNET
            ? 'mainnet'
            : 'testnet'
          : 'N/A'}{' '}
      </header>

      <Mytickets />

      <footer className="">
        <button className="btn"></button>
      </footer>
    </>
  );
}

export default App;
