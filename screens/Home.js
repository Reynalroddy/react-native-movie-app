import React from 'react';
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
import { Header,Season,Profile,Dots,ContinueWatching} from '../components'
import {dummyData, icons, images, theme, COLORS, SIZES, FONTS} from "../constants"
const Home = ({ navigation }) => {
    const newSeasonScrollX= React.useRef(new Animated.Value(0)).current;
  /*   const renderSec=()=>{
        return (
<Animated.FlatList 
horizontal
pagingEnabled
snapToAlignment='center'
snapToInterval={SIZES.width}
showsHorizontalScrollIndicator={false}
scrollEventThrottle={16}
decelerationRate={0}
contentContainerStyle={{
    marginTop:SIZES.radius
}}

data={dummyData.newSeason}
keyExtractor={item=>item.id}
onScroll={Animated.event([
    {nativeEvent:{contentOffset:{x:newSeasonScrollX}}
}],{useNativeDriver:false})}

renderItem={({item,index})=>(

    <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate('MovieDetail',{selectedMovie:item})
    }}>
<View style={styles.movCont}>
<ImageBackground source={item.thumbnail} resizeMode="cover" style={styles.bgImg} imageStyle={{borderRadius:40}}>


    <View style={styles.bgImgCont}>
        <View style={styles.playNow}>
        <View style={styles.playNowImg}>
<Image source={icons.play} resizeMode="contain"  style={{width:15,height:15,tintColor:COLORS.white}}></Image>
</View>
<Text style={{marginLeft:SIZES.base,color:COLORS.white,...FONTS.h3}}>Play Now</Text>
        </View>

{item.stillWatching.length >0 && <View style={styles.keepWatching}>

<Text style={{color:COLORS.white,...FONTS.body3}}>Still watching</Text>
<Profile profiles={item.stillWatching}/>

</View>}

    </View>
</ImageBackground>


</View>

    </TouchableWithoutFeedback>
)}
/> 

        )
    }
*/
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={{
           paddingBottom:100,
        //    backgroundColor:'red',
       }}>
            

{/* {renderSec()}; */}
<Season newSeasonScrollX={newSeasonScrollX} nav={navigation}></Season>
<Dots newSeasonScrollX={newSeasonScrollX}/>

<ContinueWatching nav={navigation}/>
           </ScrollView>
            
           {/* <View><Text style={{color:'white'}}>guy</Text></View> */}
            {/* <Season/> */}
            {/* <Dots/> */}
                    </SafeAreaView>
    )
}


export default Home;

const styles=StyleSheet.create({

container:{
    flex:1,
    backgroundColor:COLORS.black,
}
,
/* 
movCont:{
    width:SIZES.width,
    alignItems:'center',
    justifyContent:'center',
    // borderRadius:60, 
    // overflow: 'hidden',
    // borderWidth:1
},
bgImg:{
width:SIZES.width * 0.85,
height:SIZES.width * 0.85,
justifyContent:'flex-end',
// overflow: 'hidden',
// borderRadius:40,
},
bgImgCont:{

    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
// height:60,
paddingHorizontal:SIZES.radius,
marginBottom:SIZES.radius,
// backgroundColor:COLORS.primary
},
playNow:{
    flexDirection:'row',
    alignItems:'center',
},
playNowImg:{
width:40,
height:40,
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
backgroundColor:COLORS.transparentWhite,
borderRadius:20
},

keepWatching:{
justifyContent:'center',
   flexDirection:'column'

} */
});