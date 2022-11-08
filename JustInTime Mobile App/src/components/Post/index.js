import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// import the data from the database and convert into this format
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    content: 'content',
    datetime: 'November 2nd',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    content: 'content',
    datetime: 'November 1st',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    content: 'content',
    datetime: 'October 31st',
  },
];

const Item = ({ title, content, datetime }) => (
  <View style={styles.item}>
    <View style={styles.datetime}>
      <Text style={styles.content}>{datetime}</Text>
    </View>
    <View style={styles.contentView}>
      <Text style={styles.title}>{title}</Text>
      <Text stlye={styles.content}>{content}</Text>
    </View>
  </View>
);

const Post = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} content={item.content} datetime={item.datetime}/>
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  content: {
    fontSize: 16,
  },
  contentView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#E8DED1',
  },
  datetime: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: '#DE3163'
  }
});

export default Post;