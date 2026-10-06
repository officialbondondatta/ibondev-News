import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoURI = process.env.MONGODB_CONNECTION as string
if (!mongoURI) {
    throw new Error("Mongodb database connection issue");
}
const client = new MongoClient(mongoURI);
const db = client.db("ibondevnews");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    database: mongodbAdapter(db, {
        client,
    }),
});