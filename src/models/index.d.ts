import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posts {
  readonly id: string;
  readonly text?: string;
  readonly usersID?: string;
  readonly time?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Posts, PostsMetaData>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

export declare class Users {
  readonly id: string;
  readonly email: string;
  readonly class?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly UserPosts?: (Posts | null)[];
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}