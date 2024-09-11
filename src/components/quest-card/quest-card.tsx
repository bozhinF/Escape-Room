import { Link } from 'react-router-dom';
import { Quest } from '../../types/types';
import { AppRoute, Level } from '../../const/const';

type QuestCardProps = {
  quest: Quest;
};

function QuestCard({ quest }: QuestCardProps): JSX.Element {
  const {
    id,
    title,
    previewImg,
    previewImgWebp,
    level,
    peopleMinMax: [peopleMin, peopleMax],
  } = quest;

  const bigImage = previewImg.replace('.jpg', '@2x.jpg 2x');
  const bigImageWebp = previewImgWebp.replace('.webp', '@2x.webp 2x');
  const questLevel = Level[level];

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${previewImgWebp}, ${bigImageWebp}`}
          />
          <img
            src={previewImg}
            srcSet={bigImage}
            width="344"
            height="232"
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link
            className="quest-card__link"
            to={`${AppRoute.Quest.replace(':id', id)}`}
          >
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {peopleMin}&ndash;{peopleMax}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {questLevel}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
