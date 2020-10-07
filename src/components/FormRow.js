import React from 'react';
import {View, StyleSheet} from 'react-native';

const FormRow = props => {

    const {children, first, last} = props

    return(
        <View style= {[style.Container, first ? style.First : null, last ? style.Last: null]}>
            {children}
        </View>
    );

}

const style = StyleSheet.create({

    Container: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        elevation: 2
    },
    First: {
        marginTop: 10
    },
    Last: {
        marginBottom: 10
    }

})

export default FormRow;