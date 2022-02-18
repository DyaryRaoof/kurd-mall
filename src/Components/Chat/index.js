import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Chat.css';
import Bubble from './Bubble';
import chats from '../mock-data/chats';

const Chat = () => {
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  return (
    <main className="container">
      <div>
        <h2 className="orange mb-4 ms-2">{t('chat')}</h2>
        <div className="mx-2">
          <input className="rounded-pill p-3 mb-2  form-control" type="text" placeholder={t('enterMessage')} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        {chats.map((chat) => (
          <Bubble key={chat.id} chat={chat} />
        ))}
      </div>
    </main>
  );
};

export default Chat;
