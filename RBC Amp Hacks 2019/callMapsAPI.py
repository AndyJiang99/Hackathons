# importing the requests library 
import requests 
from flask import Flask, request
import re
import string
import json
import functools
from flask_cors import CORS
import polyline
import ast

app = Flask(__name__)
CORS(app)

@app.route("/getPaths")
def getPaths():
    URL = "https://maps.googleapis.com/maps/api/directions/json?origin=Brooklyn&destination=Queens&mode=bicycling&alternatives=true&key="+API_KEY
    r = requests.get(URL)
    data = r.json()
    return (str(data))

@app.route("/getAddress",methods=['POST'])
def getAddress():
    address = request.form['initialAddress']
    address = re.sub('\s', '+', address)
    # print (address)

    URL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + API_KEY

    r = requests.get(URL)
    data = r.json()
    
    lat = data["results"][0]["geometry"]["location"]["lat"]
    lon = data["results"][0]["geometry"]["location"]["lng"]

    return str({"lat":lat,"lon":lon})

@app.route("/getAlternatives",methods=['POST'])
def getAlternatives():
    toAddress = request.form['initialAddress']
    fromAddress = request.form['finalAddress']

    URL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + fromAddress + "&key=" + API_KEY
    r = requests.get(URL)
    data = r.json()

    fromLat = data["results"][0]["geometry"]["location"]["lat"]
    fromLon = data["results"][0]["geometry"]["location"]["lng"]


    URL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + toAddress + "&key=" + API_KEY
    r = requests.get(URL)
    data = r.json()

    toLat = data["results"][0]["geometry"]["location"]["lat"]
    toLon = data["results"][0]["geometry"]["location"]["lng"]


    URL = "https://maps.googleapis.com/maps/api/directions/json?origin="+str(fromLat)+"," + str(fromLon) + "&destination=" + str(toLat) + "," +str(toLon) + "&&alternatives=true&mode=bicycling&sensor=false&key=" + API_KEY
    r = requests.get(URL)
    data = r.json()
    print (data)

    # return str(data["routes"][0]["legs"][0]["steps"][0]["polyline"]["points"])


    
    value =  (json.dumps(data))
    # print ({"test":value})

    return value

@app.route("/coordinates",methods=['POST'])
def coordinates():
    string = request.form['polystring']
    print (polyline.decode(string))
    return ({"value": polyline.decode(string)})

if __name__ == "__main__":
    app.run()