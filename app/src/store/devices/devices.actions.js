export const setDevices = (devices) => {
  return {
    type: 'SET_DEVICES',
    payload: devices,
  };
};

export const setDeviceStatus = (deviceId, status) => {
  return {
    type: 'SET_DEVICE_STATUS',
    payload: { id: deviceId, status: status },
  };
};

export const toggleDeviceStatus = (deviceId) => {
  return {
    type: 'TOGGLE_DEVICE_STATUS',
    payload: deviceId,
  };
};

export const addDevice = (device) => {
  return {
    type: 'ADD_DEVICE',
    payload: device,
  };
};

export const editDevice = (device) => {
  return {
    type: 'EDIT_DEVICE',
    payload: device,
  };
};

export const deleteDevice = (deviceId) => {
  return {
    type: 'DELET_DEVICE',
    payload: deviceId,
  };
};
