import { faker } from "@faker-js/faker";
import fs from "fs";

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const users = Array.from({ length: 100 }).map(() => {
  return createRandomUser();
});

fs.writeFileSync("./docs/users.json", JSON.stringify(users));
