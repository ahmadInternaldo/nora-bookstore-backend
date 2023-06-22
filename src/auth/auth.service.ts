import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
// import { User } from 'src/user/entities/user.entity';
import { ResponseInterface } from 'src/utils/response.interface';
import { CustomSuccess } from 'src/utils/transform';
import { CustomError } from 'src/utils/error-exception';

@Injectable()
export class AuthService {
  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>,
  //   private jwtService: JwtService,
  // ) {}
  // async login(loginDto: LoginDto): Promise<ResponseInterface> {
  //   try {
  //     const user = await this.userRepository.findOne({
  //       where: { username: loginDto.username },
  //     });
  //     console.log(user)
  //     console.log(user);
  //     if (!user) {
  //       throw new NotFoundException(['Username or password may be wrong.']);
  //     }
  //     const isMatch = await bcrypt.compare(loginDto.password, user.password);
  //     if (!isMatch) {
  //       throw new NotFoundException(['Username or password may be wrong.']);
  //     }
  //     delete user.password;
  //     // generate token
  //     const token = await this.jwtService.signAsync({ ...user });
  //     return new Transform({ token }, 'login success.').transform();
  //   } catch (error) {
  //     new TransformError(error).transformError();
  //   }
  // }
}
