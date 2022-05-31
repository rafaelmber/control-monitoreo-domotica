from device import Device
class DeviceManager:
    def __init__(self):
        self.devices: list[Device] = []

    def append_device(self,device: Device):
        self.devices.append(device)

    def remove_device(self, device_id:str):
        new_list_devices = []
        for device in self.devices:
            if (device.id != device_id):
                new_list_devices.append(device)
        self.devices = new_list_devices

    def search_by_id(self,id:str)-> Device:
        for device in self.devices:
            if(device.id == id):
                return device