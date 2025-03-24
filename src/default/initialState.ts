import Api from '@/services';

const fetchUserInfo = async () => {
  return await Api.account.accountProfile();
};

const initialState: InitialStateType = {
  name: 'Umi Nest Admin',
  isLogin: false,
  access: [],
  menuAccess: [],
  theme: 'light',
  fetchUserInfo,
};

export default initialState;
