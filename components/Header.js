import React from 'react';
import {images,SIZES,icons,COLORS} from '../constants'
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
const Header = () => {
    return (<View style={styles.header}>
       
<TouchableOpacity style={styles.imgCont} onPress={()=>{
    console.log('profile')
}}>

<Image source={images.profile_photo} style={styles.img}></Image>
</TouchableOpacity>


<TouchableOpacity style={styles.imgCont}    onPress={()=>{
    console.log('screen mirror')
}}>

<Image source={icons.airplay} style={styles.imgIcon}></Image>
</TouchableOpacity>

       </View>
    )
}

export default Header

const styles=StyleSheet.create({

    header:{
    flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
paddingHorizontal:SIZES.padding,
    },
    imgCont:{
justifyContent:'center',
alignItems:'center',
        width:50,
        height:50,

    },
    img:{
        width:40,
        height:40,
        borderRadius:20,
    },
    
    imgIcon:{

        width:25,
        height:25,
tintColor:COLORS.primary,
    }
    
    
    
    
    });