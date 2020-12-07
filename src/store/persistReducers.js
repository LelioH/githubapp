import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistReducer = persistReducer(
    {
      storage: AsyncStorage,
      whitelist: ['auth', 'users'],
    },
    reducers,
  );

  return persistReducer;
};
