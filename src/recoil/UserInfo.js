import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserInfo = atom({
  key: 'UserInfo',
  default: {
    userId: null,
    userNName: null,
    moreInfo: null,
    userPhone: null,
    userEmail: null,
  },
  effects: [persistAtom],
});
