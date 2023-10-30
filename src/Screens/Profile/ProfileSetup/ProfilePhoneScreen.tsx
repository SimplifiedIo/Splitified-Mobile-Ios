import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import InputWithIconFeatherComponent from '../../../Components/GeneralComponents/InputWithFeatherIcon';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../../Context/UserContext';

const ProfilePhoneScreen = () => {
  const navigation = useNavigation();

  const {ProfilePhone, setProfilePhone} = useContext(UserContext);

  return (
    <View>
      <Text>Phone Screen</Text>
      <InputWithIconFeatherComponent
        label={'Phone'}
        iconName={'phone'}
        setValue={ProfilePhone}
        updateValue={setProfilePhone}
        placeholder={'123-456-7890'}
        secure={false}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileLocationScreen');
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePhoneScreen;
