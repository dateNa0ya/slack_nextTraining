import { useState } from "react";
import { useAxios } from "./useAxios";
import * as MessageType from "@/types/Message"
import useInterval from "./useInterval";

export const useMessages = (channelId: string) => {
  const { axios } = useAxios();
  const [messages, setMessages] = useState<MessageType.Message[]>([])

  const fetchMessages = async () => {
    const response = await axios.get<MessageType.Message[]>("messages.json");
    const data = Object.values(response.data).filter((v) => v);
    const messagesForChannel = data.filter((m) => {
      return m.channelId === channelId;
    });
    console.log("fetching... ", messagesForChannel);
    setMessages(messagesForChannel);
  };

  useInterval(() => {
    fetchMessages();
  }, 1000);

  async function postMessage(m: MessageType.Message): Promise<void> {
    m.channelId = channelId
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