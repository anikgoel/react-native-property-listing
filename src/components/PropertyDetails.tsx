import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';


const PropertyDetails = (props) => {
    return(
        // <View style={{width:'80%', marginLeft:'10%', position: 'absolute',top:'20%'}}>
        <View>
            <Card>
                <View style={{ flexDirection:'row'}}>
                    <CardTitle 
                        title={props.title}
                        subtitleStyle={{color:"red",fontSize: 15}}
                        subtitle={props.subtitle}
                    />
                    <Text style={{fontSize: 30, margin:20}}>{props.price}</Text>
                </View>
                <CardContent text={props.content} />
                <CardAction 
                    separator={true} 
                    inColumn={false}>
                </CardAction>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({


});

export default PropertyDetails; 
