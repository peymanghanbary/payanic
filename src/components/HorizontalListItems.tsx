import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images, paddings } from '../utility/constants/global';
import { calcImageHeight } from '../utility/functions';

const {width}=Dimensions.get('window')
const itemW=width/2.5
const imageW=width/2.5-20
const imageH=imageW
export default function HorizontalListItems({navigation,data={},title=""}:any) {

    const dataItems=[
        {
            id:1,
            deliveryTitle:"ارسال فروشنده",
            discountPercent:"۵۰٪",
            title:"قهوه اسپرسو بن مانو مدل آرتیمان وزن ۲۳ گرم و ...",
            inventory:"1",
            offPrice:"۵،۰۰۰،۰۰۰۰",
            price:"۶۵،۰۰۰۰",
            remainingTime:"۰۰:۲۲:۴۴",
        },
        {
            id:2,
            deliveryTitle:"ارسال فروشنده",
            discountPercent:"۵۰٪",
            title:"قهوه اسپرسو بن مانو مدل آرتیمان وزن ۲۳ گرم و ...",
            inventory:"1",
            offPrice:"۵،۰۰۰،۰۰۰۰",
            price:"۶۵،۰۰۰۰",
            remainingTime:"۰۰:۲۲:۴۴",
        },
        {
            id:3,
            deliveryTitle:"ارسال فروشنده",
            discountPercent:"۵۰٪",
            title:"قهوه اسپرسو بن مانو مدل آرتیمان وزن ۲۳ گرم و ...",
            inventory:"1",
            offPrice:"۵،۰۰۰،۰۰۰۰",
            price:"۶۵،۰۰۰۰",
            remainingTime:"۰۰:۲۲:۴۴",
        },
]

    const renderItem=({item,index}:any)=>{

        return (
            <View style={{paddingTop:16}}>
                <View style={styles.item}>

                    <TouchableOpacity style={styles.likeButton}>
                        <Image source={images.icons.heart} style={styles.likeIcon}/>
                    </TouchableOpacity>

                    <View style={styles.imageContainer}>
                        <Image source={images.products.product1} style={styles.image}/>

                        <View style={styles.badgeContainer}>
                        
                        <View style={styles.badgeRight}>
                                <Text style={styles.badgeRightTitle}>{item.deliveryTitle}</Text>
                                <Image source={images.icons.truck} style={styles.badgeRightIcon}/>
                            </View>

                            <View style={styles.badgeLeft}>
                                <Text style={styles.badgeLeftTitle}>{item.discountPercent}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{marginHorizontal:10}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.inventory}>باقی مانده {item.inventory} عدد</Text>

                        <View style={styles.priceAction}>
                            <TouchableOpacity style={styles.addButton}>
                                <Image source={images.icons.plusWhite} style={{width:25,height:25}}/>
                            </TouchableOpacity>
                            <View style={{flex:1}}>
                                <Text style={styles.offPrice}>{item.offPrice} تومان</Text>
                                <Text style={styles.price}>{item.price}</Text>
                            </View>
                        </View>

                        <View style={styles.remainingTimeContainer}>
                            <Text style={styles.remainingTime}>{item.remainingTime}</Text>
                            <Image source={images.icons.clockDark} style={{width:15,height:15}}/>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    return (
    <View style={{paddingHorizontal:paddings.horizontal,...styles.container}}>


        <View style={styles.titr}>
            <Text style={styles.titrTitle}>{title}</Text>

            <TouchableOpacity style={styles.moreButton}>
                <Image source={images.icons.chevronLeft} style={styles.chevronLeft}/>
                <Text style={styles.moreTitle}>بیشتر</Text>
            </TouchableOpacity>
        </View>

        <FlatList
            showsHorizontalScrollIndicator={false}
            inverted
            horizontal
            data={dataItems}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
            style={{marginTop:20}}
        />

    </View>
    );
}

const styles=StyleSheet.create({
    item:{width:width/2.5,backgroundColor:'#fff',marginLeft:10,borderRadius:10,paddingBottom:15},
    imageContainer:{width:imageW,height:imageH,alignSelf:'center'},
    image:{width:'100%',height:'100%'},
    badgeContainer:{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:10,right:0,width:'100%'},
    badgeRight:{flexDirection:'row',alignItems:'center',backgroundColor:"#55d009c9",borderTopLeftRadius:10,borderBottomLeftRadius:10,paddingHorizontal:10,paddingVertical:3},
    badgeRightTitle:{textAlign:'right',color:"white",marginRight:5,fontSize:12},
    badgeRightIcon:{width:18,height:calcImageHeight(30,20,18)},
    badgeLeft:{flexDirection:'row',alignItems:'center',backgroundColor:"#D62E1C",borderBottomRightRadius:10,borderTopRightRadius:10,paddingHorizontal:5,paddingVertical:3},
    badgeLeftTitle:{textAlign:'right',color:"white",fontSize:12},
    title:{textAlign:'right',fontWeight:'bold'},
    inventory:{textAlign:'right',color:"#D62E1C",marginTop:10},
    priceAction:{flexDirection:'row-reverse',marginTop:15},
    addButton:{backgroundColor:"#061DDB",width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:40},
    offPrice:{textAlign:'center',fontWeight:'bold',fontSize:16,color:'#061DDB'},
    price:{textAlign:'center',textDecorationLine:'line-through',textDecorationColor:'red'},
    container:{
        marginBottom:30
    },
    chevronLeft:{
        width:12,
        height:calcImageHeight(17,27,12),
        marginRight:10,
    },
    remainingTimeContainer:{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10},
    remainingTime:{textAlign:'center',fontWeight:'bold',fontSize:14,color:'#6F6F71',marginRight:7},
    titr:{flexDirection:'row-reverse',justifyContent:'space-between'},
    titrTitle:{fontWeight:'bold',fontSize:18},
    moreButton:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
    moreTitle:{color:"#061DDB",fontSize:16},
    likeButton:{backgroundColor:"white",elevation:1,width:40,height:40,borderRadius:10,position:'absolute',top:-15,right:5,zIndex:10,borderWidth:1,borderColor:"#eee",justifyContent:'center',alignItems:'center'},
    likeIcon:{width:20,height:calcImageHeight(35,33,20)},
})