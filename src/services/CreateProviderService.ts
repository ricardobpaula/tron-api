import { getRepository } from 'typeorm';

import AppError from "../errors/AppError";

import Provider from '../models/Provider';

interface Request {
    name: string,
    cnpj: string,
    phone: string,
    email: string
}

class CreateProviderService {
    public async execute({name, cnpj, phone, email}: Request): Promise<Provider> {
        const providerRepository = getRepository(Provider);

        const checkProviderExists = await providerRepository.findOne({
            where:[{cnpj}, {email}]
        });

        if (checkProviderExists) {
            throw new AppError('Provider E-mail or cnpj already used.');
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

export default CreateProviderService;