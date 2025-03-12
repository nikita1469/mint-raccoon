import { VideoView, useVideoPlayer } from "expo-video";
import { useRef, useEffect, useCallback, useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";

interface VideoSplashProps {
  onVideoFinish?: () => void;
}

const VideoSplash = ({ onVideoFinish }: VideoSplashProps) => {
  const videoRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const handlePlayToEnd = useCallback(() => {
    onVideoFinish?.();
  }, [onVideoFinish]);

  const player = useVideoPlayer(require("@/shared/assets/splash-video-original.mp4"), (player) => {
    player.loop = false;
    player.volume = 1.0;
    player.muted = false;
    player.addListener("playToEnd", handlePlayToEnd);
    setIsPlayerReady(true);
  });

  const handleSkipVideo = useCallback(() => {
    if (player) {
      player.pause();
      onVideoFinish?.();
    }
  }, [player, onVideoFinish]);

  useEffect(() => {
    if (player && isPlayerReady) {
      const timer = setTimeout(() => {
        player.play();
      }, 100);

      return () => {
        clearTimeout(timer);
        player.removeListener("playToEnd", handlePlayToEnd);
      };
    }
  }, [player, handlePlayToEnd, isPlayerReady]);

  return (
    <TouchableWithoutFeedback onPress={handleSkipVideo}>
      <View style={{ flex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
        <VideoView
          ref={videoRef}
          style={{ width: "100%", height: "100%" }}
          player={player}
          nativeControls={false}
          contentFit="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoSplash;
