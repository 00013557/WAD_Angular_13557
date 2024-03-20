export interface Issues{
    id: number,
    title: string,
    description: string,
    priority: string,
    status: string,
    userID: number,
    user:{
        id: number,
        username: string,
        email: string,
        role: string
    }
}