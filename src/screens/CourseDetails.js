import { StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';
import CoursesApi from "./api/course";
const CourseDetails = ({navigation, route}) => {
    const id = route.params.courseID;
    console.log(id);
    const item = CoursesApi.find((element) => {
        return id === element.id;
    });
    // console.log(item)
    const courseCard = (item) => {
        // console.log(item)
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
                    <Text style={styles.mainDecription}>Course 1: {item.course1}</Text>
                    <Text style={styles.mainDecription}>Course 2:{item.course2}</Text>
                    <Text style={styles.mainDecription}>Course 3:{item.course3}</Text>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.price}>RS.{item.price}</Text>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={()=>navigation.navigate('Course')}
                        >
                            <Text style={styles.buttonText}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }


    return (
        <View>
            {courseCard(item)}
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
        justifyContent:'space-evenly',
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
    },
    price: {
        backgroundColor: "#344055",
        // borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal:20,
        marginVertical:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize: 20,
        color:'#eee',
        fontFamily:'JosefinSans_500Medium'
      },
})
export default CourseDetails;
