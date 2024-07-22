import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { getMessageService } from "@/shared/services/message/getMessage";
import MessageTemplate from "@/templates/messages";
import { useQuery } from "@tanstack/react-query";

const Messages = () => {
  const { data: message } = useQuery({
    queryKey: [QUERY_KEYS.message],
    queryFn: getMessageService,
  });

  if (!message) return null;

  return <MessageTemplate messageResponse={message} />;
};

export default Messages;
