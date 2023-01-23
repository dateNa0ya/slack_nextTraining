import { useState } from "react";
import { useAxios } from "./useAxios";
import * as MessageType from "@/types/Message"

export const useMessages = () => {
  const { axios } = useAxios();
  const [messages, setMessages] = useState<MessageType.Message[]>([])

  const postMessage = async (m: MessageType.Message) => {
    try {
      const response = await axios.post<MessageType.Message>(
        "message.json",
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

  return { messages, postMessage };
}