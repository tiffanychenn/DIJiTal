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
    mx = session["pixels"][str(db.getPosition(session["id"],0)[0]+ 1)][1]
    my = session["pixels"][str(db.getPosition(session["id"],0)[0]+ 1)][0]
    lx = session["pixels"][str(db.getPosition(session["id"],1)[0]+ 1)][1]
    ly = session["pixels"][str(db.getPosition(session["id"],1)[0]+ 1)][0]
    posl = "pos" + str(db.getPosition(session["id"],1)[0]+ 1)
    coinsm = db.getCoins(session["id"],0)[0]
    coinsl = db.getCoins(session["id"],1)[0]
    turns = db.getTurns(session["id"])[0]
    if turns == 10:
        return redirect(url_for("results"))
    return render_template('board.html', mx = mx, my = my, lx = lx, ly = ly, pos_mario = posm, pos_luigi = posl, posm = posm, posl = posl, coinsm = coinsm, coinsl = coinsl, passcode = session["passcode"], turns = turns)

@app.route('/slots')
def slots():
    try:
        spotsdict = request.args.to_dict()
        print spotsdict, session["id"]
        posm = spotsdict["player1"]
        posl = spotsdict["player2"]
        coinsm = spotsdict["coins1"]
        coinsl = spotsdict["coins2"]
        db.setPosition(session["id"],0,(db.getPosition(session["id"],0)[0] + int(posm)) % 22)
        db.setPosition(session["id"],1,(db.getPosition(session["id"],1)[0] + int(posl)) % 22)
        db.setCoins(session["id"], 0, db.getCoins(session["id"], 0)[0] + int(coinsm))
        db.setCoins(session["id"], 1, db.getCoins(session["id"], 1)[0] + int(coinsl))
    except:
        pass
    db.setPlace(session["id"],1)
    coinsm = db.getCoins(session["id"],0)[0]
    coinsl = db.getCoins(session["id"],1)[0]
    turns = db.getTurns(session["id"])[0]
    return render_template('slots.html', coinsm = coinsm, coinsl = coinsl, passcode = session["passcode"], turns = turns)

@app.route('/memm')
def memm():
    '''spotsdict = request.args.to_dict()
    posm = spotsdict["player1"]
    posl = spotsdict["player2"]'''
    return render_template('memmatch.html')

@app.route('/dino')
def dino():
    try:
        spotsdict = request.args.to_dict()
        print spotsdict, session["id"]
        posm = spotsdict["player1"]
        posl = spotsdict["player2"]
        coinsm = spotsdict["coins1"]
        coinsl = spotsdict["coins2"]
        db.setPosition(session["id"],0,(db.getPosition(session["id"],0)[0] + int(posm)) % 22)
        db.setPosition(session["id"],1,(db.getPosition(session["id"],1)[0] + int(posl)) % 22)
        db.setCoins(session["id"], 0, db.getCoins(session["id"], 0)[0] + int(coinsm))
        db.setCoins(session["id"], 1, db.getCoins(session["id"], 1)[0] + int(coinsl))
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
    winner = 0
    mario = db.getCoins(session["id"], 0)[0]
    luigi = db.getCoins(session["id"], 1)[0]
    if luigi > mario:
        winner = 1
    if luigi == mario:
        winner = 2
    return render_template('results.html', winner = winner, coinsm = mario, coinsl = luigi)

@app.route('/oldGame', methods=["GET", "POST"])
def oldGame():
    game = int(request.form["game"])
    boolean = db.authenticate(game)
    if boolean == 2:
        flash("Game ID does not exist.")
    elif boolean:
        session["id"] = db.getGameID(game)
        session["passcode"] = game
        session["pixels"] = {"1": [0, 0], "2": [0, 150], "3": [0, 300], "4": [0, 450], "5": [0, 600], "6": [0, 750], "7": [0, 900], "8": [100, 900], "9": [200, 900], "10": [300, 900], "11": [400, 900], "12": [500, 900], "13": [500, 750], "14": [500, 600], "15": [500, 450], "16": [500, 300], "17": [500, 150], "18": [500, 0], "19": [400, 0], "20": [300, 0], "21": [200, 0], "22": [100, 0]}
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
    session["pixels"] = {"1": [0, 0], "2": [0, 150], "3": [0, 300], "4": [0, 450], "5": [0, 600], "6": [0, 750], "7": [0, 900], "8": [100, 900], "9": [200, 900], "10": [300, 900], "11": [400, 900], "12": [500, 900], "13": [500, 750], "14": [500, 600], "15": [500, 450], "16": [500, 300], "17": [500, 150], "18": [500, 0], "19": [400, 0], "20": [300, 0], "21": [200, 0], "22": [100, 0]}
    return redirect(url_for("board"))

if __name__ == '__main__':
    app.debug = True
    app.run()
