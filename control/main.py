from firebase.db import connect_database, getData, setListener
from firebase_admin import db

from deviceManager import DeviceManager
from device import Device

def changeDevicesStatus(event):
    print(event.event_type)
    if(event.event_type == 'put'):
        for id, v in event.data.items():
            device_manager.append_device(Device(id,v['status']))
        for device in device_manager.devices:
            print(f'ID: {device.id} Status:{device.status}')
    if(event.event_type == 'patch'):
        id_device = event.path.strip('/')
        device_manager.change_status_by_id(id_device,event.data['status'])



if(__name__ == '__main__'):
    connect_database()
    device_manager = DeviceManager()
    #print(getData('devices/'))
    #print(getData('devices/device_1/status'))
    setListener('devices/',changeDevicesStatus)