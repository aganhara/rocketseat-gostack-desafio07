import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View`
  padding: 16px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  border-radius: 4px;
  padding: 8px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  margin: 0 8px;
  width: 50px;
  border-radius: 4px;
  padding: 0px 8px;
`;

export const ProductSubtotal = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: bold;
  font-size: 16px;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  color: #999;
  font-size: 16;
  font-weight: bold;
  text-align: center;
`;
export const TotalAmount = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Order = styled.TouchableOpacity`
  margin: 30px 10px 10px;
  border-radius: 4px;
  background: ${colors.primary};
  padding: 12px 0;
`;

export const OrderText = styled.Text`
  text-align: center;
  color: #fff;
`;
