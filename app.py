from flask import Flask, render_template, request, session, redirect, url_for
from utils import database as db
import os,sqlite3, hashlib

app=Flask(__name__)

@app.route('/')
def root():
	return render_template('home.html')

@app.route('/board')
def board():
	return render_template('base.html')

@app.route('/slots')
def slots():
	return render_template('slots.html')

@app.route('/oldGame', methods=["GET", "POST"])
def oldGame():
	game = int(request.form["game"])
	passcode = int(request.form["passcode"])
	return str(db.authenticate(game, passcode))

@app.route('/newGame', methods=["GET", "POST"])
def newGame():
	db.createGame()
	return redirect(url_for("board"))

if __name__ == '__main__':
	app.debug = True
	app.run()
