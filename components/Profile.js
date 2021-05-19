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

import {SIZES,dummyData,COLORS,icons,FONTS} from '../constants';
const Profile = ({profiles}) => {
    if(profiles.length<=3){
        return (
        
            <View style={styles.container}>
               {profiles.map((item,index)=>{
return <View key={`profile-${index}`} style={index==0?null:{marginLeft:-15}}> 

<Image source={item.profile} resizeMode="cover"  style={styles.profileImg}></Image>
</View>

               })}
            </View>
        )
    }
    else {
        return (
        
            <View style={styles.container}>
               {profiles.map((item,index)=>{
                   if(index <=2){
                    return (
                    <View key={`profile-${index}`} style={index==0?null:{marginLeft:-15}}> 

                    <Image source={item.profile} resizeMode="cover"  style={styles.profileImg}></Image>
                    </View>
                   
                    )
                   }
               })}
<Text style={{marginLeft:SIZES.base,color:COLORS.white,...FONTS.body3}} >+{profiles.length - 3}</Text>

            </View>
        )
    }
  
}

export default Profile;


const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        // backgroundColor:COLORS.black,
alignItems:'center',
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

