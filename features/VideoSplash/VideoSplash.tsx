import { VideoView, useVideoPlayer } from "expo-video";
import { useRef, useEffect, useCallback, useState } from "react";
import { View } from "react-native";

interface VideoSplashProps {
  onVideoFinish?: () => void;
}

const VideoSplash = ({ onVideoFinish }: VideoSplashProps) => {
  const videoRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const handlePlayToEnd = useCallback(() => {
    console.log("Video finished playing");
    onVideoFinish?.();
  }, [onVideoFinish]);

  const player = useVideoPlayer(require("@/shared/assets/splash-video.mp4"), (player) => {
    console.log("Initializing video player");
    player.loop = false;
    player.volume = 1.0;
    player.muted = false;
    player.addListener("playToEnd", handlePlayToEnd);
    setIsPlayerReady(true);
  });

  useEffect(() => {
    if (player && isPlayerReady) {
      console.log("Starting video playback");
      // Небольшая задержка перед воспроизведением
      const timer = setTimeout(() => {
        player.play();
      }, 100);

      return () => {
        clearTimeout(timer);
        console.log("Cleaning up video player");
        player.removeListener("playToEnd", handlePlayToEnd);
      };
    }
  }, [player, handlePlayToEnd, isPlayerReady]);

  return (
    <View style={{ flex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
      <VideoView
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        player={player}
        nativeControls={false}
        contentFit="cover"
      />
    </View>
  );
};

export default VideoSplash;
