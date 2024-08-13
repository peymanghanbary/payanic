import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { images } from '../../utility/constants/global'
import { calcImageHeight } from '../../utility/functions'

const {width}=Dimensions.get('window')
export default HeaderTitle=React.memo((props)=>{

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button}>
                <Image source={images.header.drawerIcon} style={styles.drawerIconImage}/>
            </TouchableOpacity>

            <View style={styles.searchBox}>

                <TouchableOpacity style={styles.avatarButton}>
                    <Image source={images.header.avatar} style={styles.avatar}/>
                </TouchableOpacity>
                <TextInput style={styles.searchInput} placeholder='جستجو کنید'/>

                <TouchableOpacity style={styles.button}>
                    <Image source={images.header.voice} style={styles.voiceIconImage}/>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.button}>
                <Image source={images.header.arrowLeftIcon} style={styles.arrowLeftIconImage}/>
            </TouchableOpacity>
        </View>
    )
})

const styles=StyleSheet.create({
    header:{
        // borderWidth:1,
        alignSelf:'flex-start',
        flex:1,
        width:'100%',
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        // width:width,
        // position:'absolute',
        // left:0,
        width:'100%',
        textAlign:'center',
        fontWeight:'800',
        color:'#3a57bc',
        // borderWidth:1,
    },
    drawerIconImage:{
        width:30,
        height:30
    },
    arrowLeftIconImage:{
        width:25,
        height:calcImageHeight(37,30,25)
    },
    searchBox:{
        // borderWidth:1,
        flex:1,
        height:'100%',
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:35,
        paddingRight:20
    },
    button:{
        width:40,
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        width:55,
        height:55
    },
    avatarButton:{
        // borderWidth:1,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    searchInput:{
        textAlign:'right',
        // borderWidth:1,
        flex:1,
        height:'100%',
        paddingRight:15
    },
    voiceIconImage:{
        width:30,
        height:30
    }
})