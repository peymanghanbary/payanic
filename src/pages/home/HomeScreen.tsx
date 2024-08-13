import { useState } from 'react';
import Slider from './partials/Slider';
import Screen from '../../components/Screen';
import Location from './partials/Location';
import HorizontalListItems from '../../components/HorizontalListItems';
import HorizontalListItems2 from '../../components/HorizontalListItems2';

export default function HomeScreen({navigation}:any) {

  const [data,setData]=useState({})

  return (
    <Screen>
     
      <Slider data={data} navigation={navigation}/>

      <Location navigation={navigation}/>

      <HorizontalListItems title="ارسال فوری"/>

      <HorizontalListItems title="پوشاک و مد"/>

      <HorizontalListItems2 title="پر بازدید"/>
      <HorizontalListItems2/>
      
    </Screen>
  );
  
}