import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

const UserData = () => {
    const [students,setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getUserData = async () => {
        try{
        let response = await fetch(
            "https://thapatechnical.github.io/userapi/users.json"
        );
        response = await response.json();
        setStudents(response);
        setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getUserData();
    },[]);
    const studentCard = ({item}) => {
        // console.log(item);
        return (
            // <View><Text>{item.name}</Text></View>
            <View style={styles.card}>
                <View style={styles.imgContainer}>
                    <Image style={styles.imgStyle} 
                        source={{uri:item.image}}
                    />
                </View>
                <View>
                    <View style={styles.bioDataContainer}>
                        <Text style={styles.bioData}>Bio-Data</Text>
                        <Text style={styles.idNumber}>
                            {item.id<10 ? `#0${item.id}` : `#{item.id}`}
                        </Text>
                    </View>

                    <View style={styles.mainContain}>
                        <Text style={styles.myName}>Name: {item.name}</Text>
                        <Text style={styles.myName}>email: {item.email}</Text>
                        <Text style={styles.myName}>Mobile: {item.mobile}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.mainHeader}>Enrolled students list</Text>
            <FlatList 
                data={students}
                renderItem={(item)=>studentCard(item)}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        minHeight: '100%',
        paddingVertical: 50,
        backgroundColor: '#ebedee'
    },
    card: {
        width: 250,
        height:350,
        backgroundColor: '#fff',
        borderRadius:4,
        margin:20
    },
    bioDataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#353535",
        paddingVertical: 10,
        fontFamily: "WorkSans_400Regular",
    },
    idNumber: {
      fontSize: 20,
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "WorkSans_400Regular",
      paddingRight: 10,
    },
    bioData: {
      fontSize: 30,
      color: "#fff",
      fontFamily: "WorkSans_400Regular",
      paddingLeft: 10,
    },
    mainHeader: {
        fontSize: 30,
        color: "#a18ce5",
        textAlign: "center",
        fontFamily: "WorkSans_400Regular",
        paddingVertical: 50,
      },
      imgContainer: {
        padding:10
      },
      imgStyle: {
        width:'100%',
        height:180
      },
      mainContain: {
        padding: 10,
        backgroundColor: "#353535",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingBottom: 20,
      },
      myName: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 10,
        alignSelf: "flex-start",
        textTransform: "capitalize",
        fontFamily: "WorkSans_400Regular",
      },

})
export default UserData; 