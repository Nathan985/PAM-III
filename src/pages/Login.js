import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginPage extends Component {

    constructor(props) {

        super(props);

        this.state = {

            InputName: "",
            InputSenha: "",

        }

    }

    onChangeHandler(value, field) {

        this.setState({
            [field]: value
        })

    }

    tryLogin() {

        const { InputName, InputSenha } = this.state

        console.log(this.state)

        try {

            firebase
                .auth()
                .signInWithEmailAndPassword(InputName, InputSenha)
                .then(user => {

                    console.log('USUÁRIO AUTENTICADO: ', user.user.email)
                    console.log('DADOS DO OBJETO: ', user)

                }).catch(error => {
                    console.log('USUÁRIO NÃO INDENTIFICADO!', error)
                })

        } catch (error) {

            console.log(error.toString(error))

        }

    }

    componentDidMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyCnGr5JrpS0rUA_xkWGw9QtSOywtrlMFrI",
            authDomain: "seriesdata-dbb6d.firebaseapp.com",
            databaseURL: "https://seriesdata-dbb6d.firebaseio.com",
            projectId: "seriesdata-dbb6d",
            storageBucket: "seriesdata-dbb6d.appspot.com",
            messagingSenderId: "354093718404",
            appId: "1:354093718404:web:1bd0b1a02e5ba4ce4b1bd1",
            measurementId: "G-T5XFSY463Z"
        }


        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        return (
            <View>

                <FormRow first>
                    <TextInput onChangeText={value => this.onChangeHandler(value, "InputName")}
                        style={styles.TextInput} placeholder="Email"></TextInput>
                </FormRow>

                <FormRow last>
                    <TextInput onChangeText={value => this.onChangeHandler(value, "InputSenha")}
                        secureTextEntry style={styles.TextInput} placeholder="Senha" ></TextInput>
                </FormRow>

                <View style={styles.Container} >
                    <Button onPress={() => { this.tryLogin() }} title="Cadastrar" color="#6c22f7" />
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    TextInput: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    },
    Container: {
        paddingTop: 5
    }
})