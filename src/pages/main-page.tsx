import CardsGrid from '../components/cards-grid/cards-grid';
import FilterSection from '../components/filter-section/filter-section';
import { questLevelFilter, questTypeFilter } from '../const/filter';
import { useAppSelector } from '../hooks';
import {
  getActiveFilters,
  getAllQuests,
} from '../store/quests-slice/selectors';
import { filter } from '../util/util';

function MainPage(): JSX.Element {
  const quests = useAppSelector(getAllQuests);
  const activeFilters = useAppSelector(getActiveFilters);

  const filteredQuests = filter(quests, activeFilters);

  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">
            Выберите тематику
          </h2>
        </div>
        <div className="page-content__item">
          <form className="filter" action="#" method="get">
            <FilterSection filter={questTypeFilter} />
            <FilterSection filter={questLevelFilter} />
          </form>
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <CardsGrid quests={filteredQuests} />
      </div>
    </main>
  );
}

export default MainPage;
