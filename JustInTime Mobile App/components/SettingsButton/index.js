import { TouchableOpacity, View, Image} from "react-native"

const SettingsButton = () => {
    return (
        <View style={{
                paddingLeft: 200
        }}>
            <TouchableOpacity onPress={()=>{alert("TEMP")}}>
                <Image source={require("./assets/SettingsGear.jpg")} style={{height: 45, width: 45}}/>
            </TouchableOpacity>
        </View>
    );
}

export default SettingsButton;