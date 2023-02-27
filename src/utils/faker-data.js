//faker-data
import { faker } from "@faker-js/faker";

export let users = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  };
}

for (var i = 0; i < 25; i++) {
  users.push(createRandomUser());
}
