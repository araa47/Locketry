from flask import Flask, jsonify
from flask import abort
from flask import make_response
from flask import request
from flask import render_template
from flask_cors import CORS, cross_origin
from flask import send_from_directory
import os 

app = Flask(__name__)
CORS(app)



@app.route('/')
def getMain():
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
    print('favicon request')
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)
