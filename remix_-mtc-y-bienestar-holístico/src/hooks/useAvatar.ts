import { useState, useEffect } from 'react';
import { BIO_DATA } from '../data';

export function useAvatar() {
  const [avatar, setAvatar] = useState(BIO_DATA.avatar);

  useEffect(() => {
    const loadAvatar = () => {
      const saved = localStorage.getItem('custom_avatar');
      if (saved) {
        setAvatar(saved);
      } else {
        setAvatar(BIO_DATA.avatar);
      }
    };
    loadAvatar();
    window.addEventListener('custom_avatar_updated', loadAvatar);
    return () => window.removeEventListener('custom_avatar_updated', loadAvatar);
  }, []);

  const updateAvatar = (base64String: string) => {
    localStorage.setItem('custom_avatar', base64String);
    setAvatar(base64String);
    window.dispatchEvent(new Event('custom_avatar_updated'));
  };

  const resetAvatar = () => {
    localStorage.removeItem('custom_avatar');
    setAvatar(BIO_DATA.avatar);
    window.dispatchEvent(new Event('custom_avatar_updated'));
  };

  return { avatar, updateAvatar, resetAvatar };
}
