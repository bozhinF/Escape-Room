import { Link, useParams } from 'react-router-dom';
import { AppRoute, Level, RequestStatus, Type } from '../const/const';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  getQuestDetails,
  getQuestDetailsStatus,
} from '../store/quests-slice/selectors';
import { useEffect } from 'react';
import { fetchQuest } from '../store/quests-slice/thunk';
import Loader from '../components/loader/loader';
import NotFoundPage from './not-found-page/not-found-page';

function QuestPage(): JSX.Element {
  const { id } = useParams();
  const questDetailsStatus = useAppSelector(getQuestDetailsStatus);
  const quest = useAppSelector(getQuestDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuest({ id }));
  }, [dispatch, id]);

  if (
    questDetailsStatus === RequestStatus.Loading ||
    questDetailsStatus === RequestStatus.Idle
  ) {
    return <Loader />;
  }

  if (!quest) {
    return <NotFoundPage />;
  }

  const {
    id: questId,
    title,
    previewImg,
    previewImgWebp,
    level,
    type,
    peopleMinMax: [peopleMin, peopleMax],
    description,
    coverImg,
    coverImgWebp,
  } = quest;
  const l = `${AppRoute.Booking.replace(':id', questId)}`;

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={`${previewImgWebp} 1x, ${coverImgWebp} 2x, `}
          />
          <img
            src={previewImg}
            srcSet={`${coverImg}`}
            width="1366"
            height="768"
            alt={title}
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            {title}
          </h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>
            {Type[type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
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
              {Level[level]}
            </li>
          </ul>
          <p className="quest-page__description">{description}</p>
          <Link
            className="btn btn--accent btn--cta quest-page__btn"
            to={l}
          >
            Забронировать
          </Link>
        </div>
      </div>
    </main>
  );
}

export default QuestPage;
