import HomeScreen from '../pages/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/navigators/TabBarIcon';
import HeaderTitle from '../components/navigators/HeaderTitle';
import { heights, images } from '../utility/constants/global';

const Tab = createBottomTabNavigator();
export default function RootNavigator() {
  return (
    <Tab.Navigator initialRouteName='Tab0' screenOptions={{headerTitle:(props)=><HeaderTitle {...props}/>,
      tabBarStyle:{
        position:'absolute',
        bottom:30,
        backgroundColor:'#061DDB',
        marginHorizontal:20,
        alignSelf:'center',
        borderRadius:heights.tabbar,
        height:heights.tabbar,
        paddingHorizontal:20,
      },
      tabBarShowLabel:false,
      headerStyle:{
        height:130,
        borderBottomWidth:0,
        elevation: 0,
        shadowOpacity: 0,
      }
      }}>
      <Tab.Screen 
        name="Tab4"
        component={HomeScreen} 
        options={{tabBarIcon:(props)=><TabBarIcon {...props} source={images.tabbar.icon4}/>}}
      />
      <Tab.Screen 
        name="Tab3"
        component={HomeScreen} 
        options={{tabBarIcon:(props)=><TabBarIcon {...props} source={images.tabbar.icon3}/>}}
      />
      <Tab.Screen 
        name="Tab2" 
        component={HomeScreen} 
        options={{tabBarIcon:(props)=><TabBarIcon {...props} source={images.tabbar.icon2}/>,title:'Market Data',unmountOnBlur:true}}
      />
      <Tab.Screen 
        name="Tab1"
        component={HomeScreen} 
        options={{tabBarIcon:(props)=><TabBarIcon {...props} source={images.tabbar.icon1}/>}}
      />
       <Tab.Screen 
        name="Tab0" 
        component={HomeScreen} 
        options={{tabBarIcon:(props)=><TabBarIcon {...props} label="هایپر"/>}}
      />
    </Tab.Navigator>
  );

}
