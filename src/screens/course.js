import { FlatList, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Courses from "./api/course";
const Course = ({navigation}) => {

    const courseCard = (props) => {
        const item = props.item;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image style={styles.cardImage} source={item.image} 
                        resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.mainHeader}>{item.title}</Text>
                    <Text style={styles.mainDecription}>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={()=>navigation.navigate('CourseDetails')}
                        >
                            <Text style={styles.buttonText}>Course Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }


    return (
        <View>
            <FlatList 
            
            data={Courses}
            keyExtractor={(item)=>item.id}
            renderItem={ (item)=>courseCard(item) }
            
            />
        </View>
    );
}
const styles = StyleSheet.create({
    cardImage: {
        height: undefined,
        width:'100%',
        aspectRatio:1
    },
    mainContainer:{
        paddingHorizontal:30,
    },
    courseContainer: {
        padding: 30,
        backgroundColor:'rgba(255, 255, 255, 0.90)',
        // textAlign: 'center',
        shadowColor: 'gray',
        shadowOffset: {width:0,height:0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },
    mainHeader:{
        fontSize:26,
        textAlign:'center',
        fontFamily: 'Nunito_600SemiBold',
        paddingBottom:10  
    },
    mainDecription: {
        fontSize:16,
        fontFamily: 'JosefinSans_400Regular',
        paddingBottom:10,
        lineHeight:20,
        color:'#7d7d7d',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal:20,
        marginVertical:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        fontSize: 20,
        color:'#eee',
        fontFamily:'JosefinSans_500Medium'
    }
})
export default Course; 