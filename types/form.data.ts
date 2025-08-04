export interface Category {
    id: string;
    name: string;
}

export interface FormData {
    title: string;
    code: string;
    categoryId: string;
    language: string;
    anonymous: boolean;
    author: string;
}
