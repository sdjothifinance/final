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

const Receipt = (props) => (
  
  <Document>
    {/* {console.log(props) } */}
    {/* <img src={logo}></img> */}
<Page style={styles.body}>
<Image src={logo} style={styles.Image}/>
  <Text style={styles.title}>SRI DEIVA JOTHI FINANCE CENTER </Text>
  <Text style={styles.author}>No 5 ,jeeva nagar west ,kattabomman Nagar, sethur mettupatti,rajapalayam taluk, </Text>
  <Text  style={styles.author2}>virudhunagar district, tamilnadu-626121.</Text>
  <Text style={styles.subtitle}>
  Date:             {props.amd.startDate}
  </Text>
  <Text style={styles.subtitle}>
    UserId:           {props.amd.userId} 
  </Text>
  <Text style={styles.subtitle}>
    Name:             {props.amd.name}
  </Text>
  <Text style={styles.subtitle}>
    Amount:           {props.amd.amount}
  </Text>
  <Text style={styles.subtitle}>
    saving Amount:    {props.amd.savings}
  </Text>
  <Text style={styles.subtitle}>
    center:           {props.amd.center}
  </Text>
  <Text style={styles.subtitle}>
    Instalments:      {props.amd.weeks}
  </Text>
  <Text style={styles.subtitle}>
   phone:             {props.amd.phone}
  </Text>
  <Text style={styles.author}>
  உறுப்பினர் உறுதிமொழி:
  </Text>
  <Text style={styles.author}>ஸ்ரீ தெய்வ ஜோதி எங்கள் அமைப்பு
இந்த அமைப்பில் கடன் பெறுவதன் மூலம் எங்கள் வாழ்வாதாரத்தினை மேம்படுத்துவோம்.
வாரம் தவறாமல் தவணை தொகையை செலுத்துவோம்.</Text>
<Text style={styles.author}>
குறிக்கோள்
</Text>
<Text style={styles.author}>
ஒன்றிணைந்து சமுதாயத்தில் நிலையான பொருளாதாரத்தை அடைய செய்தல்
</Text>
<Text style={styles.author}>
நோக்கம்
</Text>
<Text style={styles.author}>
சிறு கடன் திட்டத்தின் மூலம் கிராமப்புற மற்றும் நகர்ப்புற பெண்களின் குடும்ப முன்னேற்றம் மற்றும் தொழில் மேம்பாட்டினை பெற்றுத்தருதல்
</Text>
  
  <Text style={styles.subtitle3}>
   Customer Signature                   Signature
  </Text>
 </Page>
</Document>
);
export default Receipt;






Font.register({
family: 'Noto Sans Tamil',
src: NotoSansTamil
});