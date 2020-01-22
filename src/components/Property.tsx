import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardImage } from 'react-native-material-cards'


const Property = (props) => {
    return(
        <View>
            <Card>
                <CardImage 
                    source={props.source} 
                />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({


});

export default Property; 
