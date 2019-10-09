import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import Tablist from './Tablist';
var a =0;
export class ViewItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      id:1,

  }

  }
handleClick() {
   this.setState(state => ({
     isLoading: !state.isLoading
   }));
 }
  if(a!= 0){
    componentDidMount() {
      const GETIMG = "http://192.168.1.29/duccosodulieu/getimgtruyen.php?id="+a;
      this.handleClick = this.handleClick.bind(this);
          fetch(GETIMG, {
                  method: 'GET',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  }
              }).then((response) => response.json())
                  .then((responseData) => {
                      this.setState({
                          isLoading: false,
                          dataSource: responseData
                      }, function () {

                      });
                      Alert.alert(GETIMG);
                  }).catch(function (err) {
                      Alert.alert("Đã có lỗi xảy ra...");
                      console.log(err);
                  }).done();
      }
  }
    render() {
      a =this.props.navigation.getParam('id')
      return (
        <View>
          <Text>ten truyen:</Text>
          <Text>ten tac gia:</Text>
          <Text>noidung:</Text>
          </View>
        );
    }
}
