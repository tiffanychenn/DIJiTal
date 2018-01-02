from flask import Flask, render_template, request, session, redirect, url_for

import os,sqlite3, hashlib

app=Flask(__name__)

@app.route('/')
def root():
	return render_template('home.html')

@app.route('/board')
def board():

@app.route('/slots')
def slots():
	return render_template('slots.html')

@app.route('/oldGame')
def oldGame():
	game = request.form["game"]
	passcode = request.form["passcode"]
	return redirect(url_for("board"))

if __name__ == '__main__':
	app.debug = True
	app.run()
