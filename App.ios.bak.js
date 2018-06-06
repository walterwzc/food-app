import React, {Component} from 'react'
import styles from './styles/App'
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  TabBarIOS
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      selectedTab: 'home'
    }
  }

  render() {
    const { width } = Dimensions.get('window')
    const inputPosition = width * 0.625 * 0.75
    const inputWidth = width - 40
    const imgWidth = (width - 80) * 0.25
    return (
      <View style={styles.container}>
        <TabBarIOS>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            systemIcon={'bookmarks'}
            onPress={() => this.handleChangeItem('home')}
          >
          <View style={styles.tabbar}>
            <View style={styles.bannerArea}>
              <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
                />
              <Image style={{width, height: width * 0.625}} source={require('./resource/imgs/banner.png')} />
              <TextInput
                underlineColorAndroid="transparent"
                style={[styles.input, {top: inputPosition, width: inputWidth}]}
                placeholder="请输入搜索内容" />
            </View>
            <ScrollView style={styles.categories}>
              <View style={styles.list}>
                {
                  this.state.list.map((item, index) => {
                    return (
                      <View style={styles.listItem} key={item.id}>
                        <Image style={[{width: imgWidth, height: imgWidth}, styles.listImage]} source={{uri: item.imgUrl}}></Image>
                        <Text style={styles.listTitle}>{item.title}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </ScrollView>
          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'list'}
            title='列表'
            systemIcon={'downloads'}
            onPress={() => this.handleChangeItem('list')}
          >
            <View>
              <Text>list</Text>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    )
  }

  handleChangeItem(tab) {
    this.setState({
      selectedTab: tab
    })
  }

  componentDidMount() {
    fetch('http://www.gp5.com/index.php')
      .then(response => response.json())
      .then((result) => this.handleGetListSucc(result))
  }

  handleGetListSucc(result) {
    this.setState({
      list: result.data.categories
    })
  }
}
