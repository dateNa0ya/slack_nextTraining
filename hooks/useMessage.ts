import { useState } from "react";
import { useAxios } from "./useAxios";
import * as MessageType from "@/types/Message"

export const useMessages = () => {
  const { axios } = useAxios();
  const [messages, setMessages] = useState<MessageType.Message[]>([])

  const fetchMessages = async (channelId: string) => {
    const response = await axios.get<MessageType.Message[]>("messages.json");
    const data = Object.values(response.data).filter((v) => v);
    const messagesForChannel = data.filter((m) => {
      return m.channelId === channelId;
    });
    setMessages(messagesForChannel);
  };

  async function postMessage(m: MessageType.Message): Promise<void> {
    try {
      const response = await axios.post<MessageType.Message>(
        "messages.json",
        JSON.stringify({ ...m })
      );
    } catch (e) {
      console.log("error", e);
      return;
    }

    setMessages((prev) => {
      prev.push(m);
      return prev;
    });
  }

  return { fetchMessages, messages, postMessage };
}