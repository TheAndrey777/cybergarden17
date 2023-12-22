import express from "express";
import { IUser } from "../../interfaces/IUser";

declare global {
    namespace Express {
        interface User extends IUser {}
    }
}