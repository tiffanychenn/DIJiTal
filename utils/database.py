import sqlite3   #enable control of an sqlite database
import random    #used in createGame() function

def openDatabase():
    f="data/fake.db"
    db = sqlite3.connect(f) #open if f exists, otherwise create
    return db, db.cursor()    #facilitate db ops

def closeDatabase(db):
    db.commit() #save changes
    db.close()  #close database

def authenticate(game, passw):
    # checks to see if an inputted old game is in the database and playable 
    # (i.e. less than ten turns have been played)
    db, c = openDatabase()
    cm = "SELECT passcode FROM games WHERE gameID = %d;" %game
    x = c.execute(cm)
    for i in x:
        passcode = int(i[0])
        print passcode
    cm = "SELECT turns FROM games WHERE gameID = %d;" %game
    x = c.execute(cm)
    for i in x:
        turns = int(i[0])
        print turns
    closeDatabase(db)
    return (passw == passcode) & (turns < 10)

def createGame():
    db, c = openDatabase()
    cm = "SELECT COUNT(*) FROM games;"
    for i in c.execute(cm):
        game = i[0]
    cm = 'INSERT INTO games VALUES (%d, 0, %d)' %(game, int(random.random() * 10000))
    c.execute(cm)
    cm = 'INSERT INTO players VALUES (%d, 0, 0, 0)' %game
    c.execute(cm)
    cm = 'INSERT INTO players VALUES (%d, 1, 0, 0)' %game
    c.execute(cm)
    closeDatabase(db)

# START ALL OUR GET FUNCTIONS

def getPosition(game, player):
    db, c = openDatabase()
    cm = 'SELECT position FROM players WHERE gameID = %d AND playerID = %d;' %(game, player)
    x = c.execute(cm)
    for i in x:
        position = i
    closeDatabase(db)
    return position

def getCoins(game, player):
    db, c = openDatabase()
    cm = 'SELECT coins FROM players WHERE gameID = %d AND playerID = %d;' %(game, player)
    x = c.execute(cm)
    for i in x:
        coins = i
    closeDatabase(db)
    return coins

def getTurns(game):
    db, c = openDatabase()
    cm = 'SELECT turns FROM games WHERE gameID = %d;' %game
    x = c.execute(cm)
    for i in x:
        turns = i
    closeDatabase(db)
    return turns

# END ALL OUR GET FUNCTIONS

# START ALL OUR SET FUNCTIONS

def setCoins(game, player, coins):
    db, c = openDatabase()
    cm = 'UPDATE players SET coins = %d WHERE gameID = %d AND playerID = %d;' %(coins, game, player)
    c.execute(cm)
    closeDatabase(db)

def setPosition(game, player, position):
    db, c = openDatabase()
    cm = 'UPDATE players SET position = %d WHERE gameID = %d AND playerID = %d;' %(position, game, player)
    c.execute(cm)
    closeDatabase(db)

def setCoins(game, turns):
    db, c = openDatabase()
    cm = 'UPDATE games SET turns = %d WHERE gameID = %d;' %(turns, game)
    c.execute(cm)
    closeDatabase(db)

# END ALL OUR SET FUNCTIONS