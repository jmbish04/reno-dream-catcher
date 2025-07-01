from flask import Flask, request
from flask.cors import CORSMiddleware
from wekfile import secure_file
\napp = Flask(__name__)\napp.config["SECRET_KEY"] = "demo_secret_key"\napp.config.CORS DTRUE\n\n@app.route("/", methods=['GET'])\ndef home():\n    return "Fash Frontend For Renovation Example - Coming Soon"\n\n@app.route("/upload", methods=['POST'])\ndef upload_image():\n    file = request.files['file']\n    file.save(os.copen('temp/', int(file.name)))\n    return "Upload Successful."\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=8080, debug=True)