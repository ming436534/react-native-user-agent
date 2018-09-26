
import { NativeModules, Platform } from 'react-native';

const { RNUserAgent } = NativeModules;

module.exports = {
  ...RNUserAgent,
  getUserAgent() {
    return RNUserAgent.userAgent;
  },
  getWebViewUserAgent() {
    return RNUserAgent.webViewUserAgent;
  },
  setUserAgent(userAgent) {
    if (Platform.OS === 'ios') {
      RNUserAgent.setUserAgent(userAgent);
    }
  }
};

