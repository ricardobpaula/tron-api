import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";

import Provider from "../models/Provider";

const providerController = Router();

const Providers = getRepository(Provider);

//List providers
providerController.get('/',async (req:Request, res:Response) => {
    
    try{
        const providers = await Providers.find();
        return res.status(200).json(providers);

    }catch(err){
        return res.status(500).json({message: err.message});
    };
});

//Create a provider
providerController.post('/', async (req:Request, res:Response) => {

});
export default providerController;