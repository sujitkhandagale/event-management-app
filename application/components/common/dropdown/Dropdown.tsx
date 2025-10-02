import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

export interface DropdownOption {
  label: string;
  onPress: (event?: GestureResponderEvent) => void;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  button: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  button,
}) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (action: DropdownOption['onPress']) => {
    action();
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          return setVisible(true);
        }}
      >
        {button ? (
          button
        ) : (
          <Text style={styles.dropdownText}>{placeholder}</Text>
        )}
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          return setVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => {
            return setVisible(false);
          }}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={(e) => {
                      return handleSelect(item.onPress);
                    }}
                  >
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    marginHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    maxHeight: 300,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
