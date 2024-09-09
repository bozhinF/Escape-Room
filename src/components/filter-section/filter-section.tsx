import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilters } from '../../store/quests-slice/quests-slice';
import { getActiveFilters } from '../../store/quests-slice/selectors';
import { Filter } from '../../types/filter';

type FilterSectionProps = {
  filter: Filter;
};
function FilterSection({ filter }: FilterSectionProps): JSX.Element {
  const { title, type, items } = filter;
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(getActiveFilters).find(
    (currentFilter) => currentFilter.type === type
  );
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">{title}</legend>
      <ul className="filter__list">
        {items.map((filterItem) => {
          const { value, id, text, icon } = filterItem;
          const filterIsChecked = value === activeFilter?.value;
          return (
            <li className="filter__item" key={filterItem.id}>
              <input
                type="radio"
                name={type}
                id={id}
                checked={filterIsChecked}
                onChange={() => {
                  dispatch(
                    setFilters({
                      type,
                      value,
                    })
                  );
                }}
              />
              <label className="filter__label" htmlFor={id}>
                {icon && (
                  <svg
                    className="filter__icon"
                    width={icon?.width}
                    height={icon?.height}
                    aria-hidden="true"
                  >
                    <use xlinkHref={icon?.url}></use>
                  </svg>
                )}
                <span className="filter__label-text">{text}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default FilterSection;
