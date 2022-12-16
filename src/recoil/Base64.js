import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const inputBase64 = atom({
  key: 'inputBase64',
  default: {
    Base64: null,
  },
  effects: [persistAtom],
});
