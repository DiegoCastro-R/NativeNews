import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const CategoryListTitle = styled.Text`
  color: #808080;
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
`;
