import '@twa-dev/sdk';
import Mytickets from './pages/Mytickets';
import './App.css';
import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useState } from 'react';
import { Page, TicketEntity } from './types/types';
import BrowseTickets from './pages/BrowseTickets';
import TicketPage from './pages/TicketPage';

function App() {
  const { network } = useTonConnect();

  const [ticket, setTicket] = useState<TicketEntity>();
  const [page, setPage] = useState<Page>('myTickets');

  const openTicket = (ticket: TicketEntity) => {
    setPage('ticket');
    setTicket(ticket);
  };

  const CurrentPage = () => {
    switch (page) {
      case 'myTickets':
        return <Mytickets openTicket={openTicket} />;
      case 'ticket':
        return ticket ? <TicketPage {...ticket} /> : null;
      case 'browseTickets':
        return <BrowseTickets />;
      default:
        return null;
    }
  };

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

      <CurrentPage />

      <footer className="flex gap-4 p-2">
        <button
          className={`btn flex-1 btn-info ${page === 'myTickets' ? 'pointer-events-none' : 'btn-outline'}`}
          onClick={() => setPage('myTickets')}
        >
          My tickets
        </button>
        <button
          className={`btn flex-1 btn-info ${page === 'browseTickets' ? 'pointer-events-none' : 'btn-outline'}`}
          onClick={() => setPage('browseTickets')}
        >
          Browse tickets
        </button>
      </footer>
    </>
  );
}

export default App;
