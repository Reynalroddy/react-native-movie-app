import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    ScrollView,
    Platform,TouchableOpacity
} from 'react-native';
import {ProgressBar} from "../components"
import {dummyData, icons, images, theme, COLORS, SIZES, FONTS} from "../constants"
import LinearGradient from "react-native-linear-gradient";
const MovieDetail = ({navigation,route}) => {
   
   const [data,setData] = useState(null);
   useEffect(() => {
    const {selectedMovie} = route.params;
    setData(selectedMovie);
   }, []);

   const renderHeaderBar=()=>{
return (

    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:Platform.OS==='ios'? 40 : 20,
    paddingHorizontal:SIZES.padding}}>

<TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:20,backgroundColor:COLORS.transparentBlack}} onPress={()=>{
    navigation.goBack()
}}>
<Image source={icons.left_arrow} style={{width:20,height:20,tintColor:COLORS.white}}></Image>

</TouchableOpacity>


<TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:20,backgroundColor:COLORS.transparentBlack}} onPress={()=>{
    // navigation.goBack()
    console.log('share')
}}>
<Image source={icons.upload} style={{width:25,height:25,tintColor:COLORS.white}}></Image>

</TouchableOpacity>
    </View>
)



   }
   const renderHeaderSection=()=>{
return (
<ImageBackground source={data?.details?.image} resizeMode="cover"  style={{width:"100%",height:SIZES.height < 700 ?SIZES.height * 0.6 :SIZES.height *0.7}} >

<View style={{flex:1}}>

    {renderHeaderBar()} 

    <View style={{flex:1,
    justifyContent:'flex-end'
    }}>
<LinearGradient start={{x:0,y:0}}
end={{x:0,y:1}}
colors={['transparent','#000']}
style={{width:'100%',height:150,alignItems:'center',justifyContent:'flex-end'}}>

<Text style={{color:COLORS.white,...FONTS.body4}}>
{data?.details.season}

</Text>

<Text style={{marginTop:SIZES.base,color:COLORS.white,...FONTS.h1}}>
{data?.name}

</Text>

</LinearGradient> 

 
    </View>
</View>


</ImageBackground>



)


   }


   const renderCategoryAndRatings=()=>{

return(


    <View style={{flexDirection:'row',marginTop:SIZES.base,alignItems:'center',justifyContent:'center'}}>

<View style={{...styles.categoryContainer,marginLeft:0,}}>

<Text style={{color:COLORS.white,...FONTS.h4}}>{data?.details.age}</Text>
</View>

<View style={{...styles.categoryContainer,paddingHorizontal:SIZES.padding}}>

<Text style={{color:COLORS.white,...FONTS.h4}}>{data?.details.genre}</Text>
</View>

<View style={{...styles.categoryContainer,paddingHorizontal:SIZES.padding}}>
<Image source={icons.star} resizeMode='contain' style={{width:15,height:15}}/>
<Text style={{color:COLORS.white,...FONTS.h4,marginLeft:SIZES.base}}>{data?.details.ratings}</Text>
</View>


    </View>





)



   }


const renderMovieDetails=()=>{

return (

<View style={{flex:1,paddingHorizontal:SIZES.padding,marginTop:SIZES.padding}}>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{color:COLORS.white,...FONTS.h4}}>
    {data?.details?.currentEpisode}
</Text>

<Text style={{color:COLORS.lightGray,...FONTS.body4}}>
    {data?.details?.runningTime}
</Text>

</View>

<ProgressBar containerStyle={{marginTop:SIZES.radius}} barStyle={{height:5,borderRadius:3}} barPercentage={data?.details?.progress}></ProgressBar>


<TouchableOpacity style={{height:60,alignItems:'center',justifyContent:'center',marginTop:SIZES.radius ,marginBottom:Platform.os === 'ios'?SIZES.padding * 2:0,borderRadius:15,backgroundColor:COLORS.primary}}>


<Text style={{color:COLORS.white,...FONTS.h2}}> {data?.details?.progress == "0%"?"WATCH NOW":"CONTINUE WATCH"}</Text>

</TouchableOpacity>
</View>


)





}

    return (

        <ScrollView style={{backgroundColor:COLORS.black}} contentContainerStyle={{

            flex:1,backgroundColor:COLORS.black
        }}>

{renderHeaderSection()}

{renderCategoryAndRatings()}

{renderMovieDetails()}
        </ScrollView>
       
    )
}

export default MovieDetail;

const styles=StyleSheet.create({

categoryContainer:{
    flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:SIZES.base,paddingHorizontal:SIZES.base,paddingVertical:3,borderRadius:SIZES.base,backgroundColor:COLORS.gray1
},


})