import express = require("express");

export interface IRouter {
    build(): express.Express;
}
