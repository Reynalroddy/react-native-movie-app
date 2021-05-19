import React from 'react'
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
import {SIZES,dummyData,COLORS,icons,FONTS} from '../constants'
import ProgressBar from './ProgressBar'
const ContinueWatching = ({nav}) => {
    return (
       <View style={{marginTop:SIZES.padding}}>
<View style={styles.header}>
<Text style={{color:COLORS.white,...FONTS.h2}}>Continue Watching</Text>
<Image source={icons.right_arrow} style={{width:20,height:20,tintColor:COLORS.primary}}></Image>
</View>

<FlatList 
horizontal
// pagingEnabled
// snapToAlignment='center'
// snapToInterval={SIZES.width}
showsHorizontalScrollIndicator={false}
// scrollEventThrottle={16}
// decelerationRate={0}
contentContainerStyle={{
    marginTop:SIZES.padding
}}

data={dummyData.continueWatching}
keyExtractor={item=>item.id}
// onScroll={Animated.event([
//     {nativeEvent:{contentOffset:{x:newSeasonScrollX}}
// }],{useNativeDriver:false})}

renderItem={({item,index})=>(

    <TouchableWithoutFeedback onPress={()=>{
        nav.navigate('MovieDetail',{selectedMovie:item})
    }}>
<View style={{marginLeft:index==0?SIZES.padding:20,marginRight:index==dummyData.continueWatching.length - 1?SIZES.padding:0}}>
<Image source={item.thumbnail} resizeMode="cover" style={{width:SIZES.width /3,height:(SIZES.width/3) +60, borderRadius:20}} />

<Text style={{marginTop:SIZES.base,color:COLORS.white,...FONTS.h4}}>{item.name}</Text>
<ProgressBar containerStyle={{marginTop:SIZES.radius,}} barStyle={{height:3}} barPercentage={item.overallProgress}></ProgressBar>
</View>
 
    </TouchableWithoutFeedback>
)}
/>

       </View>
    )
}

export default ContinueWatching;


const styles=StyleSheet.create({

   header:{
        flexDirection:'row',
        // backgroundColor:COLORS.black,
paddingHorizontal:SIZES.padding,
alignItems:'center',
justifyContent:'space-between'
    },
  profileImg:{
width:40,
height:40,
flexDirection:'row',
borderColor:COLORS.black,
borderRadius:20,
borderWidth:2,

    },

    });

