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




if __name__ == '__main__':
	app.debug = True
	app.run()
