import React, {Component} from 'react'
import styles from './styles/App'
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView
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
    if (this.state.selectedTab === 'home') {
      return (
        <View style={styles.container}>
          <View style={styles.body}>
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
          <View style={styles.tabbarAndroid}>
            <Text onPress={() => this.handleChangeItem('home')}>首页</Text>
            <Text onPress={() => this.handleChangeItem('list')}>列表</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View><Text>list</Text></View>
          <View style={styles.tabbarAndroid}>
            <Text onPress={() => this.handleChangeItem('home')}>首页</Text>
            <Text onPress={() => this.handleChangeItem('list')}>列表</Text>
          </View>
        </View>
      )
    }
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
