/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
 
 export default function LogIn(props) {
   return (
     <View style={[styles.group, styles.group_layout]}>
       <View style={[styles.flex, styles.flex_layout]}>
         <View style={styles.flex_row}>
           <ImageBackground
             style={[styles.img, styles.img_layout]}
            //  source={require('../assets/8dda59c1f65a5fb2d0ff72a90d20647d.png')}
           />
         </View>
         <View style={styles.flex_row}>
           <View style={[styles.log_in_box, styles.log_in_box_layout]}>
             <Text style={styles.log_in} ellipsizeMode={'clip'}>
               {'Log in'}
             </Text>
           </View>
         </View>
         <View style={styles.flex_row}>
           <View style={[styles.highlights_wrap, styles.highlights_wrap_layout]}>
             <View style={[styles.rect, styles.rect_layout]} />
           </View>
         </View>
         <View style={styles.flex_row}>
           <View style={[styles.group1, styles.group1_layout]}>
             <View style={[styles.rect, styles.rect_layout]} />
           </View>
         </View>
         <View style={styles.flex_row}>
           <View style={[styles.log_in_wrap, styles.log_in_wrap_layout]}>
             <View style={[styles.rect2, styles.rect2_layout]} />
             <View style={[styles.log_in_box1, styles.log_in_box1_layout]}>
               <Text style={styles.log_in1} ellipsizeMode={'clip'}>
                 {'Log in'}
               </Text>
             </View>
           </View>
         </View>
       </View>
     </View>
   );
 }
 
 LogIn.inStorybook = true;
 LogIn.fitScreen = false;
 LogIn.scrollHeight = 812;
 
 const styles = StyleSheet.create({
   group: {
     width: '100%',
     backgroundColor: '#ffffffff',
     overflow: 'hidden'
   },
   group_layout: {
     overflow: 'hidden',
     marginTop: 0,
     marginBottom: 0,
     minHeight: 812,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   flex: {},
   flex_layout: {
     overflow: 'visible',
     marginTop: 44,
     marginBottom: 8,
     marginLeft: 15,
     flexGrow: 1,
     marginRight: 16
   },
   flex_row: {
     flexGrow: 0,
     flexShrink: 1
   },
   img: {
     resizeMode: 'contain'
   },
   img_layout: {
     marginTop: 0,
     height: 21,
     marginBottom: 0,
     marginLeft: 0,
     width: 12,
     minWidth: 12
   },
   log_in_box_layout: {
     marginTop: 39,
     marginBottom: 0,
     marginLeft: 1,
     flexGrow: 1,
     marginRight: 1
   },
   log_in_box: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'flex-start'
   },
   highlights_wrap: {
     width: '100%'
   },
   highlights_wrap_layout: {
     overflow: 'visible',
     marginTop: 29,
     marginBottom: 0,
     minHeight: 52,
     marginLeft: 1,
     flexGrow: 1,
     marginRight: 0
   },
   rect: {
     width: '100%',
     backgroundColor: '#ffffffff',
     borderStyle: 'solid',
     borderColor: '#000000ff',
     borderWidth: 2
   },
   rect_layout: {
     marginTop: 0,
     height: 52,
     marginBottom: 0,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   group1: {
     width: '100%'
   },
   group1_layout: {
     overflow: 'visible',
     marginTop: 16,
     marginBottom: 0,
     minHeight: 52,
     marginLeft: 1,
     flexGrow: 1,
     marginRight: 0
   },
   log_in_wrap: {
     width: '100%'
   },
   log_in_wrap_layout: {
     overflow: 'visible',
     marginTop: 16,
     marginBottom: 0,
     minHeight: 52,
     marginLeft: 1,
     flexGrow: 1,
     marginRight: 0
   },
   rect2: {
     width: '100%',
     backgroundColor: '#04a779ff',
     borderRadius: 6,
     borderStyle: 'solid',
     borderColor: '#04a779ff',
     borderWidth: 2
   },
   rect2_layout: {
     position: 'absolute',
     top: 0,
     marginTop: 0,
     height: 52,
     marginBottom: 0,
     left: 0,
     flexGrow: 1,
     right: 0
   },
   log_in_box1_layout: {
     marginTop: 19,
     marginBottom: 17,
     width: 43,
     minWidth: 43,
     marginLeft: 'auto',
     marginRight: 'auto'
   },
   log_in_box1: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'
   }
 });
 