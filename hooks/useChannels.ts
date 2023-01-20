import { useAxios } from "./useAxios"
import { useEffect, useState } from "react";
import { channel } from "@/types/channel"

export const useChannels = () => {
  const { axios } = useAxios();
  const [ channels, setChannels ] = useState<channel[]>([]);
  
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("/channels.json");
      setChannels(data.data.filter((v: channel) => v));
    };

    fetch();
  }, []); 

  return { channels };
}