import { useNavigate } from 'react-router-dom';
import Bubble from './Bubble';
import chatWiths from '../mock-data/chatWiths';

const ChatList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="orange mb-4 ms-2">Chats</h2>
      <div className="mx-2">
        {chatWiths.map((chatWith) => (<Bubble key={chatWith.id} chatWith={chatWith} onPress={(withUserId) => { navigate('/chat', { state: { withUserId } }); }} />))}
      </div>
    </div>
  );
};

export default ChatList;
