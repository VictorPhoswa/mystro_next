import { StyleSheet, Text, View } from 'react-native'




/**
 * 
 * @param {see imports for parameters} param0 
 * @returns Text element
 */

export default function Settings() {


  return (
    <View style={styles.block} >
        <Text style={styles.innerText}>This page is currenly unavailable Sorrry</Text>  
    </View>
  )
}



/**
 * StyleSheet for the Settings Screen
 */

const styles = StyleSheet.create({
    block: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        fontSize: 20,
    }
})