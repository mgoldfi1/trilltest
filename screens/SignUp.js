// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken("pk.eyJ1IjoibWdvbGRmaTEiLCJhIjoiY2sycTA5a2pkMGEwdTNlbXduYmNjY2V6NCJ9.sO2JLZb14odxmPXOgcvQ7A");


export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
  firebase
  .auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => this.props.navigation.navigate('Main'))
  .catch(error => this.setState({ errorMessage: error.message }))
}
render() {
    return (
       
          <View style={{flex: 1}}>
          <MapboxGL.MapView
          style={{flex: 1}}
          >
            <MapboxGL.Camera  zoomLevel={12} centerCoordinate={[-73.967682,40.780390]}/>
        </MapboxGL.MapView>
      </View>
    
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})