import { EntityRepository, Repository } from 'typeorm';
import AppError from '../errors/AppError';
import Provider from '../models/Provider';

interface Request {
    name: string,
    cnpj: string,
    phone: string,
    email: string
}

@EntityRepository(Provider)
export default class ProviderRepository extends Repository<Provider> {
    public async findAndUpdate(id:string,{name, cnpj, phone, email}:Request): Promise<Provider>{
            this.update(Number(id), {
                name,
                cnpj,
                phone,
                email
            });
            const newProvider = await this.findOne(id);
            if(!newProvider){
                throw new AppError('Provider do not exist.');
            }

            return newProvider;
            
    }
}