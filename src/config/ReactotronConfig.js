import Reactotron from 'reactotron-react-native';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
