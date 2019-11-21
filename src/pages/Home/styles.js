import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const ListProducts = styled.FlatList`
  margin-left: 10px;
`;

export const Product = styled.View`
  margin: 0 8px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text.attrs({})`
  margin: 8px 0;
  font-size: 27px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
