from firebase.db import Database
from deviceManager import DeviceManager
from device import Device

def changeDevicesStatus(event):
    print(event.event_type)
    if(event.event_type == 'put'):
        for id, v in event.data.items():
            device_manager.append_device(Device(id,v['status']))
        for device in device_manager.devices:
            device.set_status(device.status)
    if(event.event_type == 'patch'):
        id_device = event.path.strip('/')
        device = device_manager.search_by_id(id_device)
        device.set_status(event.data['status'])

if(__name__ == '__main__'):
    db = Database()
    db.connect_database()
    device_manager = DeviceManager()
    db.setListener('systems/system_1/devices/',changeDevicesStatus)