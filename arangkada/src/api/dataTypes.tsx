export type Account = {
  accountId: number,
  firstname: string,
  middlename: string,
  lastname: string,
  birthdate: string,
  age: number,
  contactNumber: string,
  address: string,
  gender: string,
  username: string,
  password: string,
  accountType: string,
}

export type Operator = {
  operatorId: number,
  businessName: string,
  permitNumber: string,
  account: Account,
}

export type Driver = {
  driverid: number,
  licensenumber: string,
  licensecode: string,
  account: Account,
}

export type Vehicle = {
  vehicleId: number,
  plateNumber: string,
  route: string,
  vehicleType: string,
  makeModel: string,
  vin: number,
  orStatus: string,
  vehicleCondition: string,
  rentalFee: number,
  operator: Operator,
}

export type Rental = {
  rentalId: number,
  startDate: string,
  endDate: string,
  status: string,
  vehicle: Vehicle,
  driver: Driver,
}

export type Payment = {
  paymentId: number,
  amount: number,
  datePaid: string,
  rent: Rental
}