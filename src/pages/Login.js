import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends Component {

    constructor(props){

        super(props);

        this.state = {

            InputName: "",
            InputSenha: ""

        }

    }

    onChangeHandler(value, field){

        this.setState({
            [field]: value
        })

    }

    Login(){

        console.log(this.state);

    }

    render() {
        return (
            <View>

                <FormRow first>
                    <TextInput onChangeText= {value => this.onChangeHandler(value, "InputName")}
                    style= {styles.TextInput} placeholder="Email"></TextInput>
                </FormRow>

                <FormRow last>
                    <TextInput onChangeText= {value => this.onChangeHandler(value, "InputSenha")}
                    secureTextEntry style= {styles.TextInput} placeholder="Senha" ></TextInput>
                </FormRow>

                <View style={styles.Container} >
                    <Button onPress= {() => {this.Login()}} title="Cadastrar" color="#6c22f7" />
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