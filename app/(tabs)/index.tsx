// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button
} from 'react-native';

import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

// Dummy Data
const emails = [
  {
    id: '1',
    name: 'ProvidusBank',
    subject: 'MOBILE BANKING LOG IN CONFIRMAT...',
    preview: 'Dear ORUNTA CHIGOZIE NDU...',
    date: 'Yesterday',
  },
  {
    id: '2',
    name: 'Manuel Inyang',
    subject: 'UPDATE ON APPLICATION',
    preview: 'Dear Chigozie, We appreciate...',
    date: 'Tuesday',
  },
  {
    id: '3',
    name: 'Laserderm Clinics',
    subject: 'Eid Mubarak from all of us...',
    preview: 'Wishing our Muslim clients...',
    date: 'Monday',
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.emailItem}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>
      <View style={styles.emailContent}>
        <Text style={styles.emailSender}>{item.name}</Text>
        <Text style={styles.emailSubject}>{item.subject}</Text>
        <Text style={styles.emailPreview}>{item.preview}</Text>
      </View>
      <Text style={styles.emailDate}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Inbox</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <TextInput placeholder="Search" style={styles.search} />

  {/* Tabs */}
      <View style={styles.tabs}>
        <View style={styles.tabActive}>
          <FontAwesome name="user" size={16} color="white" fill="black"/>
          <Text style={styles.tab} style={{color: 'white'}}>Primary</Text>
        </View>
        <MaterialIcons style={styles.tab} name="shopping-cart" size={20} color="#888" fill="black"/>
        <Text style={styles.tab}>Social</Text>
      </View>

      {/* Email List */}
      <FlatList
        data={emails}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Status */}
      <View style={styles.bottomStatus}>
        <Text>Updated Just Now</Text>
      </View>

      {/* Floating Compose Button */}
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="edit" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 8,
  },
  tab: {
    color: '#888',
    padding: 10,
  },
  tabActive: {
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 6,
    textAlign: 'center',
    alignItems: 'center',
    width: 100,
    color: 'white',
    backgroundColor: '#007bff',
    fontWeight: 'bold',
  },
  search: {
    margin: 16,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  emailItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    alignItems: 'flex-start',
  },
  avatar: {
    backgroundColor: '#ddd',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  emailContent: {
    flex: 1,
  },
  emailSender: {
    fontWeight: 'bold',
  },
  emailSubject: {
    color: '#555',
  },
  emailPreview: {
    color: '#999',
    fontSize: 12,
  },
  emailDate: {
    fontSize: 12,
    color: '#999',
    paddingTop: 5,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 30,
    elevation: 5,
  },
  bottomStatus: {
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
});
