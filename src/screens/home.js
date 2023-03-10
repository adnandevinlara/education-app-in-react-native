import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Menu from './component/menu';
const Home = (props) => {
    let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
            <Image  style={styles.headerImage}   source={require('../../assets/logo.jpeg')} />
            <Text style={styles.mainHeader}>Welcome to</Text>
            <Text style={[styles.mainHeader,
              {
                fontSize:30,
                color:"#4c5dab",
                marginTop:0
              }]}>React {props.title}</Text>
              <Text style={styles.paraStyle}>{description}</Text>
        </View>

        <View style={styles.menuStyle}>
          <View style={styles.lineStyle}></View>
          <Menu />
          <View style={[styles.lineStyle,{
            marginVertical:10
          }]}></View>
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      height:'100%',
      width:'100%',
      // flex:1,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      // textAlign:'center' ,
      // alignItems:'center',
      paddingHorizontal:20,
      // backgroundColor:'red',
    },
    homeTop:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:10
    },  
    headerImage: {
      height:'50%',
      width:'100%',
      aspectRatio:1,
      display:'flex',
      // flex:1,
      alignItems:'stretch',
      marginTop:20,
      marginBottom:20,
      borderRadius:26,
      // backgroundColor: 'green',
      
    },
    mainHeader: {
      fontSize:30,
      color:'#344055',
      textTransform:'uppercase'
    },
    paraStyle: {
      textAlign:'left',
      fontSize:18,
      color:'#7d7d7d',
      marginTop:20,
      lineHeight:28
    },
    // menu style
    lineStyle:{
      marginBottom:20,
      borderColor:'#4c5dab',
      borderWidth:0.5
    }
  });

export default Home;