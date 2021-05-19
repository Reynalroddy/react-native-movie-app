import React from 'react'
import {dummyData, icons, images, theme, COLORS, SIZES, FONTS} from "../constants"
import {
    View,
    SafeAreaView,
    FlatList,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    ImageBackground,
    Animated,
    ScrollView,
    StyleSheet
} from 'react-native';
const Dots = ({newSeasonScrollX})=>{
    // const newSeasonScrollX= React.useRef(new Animated.Value(0)).current
const dotPosition= Animated.divide(newSeasonScrollX,SIZES.width)

// console.log(dummyData.newSeason)
    return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:SIZES.padding}}>
    {dummyData.newSeason.map((item,index)=>{

        const opacity = dotPosition.interpolate({
            inputRange:[index-1,index,index+1],
            outputRange:[0.3,1,0.3],
            extrapolate:"clamp"
        })

        const dotWidth = dotPosition.interpolate({

            inputRange:[index-1,index,index+1],
            outputRange:[6,20,6],
            extrapolate:"clamp"
        })

        const dotColor = dotPosition.interpolate({
            inputRange:[index-1,index,index+1],
            outputRange:[COLORS.lightGray,COLORS.primary,COLORS.lightGray],
            extrapolate:"clamp"


        })
    return (
    <Animated.View style={{borderRadius:SIZES.radius,
    marginHorizontal:3,
    width:dotWidth,
    height:6,
    backgroundColor:dotColor}}  opacity={opacity} key={index}/>
        
    )
    
    })}
  
    </View>
    
    )
    
        }

export default Dots;
