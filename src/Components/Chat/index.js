import './Chat.css';
import Bubble from './Bubble';
import chats from '../mock-data/chats';

const Chat = () => (
  <main>
    <div>
      <h2 className="orange mb-4 ms-2">Chat</h2>
      {chats.map((chat) => (
        <Bubble key={chat.id} chat={chat} />
      ))}
    </div>
  </main>
);

export default Chat;
