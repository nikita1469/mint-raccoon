import { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export interface IPopupParams {
  buttonPosition: { x: number; y: number };
  isPopupVisible: boolean;
}

const usePopup = () => {
  const [popupParams, setPopupParams] = useState<IPopupParams>({
    buttonPosition: { x: 0, y: 0 },
    isPopupVisible: false,
  });

  const buttonRef = useRef<typeof TouchableOpacity>(null);

  const openPopup = () => {
    if (buttonRef.current) {
      (buttonRef.current as any).measureInWindow((x: number, y: number) => {
        setPopupParams({
          buttonPosition: { x, y },
          isPopupVisible: true,
        });
      });
    }
  };

  const closePopup = () => {
    setPopupParams(prev => ({
      ...prev,
      isPopupVisible: false,
    }));
  };

  return {
    popupParams,
    buttonRef,
    openPopup,
    closePopup,
  };
};

export default usePopup;
