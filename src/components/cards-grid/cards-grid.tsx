import { Quests } from '../../types/types';
import QuestCard from '../quest-card/quest-card';

type CardsGridProps = {
  quests: Quests;
};

function CardsGrid({ quests }: CardsGridProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
}

export default CardsGrid;
