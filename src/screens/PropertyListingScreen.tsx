import React from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { PropertyListingStyles } from '../styles';
import SelectInput from 'react-native-select-input-ios';
import Property from '../components/Property';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { ScrollView } from 'react-native-gesture-handler';
import PropertyDetails from '../components/PropertyDetails';



const PropertyListingScreen = () => {
    const options = [
        { value: 0, label: 'Select' },
        { value: 1, label: '$0-$2500' },
        { value: 2, label: '$2501-$4000' },
        { value: 3, label: '$4001-$6000' },
        { value: 4, label: '$6001-$8000' }
    ];
    const specification = [
        { value: 0, label: 'Select' },
        { value: 1, label: '1br' },
        { value: 2, label: '2br' },
        { value: 3, label: '3br' },
        { value: 4, label: '4br' }
    ];
    const room_specification = [
        { value: 0, label: 'Select' },
        { value: 1, label: '1bh' },
        { value: 2, label: '2bh'},
        { value: 3, label: '3bh' },
        { value: 4, label: '4bh' }
    ];
    return(
        <View>
             <ScrollView>
                <View>
                    <TextInput
                        placeholder="Please Enter Place, City"
                        style={PropertyListingStyles.cityTextInput}
                    />    
                    <View style={{width:'100%', flexDirection: "row", marginRight:10, marginLeft:10,marginTop:10}}>
                        <View style={{width:'37%', borderColor: 'black',borderWidth: 2,borderRadius: 4,marginRight:'1%'}}>
                            <SelectInput value={0} options={options} />
                        </View>
                        <View style={{width:'28%', borderColor: 'black',borderWidth: 2,borderRadius: 4, marginRight:'1%'}}>
                            <SelectInput value={0} options={specification} /> 
                        </View>
                        <View style={{width:'28%', borderColor: 'black',borderWidth: 2,borderRadius: 4}}>
                            <SelectInput value={0} options={room_specification} />
                        </View>   
                    </View> 
                </View>
                <View style={{marginTop:20}}>
                    <Property source={{uri: 'http://www.homeandbeyond.in/assets/images/slideshow/banner2.jpg'}} />
                    <PropertyDetails title='New York' subtitle='14 Dunham PI #300' content='1 bed, 1 kitchen' price='$3000'/>
                    <Property source={{uri: 'https://website-images.livmatrix.com/magazine/wp-content/uploads/2017/03/27175021/Watermarked-3-750x500.jpg'}} />
                    <PropertyDetails title='London' subtitle='Lorem Ipsum' content='3 bed, 1 kitchen' price='$5000'/>
                    <Property source={{uri: 'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1495001963/p/photo/image/2013905/CAM_2_OPTION_1.jpg'}} />
                    <PropertyDetails title='Canada' subtitle='Vancouver' content='4 bed, 2 kitchen' price='$8000'/>
                </View>
            </ScrollView>
      </View>
    )
};


export default PropertyListingScreen;