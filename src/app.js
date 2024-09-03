import express from 'express';             // const express = require('express')
import routes from './routes';             // const routes = require('./routes')

import './database';

class App {
    constructor() {
        this.app = express()

        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(express.json()) 
    }

    routes() {
        this.app.use(routes)
    }
}

export default new App().app;