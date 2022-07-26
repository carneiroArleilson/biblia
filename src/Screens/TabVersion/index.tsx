import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { navigationInterface } from '../../interfaces/GlobalInterfaces';
import version from '../../Services/version';
import { selectVersion } from '../../store/version/Version.selectors';

const TabVersionScreen = ({ navigation }: navigationInterface) => {
  const [bibles, setBibles] = useState(false);
  const versionFromRedux = useSelector(selectVersion);

  const doBible = async () => {
    setBibles(true);
    const ioe = await version.versionList();
    setBibles(false);
    console.log('index', ioe);
  };
  return (
    <View>
      <ScrollView>
        <View style={{ marginTop: 100, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => doBible()}>
            {bibles ? <ActivityIndicator /> : <Text>testando</Text>}
          </TouchableOpacity>
          {versionFromRedux.data !== [] && (
            <View>
              {versionFromRedux.data.map((item) => (
                <Text>{item.language.script}</Text>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabVersionScreen;
