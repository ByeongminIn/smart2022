import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  export const makeUserDatas = (count) => {
    const userDatas = [];
  
    while (userDatas.length < count) {
      userDatas.push({
        avatar: `images/${getRandomIntInclusive(1, 10)}.jpg`,
        name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        phoneNo: faker.phone.phoneNumber()
      })
    }

    return userDatas;
  }

  export const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }
  