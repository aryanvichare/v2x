import serial
import sys
import json
import os
import random
##from twilio.rest import Client
import time
import requests
import pygame

green = "green.png"
yellow = "yellow.png"
red = "red.png"
pygame.init()

screen = pygame.display.set_mode((750,400))
pygame.mouse.set_visible(False)
image = pygame.image.load(green)
image = pygame.transform.scale(image, (750,400))
screen.blit(image, (0 , 0))
pygame.display.update()

ser = serial.Serial('/dev/ttyACM0', 115200)

print ("connected to: " + ser.portstr)


while True:
    line = ser.readline()
    print("read a line")
    line =line.decode('utf8')
##    line = line [2:13]
##    line = line.replace(" ", "")
    print(line)

    distance = int(line)



##        print ("high reading")
##        screen = pygame.display.set_mode((750,400))
##        pygame.mouse.set_visible(False)
##        image = pygame.image.load(highimage)
##        image = pygame.transform.scale(image, (750,400))
##        screen.blit(image, (0 , 0))
##        pygame.display.update()
##
##        os.system ('sudo google_speech "Warning! unsafe air quality level detected. Please touch interface to commence purchase of filter."')
##
##        time.sleep(3)
##
##        screen = pygame.display.set_mode((750,400))
##        pygame.mouse.set_visible(False)
##        image = pygame.image.load(okname)
##        image = pygame.transform.scale(image, (750,400))
##        screen.blit(image, (0 , 0))
##        pygame.display.update()
##        ser.flush()
##    

    if distance > 10:
        print ("ok")
        screen = pygame.display.set_mode((750,400))
        pygame.mouse.set_visible(False)
        image = pygame.image.load(green)
        image = pygame.transform.scale(image, (750,400))
        screen.blit(image, (0 , 0))
        pygame.display.update()
        ##os.system('google_speech "ok "')
        ##os.system("sudo python rfidpirekognizer.py tmp.jpg")
        f = open("distance.txt", "w")
        f.write(str(distance))
        f.close()
        time.sleep(1)

        screen = pygame.display.set_mode((750,400))
        pygame.mouse.set_visible(False)
        image = pygame.image.load(green)
        image = pygame.transform.scale(image, (750,400))
        screen.blit(image, (0 , 0))
        pygame.display.update()
        ser.flush()

    if distance < 5:
        print ("too close")
        screen = pygame.display.set_mode((750,400))
        pygame.mouse.set_visible(False)
        image = pygame.image.load(red)
        image = pygame.transform.scale(image, (750,400))
        screen.blit(image, (0 , 0))
        pygame.display.update()
        ##os.system('google_speech "warning tailgating detected "')
        ##os.system("sudo python rfidpirekognizer.py tmp.jpg")
        f = open("distance.txt", "w")
        f.write(str(distance))
        f.close()
        time.sleep(1)

        screen = pygame.display.set_mode((750,400))
        pygame.mouse.set_visible(False)
        image = pygame.image.load(red)
        image = pygame.transform.scale(image, (750,400))
        screen.blit(image, (0 , 0))
        pygame.display.update()
        ser.flush()
        sys.exit(0)

    if distance > 5 and distance < 10:
        print ("danger")
        screen = pygame.display.set_mode((750,400))
        pygame.mouse.set_visible(False)
        image = pygame.image.load(stopimage)
        image = pygame.transform.scale(image, (750,400))
        screen.blit(image, (0 , 0))
        pygame.display.update()
        ##os.system('google_speech "warning tailgating detected "')
        f = open("distance.txt", "w")
        f.write(str(distance))
        f.close()
        time.sleep(1)

        screen = pygame.display.set_mode((750,400))
        pygame.mouse.set_visible(False)
        image = pygame.image.load(imagename)
        image = pygame.transform.scale(image, (750,400))
        screen.blit(image, (0 , 0))
        pygame.display.update()
        ser.flush()
        



ser.close()

    
