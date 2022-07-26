import { RFValue } from 'react-native-responsive-fontsize';

const getResponsiveValue = (value: number): number => {
  return RFValue(value);
};

export { getResponsiveValue };
