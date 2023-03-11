import React from 'react';
import { Page, Text, View, Document, StyleSheet ,Font,Image} from '@react-pdf/renderer';
import logo from '../assets/logo.png'
import NotoSansTamil from '../assets/tamil.ttf'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  // body: {
  //   paddingTop: 35,
  //   paddingBottom: 65,
  //   paddingHorizontal: 35,
  // },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Noto Sans Tamil'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    margin: 5,
    fontFamily: 'Noto Sans Tamil'
  },
  author2: {
    fontSize: 12,
    textAlign: 'center',
    margin: 5,
    marginBottom:12,
    fontFamily: 'Noto Sans Tamil'
  },
  subtitle2: {
    fontSize: 18,
    textAlign: 'right',
     margin: 12,
    fontFamily: 'Noto Sans Tamil'
  },
  subtitle3: {
    fontSize: 18,
    textAlign: 'right',
     margin: 12,
     top:36,
    fontFamily: 'Noto Sans Tamil'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
     marginLeft: 120,
     marginBottom:5,
    fontFamily: 'Noto Sans Tamil'
  },
  Image:{
    marginVertical: 15,
    marginHorizontal: 200,
    width:200,
    height:200,
    justifyContent:'center'
  }

});

const Receipt2 = (props) => (
  
  <Document>
    {/* {console.log(props) } */}
    {/* <img src={logo}></img> */}
<Page style={styles.body}>
<Image src={logo} style={styles.Image}/>
  <Text style={styles.title}>SRI DEIVA JOTHI FINANCE CENTER </Text>
  <Text style={styles.author}>No 5 ,jeeva nagar west ,kattabomman Nagar, sethur mettupatti,rajapalayam taluk, </Text>
  <Text  style={styles.author2}>virudhunagar district, tamilnadu-626121.</Text>
  <Text style={styles.subtitle}>
  Date:             {props.date}
  </Text>
  <Text style={styles.subtitle}>
    UserId:           {props.id} 
  </Text>
  <Text style={styles.subtitle}>
    Name:             {props.name}
  </Text>
  <Text style={styles.subtitle}>
    Amount:           {props.ins}
  </Text>
  <Text style={styles.subtitle}>
    saving Amount:    {props.sav}
  </Text>
  <Text style={styles.subtitle}>
    collector:           {props.who}
  </Text>
  
  <Text style={styles.subtitle3}>
   By Sri deiva jothi finance
  </Text>
 </Page>
</Document>
);
export default Receipt2;






Font.register({
family: 'Noto Sans Tamil',
src: NotoSansTamil
});