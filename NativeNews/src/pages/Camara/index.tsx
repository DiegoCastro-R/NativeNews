import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, CategoryListTitle } from './styles';
import api from '../../services/api';

interface Post {
  title: string;
  category: string;
}

const Camara: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#808080" />
      <Container>
        <CategoryListTitle>Mensagens do Presidente</CategoryListTitle>
        <FlatList<Post>
          data={posts}
          keyExtractor={post => post.title}
          renderItem={({ item: post }) => (
            <ListItem.Content
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
              }}
            >
              {post.category === 'messages' ? (
                <>
                  <Icon style={{ marginRight: 16 }} size={20} name="landmark" />
                  <ListItem.Title style={{ height: 45, width: '90%' }}>
                    {post.title}
                  </ListItem.Title>
                </>
              ) : null}
            </ListItem.Content>
          )}
        />
        <CategoryListTitle>Noticias</CategoryListTitle>
        <FlatList<Post>
          scrollEnabled={false}
          data={posts}
          keyExtractor={post => post.title}
          renderItem={({ item: post }) => (
            <ListItem.Content
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
              }}
            >
              {post.category === 'news' ? (
                <>
                  <Icon style={{ marginRight: 16 }} size={20} name="landmark" />
                  <ListItem.Title style={{ height: 45 }}>
                    {post.title}
                  </ListItem.Title>
                </>
              ) : null}
            </ListItem.Content>
          )}
        />
        <CategoryListTitle>Horarios e Serviços</CategoryListTitle>
        <FlatList<Post>
          scrollEnabled={false}
          data={posts}
          keyExtractor={post => post.title}
          renderItem={({ item: post }) => (
            <ListItem.Content
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
              }}
            >
              {post.category === 'schedules' ? (
                <>
                  <Icon style={{ marginRight: 16 }} size={20} name="landmark" />
                  <ListItem.Title style={{ height: 35 }}>
                    {post.title}
                  </ListItem.Title>
                </>
              ) : null}
            </ListItem.Content>
          )}
        />
        <CategoryListTitle>Taxas e Tarifários</CategoryListTitle>
        <FlatList<Post>
          scrollEnabled={false}
          data={posts}
          keyExtractor={post => post.title}
          renderItem={({ item: post }) => (
            <ListItem.Content
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'center',
              }}
            >
              {post.category === 'taxes' ? (
                <>
                  <ListItem.Title style={{ height: 35 }}>
                    {post.title}
                  </ListItem.Title>
                </>
              ) : null}
            </ListItem.Content>
          )}
        />
      </Container>
    </>
  );
};

export default Camara;
