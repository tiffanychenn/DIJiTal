import sqlite3   #enable control of an sqlite database
import random    #used in createGame() function

def openDatabase():
    f="data/fake.db"
    db = sqlite3.connect(f) #open if f exists, otherwise create
    return db, db.cursor()    #facilitate db ops

def closeDatabase(db):
    db.commit() #save changes
    db.close()  #close database

def authenticate(game):
    # checks to see if an inputted old game is in the database and playable 
    # (i.e. less than ten turns have been played)
    db, c = openDatabase()
    cm = "SELECT turns FROM games WHERE passcode = %d;" %game
    x = c.execute(cm)
    boolean = False
    for i in x:
        boolean = True
        turns = int(i[0])
        print boolean
    if not boolean:
        return 2
    closeDatabase(db)
    return turns < 10

def createGame():
    passcode = int(random.random() * 10000)
    db, c = openDatabase()
    cm = "SELECT COUNT(*) FROM games;"
    for i in c.execute(cm):
        game = i[0]
    cm = 'INSERT INTO games VALUES (%d, 0, %d, 0)' %(game, passcode)
    c.execute(cm)
    cm = 'INSERT INTO players VALUES (%d, 0, 10, 0)' %game
    c.execute(cm)
    cm = 'INSERT INTO players VALUES (%d, 1, 10, 0)' %game
    c.execute(cm)
    closeDatabase(db)
    return passcode

# START ALL OUR GET FUNCTIONS

def getGameID(passcode):
    db, c = openDatabase()
    cm = 'SELECT gameID FROM games WHERE passcode = %d;' %(passcode)
    x = c.execute(cm)
    for i in x:
        idd = i[0]
    closeDatabase(db)
    return idd   

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

def getPlace(game):
    db, c = openDatabase()
    cm = 'SELECT place_in_turn FROM games WHERE gameID = %d;' %game
    x = c.execute(cm)
    for i in x:
        place = i
    closeDatabase(db)
    return place

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

def setTurns(game, turns):
    db, c = openDatabase()
    cm = 'UPDATE games SET turns = %d WHERE gameID = %d;' %(turns, game)
    c.execute(cm)
    closeDatabase(db)

def setPlace(game, place):
    db, c = openDatabase()
    cm = 'UPDATE games SET place_in_turn = %d WHERE gameID = %d;' %(place, game)
    c.execute(cm)
    closeDatabase(db)

# END ALL OUR SET FUNCTIONS