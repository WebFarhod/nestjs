import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { Customer } from 'src/customers/type/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'farhod@mail.com',
      name: 'farhod',
    },
    {
      id: 2,
      email: 'farrux@mail.com',
      name: 'farrux',
    },
    {
      id: 3,
      email: 'muhammadyusufu@mail.com',
      name: 'muhammadyusuf',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
