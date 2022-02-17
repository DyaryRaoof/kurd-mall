import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Bubble from './Bubble';
import chatWiths from '../mock-data/chatWiths';

const ChatList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <main className="container">
      <h2 className="orange mb-4 ms-2">{t('chats')}</h2>
      <div className="mx-2">
        {chatWiths.map((chatWith) => (<Bubble key={chatWith.id} chatWith={chatWith} onPress={(withUserId) => { navigate('/chat', { state: { withUserId } }); }} />))}
      </div>
    </main>
  );
};

export default ChatList;
