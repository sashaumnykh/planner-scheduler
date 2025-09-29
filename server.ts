import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";

interface User {
  id: string;
  name: string;
}

interface Task {
  id: string;
  title: string;
  executor: string | null;
  start?: string;
  end?: string;
}

const users: User[] = JSON.parse(fs.readFileSync("./mock-data/users.json", "utf8"));
const tasks: Task[] = JSON.parse(fs.readFileSync("./mock-data/tasks.json", "utf8"));

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Task {
    id: ID!
    title: String!
    executor: User
    start: String
    end: String
  }

  type Query {
    users: [User!]!
    tasks: [Task!]!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    tasks: () => tasks,
  },
  Task: {
    executor: (parent: Task) => {
      if (!parent.executor) return null;
      return users.find((u) => u.id === parent.executor) || null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Mock GraphQL server running at ${url}`);
});