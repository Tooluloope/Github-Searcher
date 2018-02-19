import { Repository } from "../model/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repo shows the usage of camera functunality',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Camera',
        description: 'This repo shows the usage of camera functunality',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Camera',
        description: 'This repo shows the usage of camera functunality',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Camera',
        description: 'This repo shows the usage of camera functunality',
        owner: USER_LIST[1]
    }
]
export const REPOSITORY_LIST = repositoryList;