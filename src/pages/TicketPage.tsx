import { TicketEntity } from '../types/types';

type Props = {} & TicketEntity;

const TicketPage: React.FC<Props> = props => {
  const { name, description, status } = props;

  return (
    <div className="flex-1">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <h1 className="text-lg">{name}</h1>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default TicketPage;
