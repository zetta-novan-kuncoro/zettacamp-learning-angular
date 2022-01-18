export type Post = {
  id: number;
  title: string;
  content: string;
  slug: string;
};

export const posts: Post[] = [
  {
    id: 123456,
    title: 'First Post',
    content: 'Hello from first post',
    slug: 'hello-from-first-post',
  },
  {
    id: 234567,
    title: 'Second Post',
    content: 'Hello from second post',
    slug: 'hello-from-second-post',
  },
  {
    id: 345678,
    title: 'Refuse to leave cardboard box',
    content: 'Bite off human\'s toes rub whiskers on bare skin act innocent. Hell is other people love for if it fits, i sits sniff all the things so push your water glass on the floor run around the house at 4 in the morning for leave fur on owners clothes. Run off table persian cat jump eat fish do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life fight own tail or meow stare at guinea pigs.',
    slug: 'refuse-to-leave-cardboard-box'
  }
];
