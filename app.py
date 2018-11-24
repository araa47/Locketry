# Created by: Akshay 24/11/2018 


# Import Statements
from flask import Flask, jsonify
from flask import render_template
from flask_cors import CORS, cross_origin
from flask import send_from_directory
from flask_sslify import SSLify
import os 
from dotenv import load_dotenv, find_dotenv



env = os.getenv("ENVIRONMENT")
# Create instance of the Flask class to our web app 
app = Flask(__name__)
if env == "production":
	# force ssl redirect
	sslify = SSLify(app)

# Enable Cross Origin Resource Sharing 
CORS(app)

# Return the index.html page 
@app.route('/')
def getMain():
    return render_template("index.html")

# Return favcon.ico 
@app.route('/favicon.ico')
def favicon():
    print('favicon request')
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


# Run in threaded mode and port 5000 locally with debug mode on 
if __name__ == '__main__':
    if env == "dev":
    	app.run(host='0.0.0.0', port=5000, debug=True)
    else:
    	app.run(host='0.0.0.0', threaded=True)
    	
