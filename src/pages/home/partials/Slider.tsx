import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { calcImageHeight} from '../../../utility/functions';
import Carousel from 'react-native-reanimated-carousel';
import { images } from '../../../utility/constants/global';

const {width}=Dimensions.get('window')
const imageWidth=width-130
const imageHeight = calcImageHeight(510,610,imageWidth)
export default function Slider({navigation,data={}}:any) {

  const sliderData=[
    {id:1,source:images.slider.slider1,title:"گوشی سامسونگ a53",rate:"4.5",remainingTime:"۱۱:۲۲:۰۳",inventory:"1",discountPercent:"۵۰٪",price:"۵۰۰۰۰",offPrice:"۷۴۰۰۰"},
    {id:1,source:images.slider.slider2,title:"گوشی سامسونگ a53",rate:"4.5",remainingTime:"۱۱:۲۲:۰۳",inventory:"1",discountPercent:"۵۰٪",price:"۵۰۰۰۰",offPrice:"۷۴۰۰۰"},
    {id:1,source:images.slider.slider3,title:"گوشی سامسونگ a53",rate:"4.5",remainingTime:"۱۱:۲۲:۰۳",inventory:"1",discountPercent:"۵۰٪",price:"۵۰۰۰۰",offPrice:"۷۴۰۰۰"},
  ]

  return (
    <View style={styles.container}>

      <Carousel
        loop
        width={width}
        height={imageHeight}
        mode={'parallax'}
        modeConfig={{parallaxScrollingScale:1,parallaxAdjacentItemScale:0.8,parallaxScrollingOffset:120}}
        // autoPlay={true}
        data={sliderData}
        // autoPlayInterval={4000}
        scrollAnimationDuration={500}
        renderItem={({ item,index }) => (
          <Pressable onPress={()=>{navigation.navigate("Profile",{data,source:item.source})}} style={styles.imageSlideContainer} key={index}>
              <Image alt='slider' style={styles.imageSlide} source={item.source}/>

              <View style={styles.productDetailContainer}>

                <View style={styles.row}>
                  <Text style={styles.title1}>شگفت انگیز روز</Text>
                  <View style={styles.rowLvl2}>
                    <Image alt='slider' style={styles.star} source={images.slider.star}/>
                    <Text style={styles.rate}>4.5</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.rowLvl2}>
                    <Image alt='slider' style={styles.clock} source={images.slider.clock}/>
                    <Text style={styles.remainingTime}>{item.remainingTime}</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <Text style={styles.inventory}>موجودی: {item.inventory} عدد</Text>
                  <View style={styles.rowLvl2}>
                    <View style={styles.discountContainer}>
                      <Text style={styles.discount}>{item.discountPercent}</Text>
                    </View>
                    <View>
                    <Text style={styles.offPrice}>{item.offPrice} تومان</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.rowLvl2}>
                  {sliderData.map((item,index1)=>{
                    return (
                      <View key={index1} style={{...styles.indicator,backgroundColor:index==index1?"#F5AF19":"#979797",}}/>
                    )
                  })}
                </View>

              </View>
          </Pressable>
        )}
      />

    </View>
  );
}

const styles=StyleSheet.create({
    indicator:{width:14,height:4,borderRadius:4,marginHorizontal:2},
    price:{color:'#979797',fontWeight:'bold',textAlign:'center',textDecorationLine:'line-through',textDecorationColor:'#D62E1C',fontSize:15},
    offPrice:{color:'white',fontWeight:'bold',textAlign:'center',fontSize:17},
    discount:{color:'white',fontWeight:'bold',textAlign:'center',fontSize:14},
    discountContainer:{backgroundColor:"#D62E1C",borderRadius:12,justifyContent:'center',alignItems:'center',paddingVertical:5,paddingHorizontal:10,marginRight:20},
    inventory:{color:'#D62E1C',fontWeight:'bold',flex:1,textAlign:'right'},
    remainingTime:{color:'white',fontWeight:'bold',textAlign:'center'},
    clock:{width:17,height:17,marginRight:10},
    rate:{color:'white',fontWeight:'bold',textAlign:'center'},
    star:{width:17,height:17,marginRight:10},
    title:{color:'white',fontWeight:'bold',flex:1,textAlign:'right',fontSize:16},
    title1:{color:'white',fontWeight:'bold',flex:1,textAlign:'right'},
    rowLvl2:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
    row:{flexDirection:'row-reverse',alignItems:'center'},
    productDetailContainer:{
      backgroundColor:"#000000c4",
      // width:'100%',
      height:'45%',
      position:'absolute',
      bottom:0,
      // left:0,
      zIndex:10,
      width:imageWidth,
      alignSelf:'center',
      borderRadius:30,
      paddingHorizontal:10,
      paddingVertical:15,
      justifyContent:'space-between'

    },
    container:{
        marginTop:10,
        height:imageHeight
    },
    imageSlide:{
        width:imageWidth,
        height:imageHeight,
        resizeMode:'contain',
        borderRadius:30,
    },
    imageSlideContainer:{
      alignItems:'center',
      // borderWidth:1,
      justifyContent:'center',
    }
})