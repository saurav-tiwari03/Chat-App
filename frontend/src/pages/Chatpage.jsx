import { Conversation } from '../components/Conversation';
import { useLocation } from 'react-router-dom';

export const Chatpage = () => {
  const location = useLocation();
  const { chatId } = location.state || {}; 
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Conversation name={chatId}/> 
    </div>
  );
};

export default Chatpage;
