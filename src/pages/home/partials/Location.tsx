import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images, paddings } from '../../../utility/constants/global';

const {width}=Dimensions.get('window')
export default function Location({navigation,data={}}:any) {


  return (
    <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
            <Image source={images.icons.location} style={styles.locationIcon}/>
            <Text>انقلاب خیابان آزادی استاد معین ...</Text>
        </View>

        <TouchableOpacity style={styles.storeButton}>
            <Text style={styles.storeButtonTitle}>فروشندگان دیگر</Text>
            <Image source={images.icons.shop} style={styles.storeButtonIcon}/>
        </TouchableOpacity>
    </View>

  );
}

const styles=StyleSheet.create({
    locationContainer:{flexDirection:'row-reverse',height:80,justifyContent:'center',alignItems:'center',paddingHorizontal:paddings.horizontal},
    addressContainer:{alignItems:'center',flex:1,flexDirection:'row-reverse'},
    locationIcon:{width:20,height:20},
    storeButton:{backgroundColor:"#061DDB",borderRadius:12,height:41,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingHorizontal:15},
    storeButtonTitle:{color:'white',marginRight:5},
    storeButtonIcon:{width:20,height:20},
})