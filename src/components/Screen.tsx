import React from 'react';
import {StatusBar as RNStatusBar, SafeAreaView, ScrollView, StatusBarStyle, StyleSheet} from 'react-native';
import useThemeContext from '../utility/hooks/useThemeContext';
import LinearGradient from 'react-native-linear-gradient';
type Props = {
  children: any;
  scrollable?:boolean
};

export default function Screen({ children,scrollable=true }: Props) {
  const { colors } = useThemeContext();

  return (
    <SafeAreaView style={{flexGrow:1}}>
      <LinearGradient colors={['#fff','#fff', '#eee', '#eee','#eee']} style={[styles.linearGradient]}>
        {scrollable ? (
          <ScrollView contentContainerStyle={{paddingBottom:100}} showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        ):(
          children
        )}
      </LinearGradient>
    </SafeAreaView>
  )
}


var styles = StyleSheet.create({
  linearGradient: {
    width:'100%',
    flex:1,
  },
});
