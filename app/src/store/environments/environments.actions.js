export const setEnvironments = (environment) => {
  return {
    type: 'SET_ENVIRONMENTS',
    payload: environment,
  };
};

export const addEnvironment = (environment) => {
  return {
    type: 'ADD_ENVIRONMENT',
    payload: environment,
  };
};

export const editEnvironment = (editedEnvironment) => {
  return {
    type: 'EDIT_ENVIRONMENT',
    payload: editedEnvironment,
  };
};

export const deleteEnvironment = (environmentId) => {
  return {
    type: 'DELETE_ENVIRONMENT',
    payload: environmentId,
  };
};

export const deleteDeviceInEnvironments = (deviceId) => {
  return {
    type: 'DELETE_DEVICE_IN_ENVIRONMENTS',
    payload: deviceId,
  };
};
