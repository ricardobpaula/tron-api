import { getRepository } from 'typeorm';

import AppError from "../errors/AppError";

import Provider from '../models/Provider';

interface Request {
    name: string,
    cnpj: string,
    phone: string,
    email: string
}

class CreateUserService {
    public async execute({name, cnpj, phone, email}: Request): Promise<Provider> {
        const providerRepository = getRepository(Provider);

        const checkProviderExists = await providerRepository.findOne({
            where:[{cnpj}, {email}]
        });

        if (checkProviderExists) {
            if (checkProviderExists.cnpj === cnpj){
            throw new AppError('Provider CPNJ already used.');
            }else if(checkProviderExists.email === email ) {
                throw new AppError('Provider E-mail already used.');
            }
        }

        const provider = providerRepository.create({
            name,
            cnpj,
            phone,
            email
        });

        await providerRepository.save(provider);

        return provider;
    }
}

export default CreateUserService;