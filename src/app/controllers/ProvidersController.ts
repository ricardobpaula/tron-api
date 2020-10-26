import { Request, Response } from "express";

class ProvidersController {
    index(req: Request, res:Response){
        const providers = [
            {id: 1, name: 'Ford'},
            {id: 2, name: 'Mercedes'}
        ]

        return res.status(200).json(providers);
    }
}

export default new ProvidersController;