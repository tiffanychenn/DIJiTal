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
        #roll = request.form['num']
        #^^ Need to be able to get the info about how many rolls from javascript. then, I'll do db.setPosition(0,0,db.getPosition(0,0) + roll) and db.setPosition(0,1,db.getPosition(0,1) + roll
        positioning = "<div id='player2'> </div> <div id='player1'></div>"
        pos = "pos" + str(db.getPosition(0,0)[0]+ 1)
        return render_template('board.html', position0 = pos, pos1 = positioning)

@app.route('/slots')
def slots():
	return render_template('slots.html')

@app.route('/memm')
def memm():
	return render_template('memmatch.html')

@app.route('/oldGame', methods=["GET", "POST"])
def oldGame():
	game = int(request.form["game"])
	boolean = db.authenticate(game)
	if boolean == 2:
		flash("Game ID does not exist.")
	elif boolean:
		return redirect(url_for("board"))
	else:
		flash("Game has already passed ten turns.")
	return redirect(url_for("root"))

@app.route('/newGame', methods=["GET", "POST"])
def newGame():
	db.createGame()
	return redirect(url_for("board"))

if __name__ == '__main__':
	app.debug = True
	app.run()
