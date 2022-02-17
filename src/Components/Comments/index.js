import { useTranslation } from 'react-i18next';
import comment from '../mock-data/comment';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';

const Comments = () => {
  const { t } = useTranslation();

  return (
    <div>

      <h3 className="orange m-2">{t('comments')}</h3>
      <div className="mx-4 mt-5">
        <input type="text" className="form-control p-3" placeholder={t('writeComment')} onKeyPress={(e) => e.key === 'Enter' && (() => { })} />
      </div>
      {Array(5).fill(0).map(() => (
        <Comment key={makeid(10)} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
