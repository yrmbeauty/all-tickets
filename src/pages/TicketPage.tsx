import { TicketEntity } from '../types/types';

type Props = {} & TicketEntity;

const TicketPage: React.FC<Props> = props => {
  const { name, description, status } = props;

  return (
    <div className="flex flex-1 flex-col overflow-scroll">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="p-6 overflow-auto">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default TicketPage;
