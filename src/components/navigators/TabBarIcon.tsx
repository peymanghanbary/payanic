import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { heights, images, widths } from '../../utility/constants/global'
import { calcImageHeight, is_null } from '../../utility/functions'


interface Props{
    source?:string,
    label?:string,
    focused:boolean,
}
export default TabBarIcon=React.memo(({source="",label="",focused}:Props)=>{
    
    return (
        <View style={styles.tabBarIcon}>
            {!is_null(source) && (
                <Image source={source} style={styles.icon}/>
            )}
            {!is_null(label) && (
                <Text style={styles.label}>{label}</Text>
            )}

            {focused && (
                <Image source={images.tabbar.focused} style={styles.focused}/>
            )}

        </View>
    )
})

const styles=StyleSheet.create({
    tabBarIcon:{
        // borderWidth:1,
        height:heights.tabbar,
        position:'absolute',
        top:0,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:30,
        height:30
    },
    label:{
        color:'#fff',
        fontWeight:'bold'
    },
    focused:{
        width:widths.focusedIcon,
        height:calcImageHeight(86,64,widths.focusedIcon),
        position:'absolute',
        bottom:-3
    }
})