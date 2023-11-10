import { User } from '@/types/types';
import { OriginalPost, Post } from '../types/types';

const userData: User[] = [
  {
    id: 1,
    userName: 'johndoe82',
    email: 'johndoe82@example.com',
    password: 'password123',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    displayName: 'John Doe',
    isVerified: true,
  },
  {
    id: 2,
    userName: 'janesmith74',
    email: 'janesmith74@example.com',
    password: 'securePassword',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    displayName: 'Jane Smith',
    isVerified: false,
  },
  {
    id: 3,
    userName: 'alicej99',
    email: 'alicej99@example.com',
    password: 'mySecretPassword',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    displayName: 'Alice Johnson',
    isVerified: true,
  },
  {
    id: 4,
    userName: 'rbrown87',
    email: 'rbrown87@example.com',
    password: 'brownie123',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    displayName: 'Robert Brown',
    isVerified: false,
  },
  {
    id: 5,
    userName: 'emilydavis',
    email: 'emily.davis@example.com',
    password: 'ilovecoding',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    displayName: 'Emily Davis',
    isVerified: true,
  },
  {
    id: 6,
    userName: 'michaelwilson',
    email: 'michael.wilson@example.com',
    password: 'mike1234',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    displayName: 'Michael Wilson',
    isVerified: false,
  },
  {
    id: 7,
    userName: 'sarahmiller',
    email: 'sarah.miller@example.com',
    password: 'sarahsPass',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    displayName: 'Sarah Miller',
    isVerified: true,
  },
  {
    id: 8,
    userName: 'davidlee88',
    email: 'david.lee@example.com',
    password: 'dlee789',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    displayName: 'David Lee',
    isVerified: false,
  },
  {
    id: 9,
    userName: 'oliviaharris',
    email: 'olivia.harris@example.com',
    password: '12345678',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    displayName: 'Olivia Harris',
    isVerified: true,
  },
];

const dummyUser = (displayName: string, userName: string): User => {
  const user = userData[Math.floor(Math.random() * userData.length)];
  return { ...user, displayName, userName };
};

export const modifyPostData = (postDataArr: OriginalPost[]) => {
  return postDataArr.map((postData, i) => {
    const newPostData: Post = {
      ...postData,
      image: `https://picsum.photos/400/200?random=${i}`,
      user: dummyUser(postData.author, postData.authorSlug),
    };
    return newPostData;
  });
};
