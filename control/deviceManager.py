from device import Device
class DeviceManager:
    def __init__(self):
        self.devices: list = []

    def append_device(self,device: Device):
        self.devices.append(device)

    def search_by_id(self,id:str)-> Device:
        for device in self.devices:
            if(device.id == id):
                return device