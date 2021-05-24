import {useEffect, useState} from "react";

export const useSound = (path: string) => {

  const [sound, setSound] = useState<HTMLAudioElement | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const requestSoundAsset = async (soundPath: string) => {
    try {
      const sound = await new Audio(soundPath);
      setSound(sound);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestSoundAsset(path);
  }, []);

  return {sound, error, loading};
};

declare global {
  interface HTMLAudioElement {
    reset: () => void;
  }
}

Audio.prototype.reset = function() {
  const audio = new Audio(this);
  audio.currentTime = 0;
}

export const playSound = async (path: string) => {
  return await new Audio(path).play();
}
