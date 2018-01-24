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
        session.pop("passcode")
    except:
        pass
    return render_template('home.html')

@app.route('/board')
def board():
    posm = "pos" + str(db.getPosition(session["id"],0)[0]+ 1)
    posl = "pos" + str(db.getPosition(session["id"],1)[0]+ 1)
    coinsm = db.getCoins(session["id"],0)[0]
    coinsl = db.getCoins(session["id"],1)[0]
    turns = db.getTurns(session["id"])[0]
    return render_template('board.html', pos_mario = posm, pos_luigi = posl, posm = posm, posl = posl, coinsm = coinsm, coinsl = coinsl, passcode = session["passcode"], turns = turns)

@app.route('/slots')
def slots():
    try:
        spotsdict = request.args.to_dict()
        posm = spotsdict["player1"]
        posl = spotsdict["player2"]
        db.setPosition(session["id"],0,db.getPosition(session["id"],0)[0] + int(posm))
        db.setPosition(session["id"],1,db.getPosition(session["id"],1)[0] + int(posl))
    except:
        pass
    db.setPlace(session["id"],1)
    coinsm = db.getCoins(session["id"],0)[0]
    coinsl = db.getCoins(session["id"],1)[0]
    turns = db.getTurns(session["id"])[0]
    return render_template('slots.html', coinsm = coinsm, coinsl = coinsl, passcode = session["passcode"], turns = turns)

@app.route('/memm')
def memm():
<<<<<<< HEAD
	'''spotsdict = request.args.to_dict()
	posm = spotsdict["player1"]
	posl = spotsdict["player2"]'''
	return render_template('memmatch.html')
=======
    '''spotsdict = request.args.to_dict()
    posm = spotsdict["player1"]
    posl = spotsdict["player2"]'''
    return render_template('memmatch.html')
>>>>>>> cd8a18436d0fc388d3aadae2b64ac378a77a09c0

@app.route('/dino')
def dino():
    try:
        spotsdict = request.args.to_dict()
        posm = spotsdict["player1"]
        posl = spotsdict["player2"]
        db.setPosition(session["id"],0,db.getPosition(session["id"],0)[0] + int(posm))
        db.setPosition(session["id"],1,db.getPosition(session["id"],1)[0] + int(posl))
    except:
        pass
    db.setPlace(session["id"],2)
    coinsm = db.getCoins(session["id"],0)[0]
    coinsl = db.getCoins(session["id"],1)[0]
    turns = db.getTurns(session["id"])[0]
    print turns
    return render_template('dino.html', coinsm = coinsm, coinsl = coinsl, passcode = session["passcode"], turns = turns)

@app.route('/update')
def update():
    whowon = request.args.to_dict()
    winner = whowon["winner"]
    if int(winner) == 0:
        db.setCoins(session["id"], 0, db.getCoins(session["id"], 0)[0] + 10)
    elif int(winner) == 1:
        db.setCoins(session["id"], 1, db.getCoins(session["id"], 1)[0] + 10)
    db.setTurns(session["id"],db.getTurns(session["id"])[0] + 1)
    db.setPlace(session["id"],0)
    return redirect(url_for('board'))

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
        session["id"] = db.getGameID(game)
        session["passcode"] = game
        where = db.getPlace(session["id"])[0]
        if where == 0:
            return redirect(url_for("board"))
        elif where == 1:
            return redirect(url_for("slots"))
        else:
            return redirect(url_for("dino"))
    else:
        flash("Game has already passed ten turns.")
    return redirect(url_for("root"))

@app.route('/newGame', methods=["GET", "POST"])
def newGame():
    game = db.createGame()
    session["id"] = db.getGameID(game)
    session["passcode"] = game
    return redirect(url_for("board"))

if __name__ == '__main__':
    app.debug = True
    app.run()
