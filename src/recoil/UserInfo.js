import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserInfo = atom({
  key: 'UserInfo',
  default: {
    userId: '',
    userNName: '',
    moreInfo: '',
    userPhone: '',
    userEmail: '',
  },
  effects: [persistAtom],
});
