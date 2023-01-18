import { View, StyleSheet, ActivityIndicator } from "react-native";

export function Loading() {
    return (
        <View style={style.styleLoading}>
            <ActivityIndicator color="#7C3AED"/>
        </View>
    );
}

const style = StyleSheet.create({
    
styleLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#09090A'
    }
    
},

)