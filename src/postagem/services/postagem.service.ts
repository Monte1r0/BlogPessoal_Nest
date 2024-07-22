import { Injectable } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){}

    async findALL(): Promise<Postagem[]>{
        // SELECT * FROM tb_postagens;
        return await this.postagemRepository.find();
    }

}