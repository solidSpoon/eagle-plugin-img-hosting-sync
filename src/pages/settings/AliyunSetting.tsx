import TextInput from "../../components/TextInput.tsx";
import SettingStructure from "../../components/SettingStructure.tsx";
// import { useLocalStorage } from "@uidotdev/usehooks";
const AliyunSetting = () => {
    // const[accessKeyID, _setAccessKeyID] = useLocalStorage('OSS_ACCESS_KEY_ID', '');
    return (
        <SettingStructure
            changed={true}
            title={'Config your Aliyun OSS'}
            onSave={() => {
            }}
            onCancel={() => {
            }}
        >
            <TextInput title={'OSS_ACCESS_KEY_ID:'}/>
            <TextInput title={'OSS_ACCESS_KEY_SECRET:'}/>
        </SettingStructure>
    );
};

export default AliyunSetting;