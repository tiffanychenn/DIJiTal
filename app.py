from flask import Flask, render_template, request, session, redirect, url_for, flash
from utils import database as db
from os import urandom
import sqlite3, hashlib

app=Flask(__name__)
app.secret_key = urandom(32)

@app.route('/')
def root():
	return render_template('home.html')

@app.route('/board')
def board():
	return render_template('board.html')

@app.route('/slots')
def slots():
	return render_template('slots.html')

@app.route('/oldGame', methods=["GET", "POST"])
def oldGame():
	game = int(request.form["game"])
	passcode = int(request.form["passcode"])
	boolean, passw = db.authenticate(game, passcode)
	if boolean == 0:
		flash("Game ID does not exist.")
	elif boolean:
		return str(boolean)
	elif passw:
		flash("Game has already passed ten turns.")
	else:
		flash("Game ID and passcode did not match.")
	return redirect(url_for("root"))

@app.route('/newGame', methods=["GET", "POST"])
def newGame():
	db.createGame()
	return redirect(url_for("board"))

if __name__ == '__main__':
	app.debug = True
	app.run()
