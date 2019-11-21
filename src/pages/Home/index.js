import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ListProducts,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';
import api from '../../services/api';

export default function Home() {
  const dispatch = useDispatch();

  const amount = useSelector(state => {
    return state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {});
  });

  console.tron.log(amount);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const existentProducts = response.data.map(product => ({
        ...product,
      }));
      setProducts(existentProducts);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    console.tron.log(amount[id]);
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <>
      <Container>
        <ListProducts
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <AddButton onPress={() => handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    </>
  );
}
