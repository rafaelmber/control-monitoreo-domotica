from firebase.db import Database
from deviceManager import DeviceManager
from device import Device

def change_devices_status(event):
    print(event.event_type)
    if(event.event_type == 'put'):
        for id, v in event.data.items():
            new_device = Device(id,v['status'])
            device_manager.append_device(new_device)
        for device in device_manager.devices:
            device.set_status(device.status)
    elif(event.event_type == 'patch'):
        id_device = event.path.strip('/')
        device = device_manager.search_by_id(id_device)
        device.set_status(event.data['status'])

if(__name__ == '__main__'):
    db = Database()
    db.connect_database()
    device_manager = DeviceManager()
    devices_path = 'systems/system_1/devices/'
    db.setListener(devices_path,change_devices_status)