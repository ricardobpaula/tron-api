import { Router } from 'express';

import CreateProviderService from '../services/CreateProviderService';
import UpdateProviderService from '../services/UpdateProviderService';

import { getRepository } from 'typeorm';
import Provider from '../models/Provider';

const providersRouter = Router();

//List all providers
providersRouter.get('/', async (request, response) => {
    const providersRepository = getRepository(Provider);
    const providers = await providersRepository.find();
    if (providers.length === 0){
        return response.status(200).json({message: 'Providers not found'});
    }else {
        return response.status(200).json(providers);
    }
});

//Show a unique provider
providersRouter.get('/:id', async(request, response) => {
    const { id } = request.params;

    const providersRepository = getRepository(Provider);
    const provider = await providersRepository.findOne(id);

    if (!provider){
        return response.status(400).json({message: `Provider not found`});
    }else {
        return response.status(200).json(provider);
    }
});

// Create a new provider
providersRouter.post('/', async (request, response) => {
    
    const { name, cnpj, phone, email } = request.body;

    const createProvider = new CreateProviderService();

    const provider = await createProvider.execute({
        name,
        cnpj,
        phone,
        email
    });

    return response.status(201).json(provider);
});

//Delete a provider
providersRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const providersRepository = getRepository(Provider);
    const provider = await providersRepository.findOne(id);

    if(!provider){
        return response.status(400).json({message: 'Provider not found.'});
    }else {
        await providersRepository.delete(id);
        return response.status(200).json({message: `Provider ${provider.name} has been deleted`});
    }
});

//Update a provider
providersRouter.put('/:id', async (request, response) => {
    const { id } = request.params;
    const { name, cnpj, phone, email } = request.body;
    const updateProvider = new UpdateProviderService();
    const provider = await updateProvider.execute({
        id,
        name,
        cnpj,
        phone,
        email
    });

    return response.status(200).json(provider);

});
export default providersRouter;