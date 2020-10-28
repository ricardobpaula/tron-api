import { getCustomRepository, getRepository } from 'typeorm';

import AppError from "../errors/AppError";

import Provider from '../models/Provider';
import ProviderRepository from '../repositories/ProviderRepository';

interface Request {
    id: string,
    name: string,
    cnpj: string,
    phone: string,
    email: string
}

class UpdateUserService {
    public async execute({id, name, cnpj, phone, email}: Request):Promise<Provider>{
        const providerRepository = getCustomRepository(ProviderRepository);
        
        const provider = await providerRepository.findOne(id);
        
        if (!provider){
            throw new AppError('Provider do not exist.');
        }else {
           
             const newProvider = await providerRepository.findAndUpdate(id, {
                name,
                cnpj,
                phone,
                email
            });
            return newProvider;
        }
    };
}

export default UpdateUserService;
