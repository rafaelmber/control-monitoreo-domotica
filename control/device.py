import paho.mqtt.publish as publish
from threading import Thread

class Device():
    def __init__(self,id:str, status: bool):
        self.id = id
        self._status= status
    
    def set_status(self,new_status: bool):
        if new_status == True:
            bool_status = 1
        else:
            bool_status = 0
        thr = Thread(target=self._send_message, args=(bool_status,))
        thr.start()
        self._status = new_status

    def _send_message(self, status: int):
        device_topic = f'systems/system_1/devices/{self.id}'
        publish.single(device_topic,str(status),client_id=f'CPU-{self.id}')
        print(f'ID: {self.id}, Status: {self._status}')