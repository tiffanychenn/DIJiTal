from flask import Flask, render_template, request, session, redirect, url_for, flash
from utils import database as db
from os import urandom
import sqlite3, hashlib

app=Flask(__name__)
app.secret_key = urandom(32)

@app.route('/')
def root():
	try:
		session.pop("id")
	except:
		pass
	return render_template('home.html')

@app.route('/board')
def board():
    posm = "pos" + str(db.getPosition(session["id"],0)[0]+ 1)
    posl = "pos" + str(db.getPosition(session["id"],1)[0]+ 1)
    return render_template('board.html', pos_mario = posm, pos_luigi = posl)

@app.route('/slots')
def slots():
	spotsdict = request.args.to_dict()
	posm = spotsdict["player1"]
	posl = spotsdict["player2"]
	db.setPosition(session["id"],0,db.getPosition(session["id"],0)[0] + int(posm))
	db.setPosition(session["id"],1,db.getPosition(session["id"],1)[0] + int(posl))
	return render_template('slots.html')

@app.route('/memm')
def memm():
	spotsdict = request.args.to_dict()
	posm = spotsdict["player1"]
	posl = spotsdict["player2"]
	return render_template('memmatch.html')

@app.route('/dino')
def dino():
	spotsdict = request.args.to_dict()
	posm = spotsdict["player1"]
	posl = spotsdict["player2"]
	db.setPosition(session["id"],0,db.getPosition(session["id"],0)[0] + int(posm))
	db.setPosition(session["id"],1,db.getPosition(session["id"],1)[0] + int(posl))
	return render_template('dino.html')

@app.route('/results')
def results():
	return render_template('results.html')

@app.route('/oldGame', methods=["GET", "POST"])
def oldGame():
	game = int(request.form["game"])
	boolean = db.authenticate(game)
	if boolean == 2:
		flash("Game ID does not exist.")
	elif boolean:
		session["id"] = db.getGameID(game);
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
