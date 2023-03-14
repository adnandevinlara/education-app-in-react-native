import { useNavigation } from "@react-navigation/native";
import { StyleSheet,Image, Text, TouchableOpacity, View } from "react-native";
const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            {/* <TouchableOpacity style={styles.buttonStyle} 
            onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.buttonStyle} 
            onPress={() => navigation.navigate('Course')}>
                {/* <Text>Courses</Text> */}
                <Image 
                style={styles.iconStyle}
                source={{
                    uri:'https://img.icons8.com/stickers/90/000000/training.png',
                }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Students")}>
                <Image
                style={styles.iconStyle}
                source={{
                    uri: "https://img.icons8.com/stickers/100/000000/conference.png",
                }}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} 
            onPress={() => navigation.navigate('Contact')}>
                {/* <Text>Students</Text> */}
                <Image 
                style={styles.iconStyle}
                source={{
                    uri:'https://img.icons8.com/stickers/90/000000/phone-office.png',
                }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} 
            onPress={() => navigation.navigate('About')}>
                {/* <Text>About</Text> */}
                <Image 
                style={styles.iconStyle}
                source={{
                    uri:'https://img.icons8.com/stickers/90/000000/about.png',
                }} />
            </TouchableOpacity>
        </View>

        
    );
}
const styles = StyleSheet.create({
    menuContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    buttonStyle:{
        textTransform:'uppercase',
    },
    iconStyle:{
        width:'100%',
        height:50,
        aspectRatio:1
    }
});
export default Menu; 