/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Conversation } from '../components/Conversation';
import { useLocation } from 'react-router-dom';

export const Chatpage = ({data}) => {
  const location = useLocation();
  const { chatId } = location.state || {}; 
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Conversation name={data.username}/> 
    </div>
  );
};

export default Chatpage;
